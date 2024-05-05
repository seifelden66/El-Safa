import { HttpClient, HttpClientModule } from "@angular/common/http";
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
import {MatTabsModule} from '@angular/material/tabs';
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
  product_details: any;
  rating_coommint : FormGroup
  @Input() id?: any;

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
      username : new FormControl (''),
      rate:new FormControl(''),
      comment : new FormControl('')
    })

  }
  ngOnInit(): void {
    // console.log(this.ActivatedRoute.snapshot.params['id']);
    const product_id = this.ActivatedRoute.snapshot.params["id"];
    // console.log(product_id);

    this.http
      .get(`http://localhost:8000/v1/products/${product_id}`)
      .subscribe((res: any) => {
        this.product_details = res;
        this.main_img = this.product_details.images[0];
        console.log(this.product_details);
        
      });
    this.userToken = this.cookieService.get("userToken");
  }

  //  ==================================

  activeIndex: number = 0;


  // =======cart operations==============================

  addToCart(id : string){  
    this.http.post("http://localhost:8000/v1/cart/addToCart", {product : {id : id, quantity : 1}}, {headers : {
      Authorization : `Bearer ${this.userToken}`
    }}).subscribe(
      res =>{
        console.log(res);
      this.toastr.success("added to Cart", "Success"); // Change this line
      },
      error => {
        console.log(error);
      }
    )
  }

  // ===================rating and comments============================

  submithandel(){
    console.log(this.rating_coommint.value);
    
  }

  // =================================================

  active = 1;

}
