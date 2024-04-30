import { ActivatedRoute } from "@angular/router";
import { Component, Input } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NgClass, NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-single-order",
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, NgClass, NgIf],
  templateUrl: "./single-order.component.html",
  styleUrl: "./single-order.component.css",
})
export class SingleOrderComponent {
  orderId!: any;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.orderId = this.ActivatedRoute.snapshot.params["id"];
    this.getOrderDetails();
  }

  getOrderDetails() {
    this.http.get("");
  }
}
