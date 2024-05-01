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
      .get(`http://localhost:8000/v1/admin/orders-details?id=${this.orderId}`, {
        headers: {
          Authorization: `Bearer ${this.adminToken}`,
        },
      })
      .subscribe(
        (res: any) => {
          this.user = res.user;
          this.orders = res.order;
        },
        (error) => {
          console.log(error.error);
        }
      );
  }

  confirmOrder(id: string) {
    console.log(id);
  }
  
  dispatchOrder(id: string) {}

  deliverOrder(id: string) {}
}
