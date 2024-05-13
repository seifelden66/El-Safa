import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Component, Input, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
import { SecondHeaderComponent } from "../second-header/second-header.component";
import { FooterComponent } from "../footer/footer.component";
import { CartService } from "../services/cart.service";
import { FirestnavComponent } from "../firestnav/firestnav.component";
import { CookieService } from "../../services/cookie.service";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";
import { ToastrService } from "ngx-toastr";

interface Rating {
  value: number;
  _id: string;
  date: string;
}
@Component({
  selector: "app-product-details",
  standalone: true,
  imports: [
    HttpClientModule,
    NgbRatingModule,
    TabViewModule,
    ButtonModule,
    SecondHeaderComponent,
    FooterComponent,
    FirestnavComponent,
    ReactiveFormsModule,
    MatTabsModule,
    FormsModule,
  ],
  templateUrl: "./product-details.component.html",
  styleUrl: "./product-details.component.css",
})

export class ProductDetailsComponent implements OnInit {
  main_img: any;
  userToken!: any;
  product_details: any;
  rating: number | null = null; 
  comment: string = "";
  product_id: any;
  ratingError: string = ""; 
  commentError: string = "";
  ratingSubmitted: boolean = false;
  commentSubmitted: boolean = false;
  averageRatings: { [productId: string]: number } = {};

  toster = inject(ToastrService);


  @Input() id?: any;

  reternsrc(newsrc: any) {
    this.main_img = newsrc;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private cartService: CartService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.product_id = this.activatedRoute.snapshot.params["id"];
    this.userToken = this.cookieService.get("userToken"); // Get user token from cookies

    this.getProduct()

}

getProduct(){
  this.http
    .get(`http://localhost:8000/v1/products/${this.product_id}`)
    .subscribe((res: any) => {
      this.product_details = res;
      this.main_img = this.product_details.images[0];
      this.averageRatings = this.getAverageRatings([this.product_details]); // Pass an array with a single product
    });
  this.userToken = this.cookieService.get("userToken");
}


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


submitRating() {
  const apiUrl = `http://localhost:8000/v1/products/${this.product_id}/ratings`;
  const token = this.userToken;
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  const body = {
    value: this.rating,
  };

  this.http.post(apiUrl, body, { headers }).subscribe(
    (response) => {
      console.log("Rating submitted successfully:", response);
      this.ratingError = ""; // Clear rating error message
      this.rating = null;
    },
    (error: HttpErrorResponse) => {
      console.error("Error submitting rating:", error);
      if (error.error && error.error.message) {
        this.ratingError = error.error.message; // Extract error message from API response
      } else {
        this.ratingError = "Failed to submit rating. Please try again.";
      }
    }
  );
}

submitComments() {
  const apiUrl = `http://localhost:8000/v1/products/${this.product_id}/comments`;
  const token = this.userToken;
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  const body = {
    text: this.comment,
  };

  this.http.post(apiUrl, body, { headers }).subscribe(
    (response) => {
      console.log("Comments submitted successfully:", response);
      this.commentError = ""; // Clear comment error message
      this.comment = "";
    },
    (error: HttpErrorResponse) => {
      console.error("Error submitting comments:", error);
      if (error.error && error.error.message) {
        this.commentError = error.error.message; // Extract error message from API response
      } else {
        this.commentError = "Failed to submit comments. Please try again.";
      }
    }
  )
}

show() {
  this.toster.success("added to Cart", "Success");
}
redirect(){
  this.router.navigate([`home`])
}

addToCart(id : string){  
  this.http.post("http://localhost:8000/v1/cart/addToCart", {product : {id : id, quantity : 1}}, {headers : {
    Authorization : `Bearer ${this.userToken}`
  }}).subscribe(
    res =>{
      console.log(res);
    },
    error => {
      console.log(error);
    }
  )
}



  
}
    // =================================================







