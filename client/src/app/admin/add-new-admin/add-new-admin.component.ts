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
  error!: any;
  constructor(
    private http: HttpClient,
    private CookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.adminToken = this.CookieService.get("adminToken");
    this.adminForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/),
      ]),
      phone: new FormControl("", [Validators.required]),
      location: new FormControl("", [Validators.required]),
      file: new FormControl(null),
    });
  }

  onFileSelect(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      let file: File = element.files[0];
      this.adminForm.patchValue({
        file: file,
      });
      // Safely trigger the value changes detection
      const fileControl = this.adminForm.get("file");
      if (fileControl) {
        fileControl.updateValueAndValidity();
      }
    }
  }

  onSubmit() {
    Object.keys(this.adminForm.controls).forEach((field) => {
      const control = this.adminForm.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if (this.adminForm.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append("name", this.adminForm.get("name")!.value);
    formData.append("email", this.adminForm.get("email")!.value);
    formData.append("password", this.adminForm.get("password")!.value);
    formData.append("phone", this.adminForm.get("phone")!.value);
    formData.append("location", this.adminForm.get("location")!.value);
    const fileControl = this.adminForm.get("file");
    if (fileControl && fileControl.value) {
      formData.append("file", fileControl.value);
    }

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
          this.error = error.error;
          console.log(error);
        }
      );
  }
}
