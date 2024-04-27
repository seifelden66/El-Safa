import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: "app-users",
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: "./users.component.html",
  styleUrl: "./users.component.css",
})
export class UsersComponent {}
