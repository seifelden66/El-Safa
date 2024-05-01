import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CookieService } from "../../services/cookie.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: "app-users",
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: "./users.component.html",
  styleUrl: "./users.component.css",
})
export class UsersComponent {
  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private router: Router
  ) {}
  Token!: any;
  users!: any;
  ngOnInit() {
    this.Token = this.cookieService.get("adminToken");
    this.getAllUsers();
  }

  getAllUsers() {
    this.http
      .get("http://localhost:8000/v1/admin/users", {
        headers: {
          Authorization: `Bearer ${this.Token}`,
        },
      })
      .subscribe(
        (res: any) => {
          this.users = res;
        },
        (err) => {
          this.router.navigate(["/login"]);
        }
      );
  }
}
