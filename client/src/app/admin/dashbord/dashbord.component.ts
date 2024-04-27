import { Component } from "@angular/core";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavbarComponent } from "../navbar/navbar.component";
@Component({
  selector: "app-dashbord",
  standalone: true,
  imports: [SidebarComponent, NavbarComponent],
  templateUrl: "./dashbord.component.html",
  styleUrl: "./dashbord.component.css",
})
export class DashbordComponent {}
