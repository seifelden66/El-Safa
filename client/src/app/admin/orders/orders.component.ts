import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "../../services/cookie.service";
import { RouterLink } from "@angular/router";
import { TableModule } from "primeng/table";
import { PaginatorModule } from "primeng/paginator";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-orders",
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    RouterLink,
    TableModule,
    PaginatorModule,
    NgClass,
  ],
  templateUrl: "./orders.component.html",
  styleUrl: "./orders.component.css",
})
export class OrdersComponent {
  orders: any;
  adminToken!: any;
  totalRecords!: number;
  rowsPerPageOptions = [5, 10, 20];
  rows = 10;
  first = 0;

  filterOrders!: any[];
  constructor(private http: HttpClient, private cookieCervice: CookieService) {}
  ngOnInit() {
    this.adminToken = this.cookieCervice.get("adminToken");
    this.getOrders();
    this.filterOrders = this.orders;
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
          this.filterOrders = [...this.orders];
          this.totalRecords = this.orders.length;
        },
        (error) => {
          console.log(error.error);
        }
      );
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.getOrders();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      this.filterOrders = this.orders.filter((order: any) =>
        order._id.toLowerCase().includes(filterValue.toLowerCase())
      );
    } else {
      this.filterOrders = [...this.orders];
    }
    this.totalRecords = this.filterOrders.length;
  }
  filterByStatus(status: string) {
    this.filterOrders = this.orders.filter(
      (order: any) => order.order_status.toLowerCase() === status.toLowerCase()
    );
    this.totalRecords = this.filterOrders.length;
  }
}
