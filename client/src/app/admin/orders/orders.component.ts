import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: "app-orders",
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: "./orders.component.html",
  styleUrl: "./orders.component.css",
})
export class OrdersComponent {}
