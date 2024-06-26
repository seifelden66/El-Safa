import { CookieService } from "./../../services/cookie.service";
import { PaymentService } from "./../services/payment.service";
import { Component, OnInit, inject } from "@angular/core";
import { SecondHeaderComponent } from "../second-header/second-header.component";
import { FooterComponent } from "../footer/footer.component";
import { CartService } from "../services/cart.service";
import { CommonModule } from "@angular/common";
import { CounterService } from "../services/counter.service";
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { FirestnavComponent } from "../firestnav/firestnav.component";
import { HttpClient } from "@angular/common/http";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { TableModule } from "primeng/table";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [
    SecondHeaderComponent,
    FooterComponent,
    CommonModule,
    NgbRatingModule,
    FirestnavComponent,
    RouterLink,
    RouterLinkActive,
    NgbTooltipModule,
    TableModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  templateUrl: "./cart.component.html",
  styleUrl: "./cart.component.css",
  animations: [
    trigger("deleteAnimation", [
      state(
        "clicked",
        style({
          transform: "scale(1.1)",
          opacity: 0,
        })
      ),
      transition("* => clicked", [animate("0.5s")]),
    ]),
  ],
})
export class CartComponent implements OnInit {
  
  count: number = 0;
  totalP: number = 0;
  userToken: any;
  cartItems!: any;
  CartService = inject(CartService);
  totalPrice!: number;
  userDetails!: FormGroup;
  isClicked: boolean = false;
  PayModelForm: boolean = false;
  showLoader: boolean = false; // Flag to control loader visibility

  constructor(
    private CounterService: CounterService,
    private http: HttpClient,
    private cookieservice: CookieService
  ) {}

  ngOnInit(): void {
    this.userToken = this.cookieservice.get("userToken");
    this.getCartItems();
    this.userDetails = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"),
      ]),
      Delivery_address: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      type_of_payment: new FormControl("cache"),
    });


    setTimeout(() => {
      this.showLoader = false;
    },4000);

  }

  hidePayModelForm() {
    this.PayModelForm = false;
  }
  showPayModelForm() {
    this.PayModelForm = true;
  }

  payCash() {
    this.userDetails.controls["type_of_payment"].setValue("cache");
    Object.keys(this.userDetails.controls).forEach((field) => {
      const control = this.userDetails.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if (this.userDetails.invalid) {
      return;
    }
    this.postOrder();
    this.hidePayModelForm();
    alert("your order is successfully saved ");
  }

  payOnline() {
    this.userDetails.controls["type_of_payment"].setValue("online");
    Object.keys(this.userDetails.controls).forEach((field) => {
      const control = this.userDetails.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if (this.userDetails.invalid) {
      return;
    }
    this.payment();
  }

  increase(item: any) {
    if (item.quantity >= 1) {
      item.quantity++;
      this.http
        .post(
          "http://localhost:8000/v1/cart/addToCart",
          { product: { id: item.id, quantity: item.quantity } },
          {
            headers: {
              Authorization: `Bearer ${this.userToken}`,
            },
          }
        )
        .subscribe(
          (res: any) => {
            this.totalPrice = res.totalPrice;
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  decrease(item: any) {
    if (item.quantity > 1) {
      item.quantity--;

      this.http
        .post(
          "http://localhost:8000/v1/cart/addToCart",
          { product: { id: item.id, quantity: item.quantity } },
          {
            headers: {
              Authorization: `Bearer ${this.userToken}`,
            },
          }
        )
        .subscribe(
          (res: any) => {
            this.totalPrice = res.totalPrice;
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  // SECTION - payment flow functions with paymob
  private API_KEY =
    "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1RjME1ETXdMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuTnp3cS1sdHNhaDl1VFMyWXBTUjlUSWFYOVQ0bFp3UGNPRFVKZG9wRER6MUFmbm9uRl9oTEJoeTlMYUpVbmkyTl8td1NMTzdTbGtnMXFkZGJsYXVKemc=";

  payment() {
    const data = { api_key: this.API_KEY };
    this.http
      .post("https://accept.paymob.com/api/auth/tokens", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .subscribe(
        (res: any) => {
          console.log(res);
          const token = res.token;
          this.paymentSecndStep(token);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  paymentSecndStep(token: string) {
    const data = {
      auth_token: token,
      delivery_needed: "false",
      amount_cents: "100",
      currency: "EGP",
      items: [
        {
          name: "ASC1515",
          amount_cents: "500000",
          description: "Smart Watch",
          quantity: "1",
        },
        {
          name: "ERT6565",
          amount_cents: "200000",
          description: "Power Bank",
          quantity: "1",
        },
      ],
    };
    this.http
      .post(
        "https://accept.paymob.com/api/ecommerce/orders",
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .subscribe(
        (res: any) => {
          const id = res.id;
          this.paymentThirdStep(token, id);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  paymentThirdStep(token: string, id: string) {
    const data = {
      auth_token: token,
      amount_cents: "100",
      expiration: 3600,
      order_id: id,
      billing_data: {
        apartment: "2",
        email: "kareem.345@yahoo.com",
        floor: "3",
        first_name: "kareem",
        street: "test",
        building: "test",
        phone_number: "01016899037",
        shipping_method: "",
        postal_code: "7991164",
        city: "dameitta",
        country: "egypt",
        last_name: "zaher",
        state: "dameitta",
      },
      currency: "EGP",
      integration_id: 4566582,
    };
    this.http
      .post(
        "https://accept.paymob.com/api/acceptance/payment_keys",
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .subscribe(
        (res: any) => {
          const myToken = res.token;
          this.cardPayment(myToken);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  cardPayment(token: string) {
    try {
      const iframe = `https://accept.paymob.com/api/acceptance/iframes/842075?payment_token=${token}`;
      location.href = iframe;
      this.postOrder();
    } catch (error) {
      console.error("Error in cardPayment:", error);
    }
  }
  // !SECTION end section payment flow with paymob
  postOrder() {
    this.http
      .post("http://localhost:8000/postOrder", this.userDetails.value, {
        headers: {
          Authorization: `Bearer ${this.userToken}`,
        },
      })
      .subscribe(
        (res) => {},
        (error) => {
          console.log(error);
        }
      );
  }
  // ================delet animations=============================

  getCartItems() {
    this.http
      .get("http://localhost:8000/v1/cart/cartitems", {
        headers: {
          Authorization: `Bearer ${this.userToken}`,
        },
      })
      .subscribe((res: any) => {
        console.log(res);
        this.cartItems = res;
        this.totalPrice = this.cartItems.totalPrice;
      });
  }

  deleteItem(id: string) {
    this.http
      .delete(`http://localhost:8000/v1/cart/deleteFromCart?id=${id}`, {
        headers: { Authorization: `Bearer ${this.userToken}` },
      })
      .subscribe(
        (res: any) => {
          this.cartItems = res;
          this.totalPrice = res.totalPrice;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
