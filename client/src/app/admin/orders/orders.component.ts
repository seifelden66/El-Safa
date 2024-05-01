import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "../../services/cookie.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-orders",
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, RouterLink],
  templateUrl: "./orders.component.html",
  styleUrl: "./orders.component.css",
})
export class OrdersComponent {
  orders: any;
  adminToken!: any;
  constructor(private http: HttpClient, private cookieCervice: CookieService) {}
  ngOnInit() {
    this.adminToken = this.cookieCervice.get("adminToken");
    this.getOrders();
  }

  getOrders() {
    this.http
      .get("http://localhost:8000/v1/admin/orders", {
        headers: {
          Authorization: `Bearer ${this.adminToken}`,
        },
      })
      .subscribe(
        (res) => {
          this.orders = res;
        },
        (error) => {
          console.log(error.error);
        }
      );
  }
}
