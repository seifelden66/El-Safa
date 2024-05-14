import { CounterService } from "./../services/counter.service";
import { CartService } from "./../services/cart.service";
import { HttpClient } from "@angular/common/http";
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from "primeng/button";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import {
  Component,
  OnInit,
  inject,
  OnDestroy,
  TemplateRef,
} from "@angular/core";

import { SliderModule } from "primeng/slider";
import { FormControl, FormGroup, FormsModule } from "@angular/forms";
import { SecondHeaderComponent } from "../second-header/second-header.component";
import { FooterComponent } from "../footer/footer.component";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { MessageService } from "primeng/api";
import { HttpClientModule } from "@angular/common/http"; // Import HttpClientModule

import { Toast, ToastModule } from "primeng/toast"; // Correct import path
import { FirestnavComponent } from "../firestnav/firestnav.component";
import { RatingModule } from "primeng/rating";
import { ToastrService } from "ngx-toastr";
import { CookieService } from "../../services/cookie.service";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

interface Rating {
  value: number;
  _id: string;
  date: string;
}
@Component({
  selector: "app-product-page",
  standalone: true,
  imports: [
    NgbRatingModule,
    HttpClientModule,
    ButtonModule,
    SliderModule,
    FormsModule,
    SecondHeaderComponent,
    FooterComponent,
    HttpClientModule,
    ToastModule,
    FirestnavComponent,
    FormsModule,
    RatingModule,
    RouterLink,
    MatProgressSpinnerModule
    
  ],
  templateUrl: "./product-page.component.html",
  styleUrl: "./product-page.component.css",
  providers: [MessageService],
})
export class ProductPageComponent implements OnInit {
  // rating = 8;
  currentPage: number = 1;
  totalPages: number = 1;
  userToken: any;
  rating = 4;
  search!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private messageService: MessageService,
    private cookkeService: CookieService,
    private ActivatedRoute: ActivatedRoute,
    private CartService : CartService
  ) {
    config.backdrop = "static";
    config.keyboard = false;
  }

  allproducts: any = [];
  count: number = 0;
  selectedCategory: string | null = null;
  category: any[] = [];
  heartToggled: { [id: string]: boolean } = {};
  averageRatings: { [productId: string]: number } = {};
  showLoader: boolean = true;
  toster = inject(ToastrService);


  toggleHeart(prod_id: any , product_data : any) {
    // this.toster.success("added to Wishlist", "Success");
    this.heartToggled[prod_id] = !this.heartToggled[prod_id];
    console.log(this.heartToggled);
    if (this.heartToggled[prod_id]) {
      this.toster.success("added to Wishlist", "Success");
      this.CartService.addtocart(product_data)
      console.log(product_data);
      

    } else {
      this.toster.error("removed from Wishlist", "Removed");
    }
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  ngOnInit(): void {
    this.getUniqueCategories();

    this.userToken = this.cookkeService.get("userToken");

    this.ActivatedRoute.params.subscribe((param) => {
      if (param["search"]) {
        this.search = param["search"];
        console.log(param["search"]);
      } else {
        this.getallproduct();
      }
    });

    setTimeout(() => {
      this.showLoader = false;
    }, 3000);

  }


  getallproduct() {
    this.http.get("http://localhost:8000/v1/products").subscribe((res: any) => {
      this.allproducts = res.products;
      this.averageRatings = this.getAverageRatings(this.allproducts);

      console.log(this.allproducts);
    });
  }


  redirect(product_id: any) {
    this.router.navigate([`/product_details`, product_id]);
  }
// ======================================================



  // =====================================
  open(content: any) {
    this.modalService.open(content);
  }


  // =======filter by category====================================

  selectedCategories: string[] = []; // Track selected categories

  getUniqueCategories(): void {
    this.http.get("http://localhost:8000/v1/products").subscribe(
      (res: any) => {
        if (res && Array.isArray(res.products)) {
          const uniqueCategoriesSet = new Set(
            res.products.map((item: any) => item.category?.name)
          );
          this.category = Array.from(uniqueCategoriesSet);
        } else {
          console.log("Products not found or is not an array");
        }
      },
      (err) => {
        console.log(err.error);
      }
    );
  }


  onCategoryChange(category: string): void {
    if (category === "All Products") {
      this.selectedCategory = null; // Reset selected category to null
    } else {
      this.selectedCategory = category; // Set selected category
    }
    this.filterProducts(); // Apply filtering
  }

  filterProducts(): void {
    if (!this.selectedCategory) {
      // If no category is selected, show all products
      this.getallproduct();
      return;
    }

    // Filter products based on the selected category
    this.http.get("http://localhost:8000/v1/products").subscribe(
      (res: any) => {
        if (res && Array.isArray(res.products)) {
          this.allproducts = res.products.filter(
            (product: any) =>
              product.category &&
              product.category.name === this.selectedCategory
          );
          this.totalPages = res.totalPages;
        } else {
          console.log("Products not found or is not an array");
        }
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  
  // ================add to cart===============================
  addToCart(id: string) {
    this.http
      .post(
        "http://localhost:8000/v1/cart/addToCart",
        { product: { id: id, quantity: 1 } },
        {
          headers: {
            Authorization: `Bearer ${this.userToken}`,
          },
        }
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.toster.success('Product added to cart','Success')

        },
        (error) => {
          console.log(error);
          this.toster.error('Please Login Firest')

        }
      );
  }

    // ===============================================
    getAverageRatings(products: any[]): { [productId: string]: number } {
      const averageRatings: { [productId: string]: number } = {};
  
      products.forEach((product: any) => {
          let totalRating = 0;
          let totalRatingsCount = 0;
  
          product.ratings.forEach((rating: Rating) => {
              totalRating += rating.value;
              totalRatingsCount++;
          });
  
          if (totalRatingsCount === 0) {
              averageRatings[product._id] = 0; // If no ratings, assign 0
          } else {
              averageRatings[product._id] = totalRating / totalRatingsCount; // Calculate average rating
          }
      });
  
      return averageRatings;
  }

  // =============ADd to Wish list===============================





}
