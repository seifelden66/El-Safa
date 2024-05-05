import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
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
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from '@angular/material/tabs';
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

  ],
  templateUrl: "./product-details.component.html",
  styleUrl: "./product-details.component.css",
})
export class ProductDetailsComponent implements OnInit {
  main_img: any;
  userToken!: any;
  product_details!: any;
  rating_coommint: FormGroup
  @Input() id?: any
  product_id!: any;
  reternsrc(newsrc: any) {
    this.main_img = newsrc;
  }

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private http: HttpClient,
    private CartService: CartService,
    private router: Router,
    private cookieService: CookieService,
    private toastr: ToastrService // Add this line

  ) {

    this.rating_coommint = new FormGroup({
      rate: new FormControl(''),
      comment: new FormControl('')

    })

  }
  ngOnInit(): void {
    // console.log(this.ActivatedRoute.snapshot.params['id']);
    this.product_id = this.ActivatedRoute.snapshot.params["id"];
    // console.log(this.product_id);
    this.userToken = this.cookieService.get("userToken");
    this.getProduct()
  }

  getProduct() {
    this.http
      .get(`http://localhost:8000/v1/products/${this.product_id}`)
      .subscribe((res: any) => {
        this.product_details = res;
        this.main_img = this.product_details.images[0];
        console.log(this.product_details.originalPrice);
      },
        error => {
          console.log(error);
        });
  }
  //  ==================================

  activeIndex: number = 0;


  // =======cart operations==============================

  addToCart(id: string) {
    this.http.post("http://localhost:8000/v1/cart/addToCart", { product: { id: id, quantity: 1 } }, {
      headers: {
        Authorization: `Bearer ${this.userToken}`
      }
    }).subscribe(
      res => {
        console.log(res);
        // this.toastr.success("added to Cart", "Success"); // Change this line

      },
      error => {
        console.log(error);
      }
    )
  }

  // ===================rating and comments============================
  submithandel() {
    // Get the rate and comment values from the form
    const rate = this.rating_coommint.value.rate;
    const comment = this.rating_coommint.value.comment;
  
    // Prepare the request payload
    const requestBody = {
      value: rate, // Include the rate value in the payload
      comment: comment // Optionally include the comment value in the payload
    };
  
    // Send the HTTP POST request to the API
    this.http.post(`http://localhost:8000/v1/products/${this.product_id}/ratings`, requestBody, {
      headers: {
        Authorization: `Bearer ${this.userToken}`,
        'Content-Type': 'application/json'
      }
    }).subscribe(
      (res: any) => {
        console.log('Rating submitted successfully:', res);
        // Optionally handle success response
      },
      (error: any) => {
        console.error('Error submitting rating:', error.error.message);
        // Optionally handle error response
      }
    );
  }
  
  // submithandel() {
  //   const url =`http://localhost:8000/v1/products/${this.product_id}/ratings`
    
  //   // Retrieve user token from local storage
  //   const userToken = this.cookieService.get("userToken");

  //   if (!userToken) {
  //     throw new Error('User token not found in local storage');
  //   }

  //   // Prepare headers with Authorization token
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${userToken}`,
  //     'Content-Type': 'application/json'
  //   });

  //   // Prepare the body
  //   const body = { value: 5 };

  //   // Make the POST request
  //   console.log(headers);
    
  //   return this.http.post(url, body, { headers});
  
  
  // }

  
  //   submithandel() {
  //     const url = `http://localhost:8000/v1/products/${this.product_id}/ratings`;
      
  //     // Prepare headers with Authorization token
  //     const headers = new HttpHeaders({
  //       'Authorization': `Bearer ${this.userToken}`,
  //       'Content-Type': 'application/json'
  //     });
  //     const rate = this.rating_coommint.value.rate
  
  //     // Prepare the body
  //     const body = { value: rate };
  
  //     // Make the POST request
  //     // console.log(this.http.post(url, body, {headers}));
  //     return this.http.post(url, body, {headers});
      
  // 

}
  
    // =================================================







