import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CookieService } from "../../services/cookie.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { TableModule } from "primeng/table";
import { PaginatorModule } from "primeng/paginator";
@Component({
  selector: "app-users",
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, TableModule, PaginatorModule],
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
  totalRecords!: number;
  rowsPerPageOptions = [5, 10, 20];
  rows = 10;
  first = 0;
  filteredUsers!: any[];
  ngOnInit() {
    this.Token = this.cookieService.get("adminToken");
    this.getAllUsers();
    this.filteredUsers = this.users;
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
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.getAllUsers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredUsers = this.users.filter((user: any) =>
      user.email.toLowerCase().includes(filterValue.toLowerCase())
    );
    this.totalRecords = this.filteredUsers.length;
  }
}
