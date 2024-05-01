import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { CookieService } from "../services/cookie.service";
import { Router } from "@angular/router";
import { NgClass } from "@angular/common";
@Component({
  selector: "app-reset-password",
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: "./reset-password.component.html",
  styleUrl: "./reset-password.component.css",
})
export class ResetPasswordComponent {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  resetPasswordForm!: FormGroup;
  error!: any;
  resetToken!: any;
  togglePassword: boolean = false;

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      newPassword: new FormControl("", [Validators.required]),
    });
    this.resetToken = this.cookieService.get("resetToken");
  }

  togglePasswordVisibility() {
    this.togglePassword = !this.togglePassword;
  }

  onSubmit() {
    this.http
      .patch(
        "http://localhost:8000/v1/users/new-password",
        this.resetPasswordForm.value,
        {
          headers: {
            Authorization: `Bearer ${this.resetToken}`,
          },
        }
      )
      .subscribe(
        (res: any) => {
          if (res.success) {
            this.router.navigate(["/login"]);
          }
        },
        (error) => {
          this.error = error.error.error;
        }
      );
  }
}

// http://localhost:8000/v1/users/new-password
