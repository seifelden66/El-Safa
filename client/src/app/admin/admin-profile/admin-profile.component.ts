import { CookieService } from "./../../services/cookie.service";
import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-admin-profile",
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: "./admin-profile.component.html",
  styleUrl: "./admin-profile.component.css",
})
export class AdminProfileComponent {
  adminToken!: any;
  adminData!: any;
  constructor(private http: HttpClient, private CookieService: CookieService) {}

  ngOnInit() {
    this.adminToken = this.CookieService.get("adminToken");
    this.getAdminDate();
  }

  getAdminDate() {
    this.http
      .get("http://localhost:8000/v1/users/profile", {
        headers: {
          Authorization: `Bearer ${this.adminToken}`,
        },
      })
      .subscribe(
        (res: any) => {
          this.adminData = res.user;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  errorHandler(event: any) {
    event.target.src =
      "https://cdn.pixabay.com/photo/2016/04/11/10/45/sunrise-1321710_1280.jpg";
  }
}
