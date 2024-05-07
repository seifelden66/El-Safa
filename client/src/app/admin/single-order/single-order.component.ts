import { ActivatedRoute, RouterLink } from "@angular/router";
import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NgClass, NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "../../services/cookie.service";

@Component({
  selector: "app-single-order",
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, NgClass, NgIf, RouterLink],
  templateUrl: "./single-order.component.html",
  styleUrl: "./single-order.component.css",
})
export class SingleOrderComponent {
  orderId!: any;
  adminToken!: any;
  user!: any;
  orders!: any;
  orderStatus!: string;
  orderMessage!: string;
  modelStatus: boolean = false;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private http: HttpClient,
    private cookieCervice: CookieService
  ) {}

  ngOnInit() {
    this.orderId = this.ActivatedRoute.snapshot.params["id"];
    this.adminToken = this.cookieCervice.get("adminToken");
    this.getOrderDetails();
  }

  getOrderDetails() {
    this.http
      .get(`http://localhost:8000/v1/users/orders-details?id=${this.orderId}`, {
        headers: {
          Authorization: `Bearer ${this.adminToken}`,
        },
      })
      .subscribe(
        (res: any) => {
          this.user = res.user;
          this.orders = res.order;
          this.orderStatus = res.order.order_status;
        },
        (error) => {
          console.log(error.error);
        }
      );
  }

  confirmOrder(id: string) {
    this.http
      .patch(
        "http://localhost:8000/v1/admin/confirm-order",
        { id: this.orderId },
        {
          headers: {
            Authorization: `Bearer ${this.adminToken}`,
          },
        }
      )
      .subscribe(
        (res: any) => {
          this.orderStatus = res.orderStatus;
          this.modelStatus = true;
          this.orderMessage = res.message;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  dispatchOrder(id: string) {
    this.http
      .patch(
        "http://localhost:8000/v1/admin/dispatch-order",
        { id: this.orderId },
        {
          headers: {
            Authorization: `Bearer ${this.adminToken}`,
          },
        }
      )
      .subscribe(
        (res: any) => {
          this.orderStatus = res.orderStatus;
          this.modelStatus = true;
          this.orderMessage = res.message;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deliverOrder(id: string) {
    this.http
      .patch(
        "http://localhost:8000/v1/admin/deliver-order",
        { id: this.orderId },
        {
          headers: {
            Authorization: `Bearer ${this.adminToken}`,
          },
        }
      )
      .subscribe(
        (res: any) => {
          this.orderStatus = res.orderStatus;
          this.modelStatus = true;
          this.orderMessage = res.message;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  hideModel() {
    this.modelStatus = false;
  }
}
