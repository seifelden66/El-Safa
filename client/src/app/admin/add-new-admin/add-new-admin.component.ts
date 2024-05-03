import { CookieService } from "./../../services/cookie.service";
import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NgClass } from "@angular/common";
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-new-admin",
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, NgClass, ReactiveFormsModule],
  templateUrl: "./add-new-admin.component.html",
  styleUrl: "./add-new-admin.component.css",
})
export class AddNewAdminComponent {
  adminForm!: FormGroup;
  adminToken: any;
  constructor(
    private http: HttpClient,
    private CookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.adminToken = this.CookieService.get("adminToken");
    this.adminForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required]),
      location: new FormControl("", [Validators.required]),
      file: new FormControl(null),
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append("name", this.adminForm.get("name")!.value);
    formData.append("email", this.adminForm.get("email")!.value);
    formData.append("password", this.adminForm.get("password")!.value);
    formData.append("phone", this.adminForm.get("phone")!.value);
    formData.append("location", this.adminForm.get("location")!.value);
    formData.append("file", this.adminForm.get("file")!.value);

    this.http
      .post("http://localhost:8000/v1/admin/register", formData, {
        headers: {
          Authorization: `Bearer ${this.adminToken}`,
        },
      })
      .subscribe(
        (res) => {
          this.router.navigate(["/admin/users"]);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
