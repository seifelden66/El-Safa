import { CounterService } from "./../services/counter.service";
import { CartService } from "./../services/cart.service";
import { HttpClient } from "@angular/common/http";
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from "primeng/button";
import { Router } from "@angular/router";
import {
  Component,
  OnInit,
  inject,
  OnDestroy,
  TemplateRef,
} from "@angular/core";

import { SliderModule } from "primeng/slider";
import { FormsModule } from "@angular/forms";
import { SecondHeaderComponent } from "../second-header/second-header.component";
import { FooterComponent } from "../footer/footer.component";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { MessageService } from "primeng/api";
import { HttpClientModule } from "@angular/common/http"; // Import HttpClientModule

import { Toast, ToastModule } from "primeng/toast"; // Correct import path
import { FirestnavComponent } from "../firestnav/firestnav.component";

import { ToastrService } from "ngx-toastr";

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
  ],
  templateUrl: "./product-page.component.html",
  styleUrl: "./product-page.component.css",
  providers: [MessageService],
})
export class ProductPageComponent implements OnInit {
  // rating = 8;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(
    private http: HttpClient,
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private CounterService: CounterService,
    private messageService: MessageService
  ) {
    config.backdrop = "static";
    config.keyboard = false;
  }

  allproducts: any = [];
  count: number = 0;
  category: any;
  selectedCategory: string | null = null;

  toster = inject(ToastrService);

  show() {
    this.toster.success("added to Cart", "Success");
  }
  show2() {
    this.toster.success("added to Wishlist", "Success");
  }

  ngOnInit(): void {
    this.getallproduct();

    this.getUniqueCategories();

    this.CounterService.getcount().subscribe((value) => {
      this.count = value;
    });
  }

  getallproduct(page = 1) {
    this.http
      .get("http://localhost:8000/v1/products?page=${page}")
      .subscribe((res: any) => {
        this.allproducts = res.products;
        this.totalPages = res.totalPages;
        console.log(this.allproducts);
        
      });
  }
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.getallproduct(pageNumber);
  }

  redirect(product_id: any) {
    this.router.navigate([`/product_details`, product_id]);
  }

  getUniqueCategories(): void {
    this.http.get("https://dummyjson.com/products").subscribe(
      (res: any) => {
        // Check if res.products exists and is an array
        if (res && Array.isArray(res.products)) {
          // Extract unique categories using Set
          const uniqueCategoriesSet = new Set(
            res.products.map((item: any) => item.category)
          );
          // Convert Set back to array
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

  // ===================================

  rangeValues: number[] = [0, 500];

  // =====================================
  open(content: any) {
    this.modalService.open(content);
  }
  // ======================================

  CartService = inject(CartService);

  redirecttocart(product_details: any) {
    this.CartService.addtocart(product_details);
    // console.log(product_details);
  }
  // =============counter services=========================
  increase() {
    this.CartService.setcount((this.count += 1));
  }
}
