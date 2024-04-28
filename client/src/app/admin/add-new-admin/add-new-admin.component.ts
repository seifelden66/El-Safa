import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-add-new-admin",
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, NgClass],
  templateUrl: "./add-new-admin.component.html",
  styleUrl: "./add-new-admin.component.css",
})
export class AddNewAdminComponent {
  
}
