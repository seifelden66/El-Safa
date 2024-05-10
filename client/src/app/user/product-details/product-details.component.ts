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
// export class ProductDetailsComponent implements OnInit {
//   main_img: any;
//   userToken!: any;
//   product_details: any;
//   rating!: number;
//   @Input() id?: any;

//   reternsrc(newsrc: any) {
//     this.main_img = newsrc;
//   }

//   constructor(
//     private ActivatedRoute: ActivatedRoute,
//     private http: HttpClient,
//     private CartService: CartService,
//     private router: Router,
//     private cookieService: CookieService
//   ) {
//   }
//   ngOnInit(): void {
//     // console.log(this.ActivatedRoute.snapshot.params['id']);
//     const product_id = this.ActivatedRoute.snapshot.params["id"];
//     // console.log(product_id);

//     this.http
//       .get(`http://localhost:8000/v1/products/${product_id}`)
//       .subscribe((res: any) => {
//         this.product_details = res;
//         this.main_img = this.product_details.images[0];
//         console.log(this.product_details);

//       });
//     this.userToken = this.cookieService.get("userToken");
//   }

//   //  ==================================

//   activeIndex: number = 0;

//   // =======cart operations==============================

//   addtocart(product_details: any) {
//     // console.log(product_details);
//     this.CartService.addtocart(product_details);
//     // console.log(product_details);
//     this.router.navigate([`cart`]);
//   }

//   // ===================rating and comments============================

//   submitRating() {
//     const productId = product_id;
//     const apiUrl = `http://localhost:8000/v1/products/${productId}/ratings`;
//     const token = 'YOUR_USER_TOKEN_HERE';

//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${token}`
//     });

//     const body = {
//       value: this.rating
//     };

//     this.http.post(apiUrl, body, { headers }).subscribe(
//       response => {
//         console.log('Rating submitted successfully:', response);
//       },
//       error => {
//         console.error('Error submitting rating:', error);
//       }
//     );
//   }

//   // =================================================

//   submitComments() {
//     const productId = 'YOUR_PRODUCT_ID_HERE';
//     const apiUrl = `http://localhost:8000/v1/products/${productId}/ratings`;
//     const token = 'YOUR_USER_TOKEN_HERE';

//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${token}`
//     });

//     const body = {
//       value: this.rating
//     };

//     this.http.post(apiUrl, body, { headers }).subscribe(
//       response => {
//         console.log('Rating submitted successfully:', response);
//       },
//       error => {
//         console.error('Error submitting rating:', error);
//       }
//     );
//   }
//   active = 1;

// }
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
    });
  this.userToken = this.cookieService.get("userToken");
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







