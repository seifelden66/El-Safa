import { CookieService } from "./../../services/cookie.service";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component, OnInit, inject } from "@angular/core";
import { FooterComponent } from "../footer/footer.component";
import { FirestnavComponent } from "../firestnav/firestnav.component";
import { SecondHeaderComponent } from "../second-header/second-header.component";
import { TableModule } from "primeng/table";
import { ToastrService } from "ngx-toastr";
import { FormsModule } from "@angular/forms";
import { NgClass, NgIf } from "@angular/common";

@Component({
  selector: "app-order-details",
  standalone: true,
  imports: [
    HttpClientModule,
    FooterComponent,
    FirestnavComponent,
    SecondHeaderComponent,
    TableModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    NgClass,
    NgIf,
  ],
  templateUrl: "./order-details.component.html",
  styleUrl: "./order-details.component.css",
})
export class OrderDetailsComponent implements OnInit {
  order_id!: any;
  user_token!: any;
  order_details!: any;
  user!: any;
  orders!: any;
  orderStatus!: string;
  orderMessage!: string;
  modelStatus: boolean = false;

  constructor(
    private http: HttpClient,
    private ActivatedRoute: ActivatedRoute,
    private CookieService: CookieService,
    private router: Router
  ) {}

  toster = inject(ToastrService);

  ngOnInit(): void {
    this.order_id = this.ActivatedRoute.snapshot.params["id"];
    this.user_token = this.CookieService.get("userToken");
    this.getOrderDetails();
  }

  getOrderDetails() {
    this.http
      .get(`http://localhost:8000/v1/users/orders-details?id=${this.order_id}`, {
        headers: {
          Authorization: `Bearer ${this.user_token}`,
        },
      })
      .subscribe(
        (res: any) => {
          console.log(res);

          this.orders = res.order;
          this.orderStatus = res.order.order_status;
        },
        (error) => {
          console.log(error.error);
        }
      );
  }
  hideModel() {
    this.modelStatus = false;
  }
  errorHandler(event: any) {
    event.target.src =
      "https://cdn.pixabay.com/photo/2016/04/11/10/45/sunrise-1321710_1280.jpg";
  }
}
