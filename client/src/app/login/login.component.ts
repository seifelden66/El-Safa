import { Router, RouterLink } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgClass, RouterLink],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  loginForm!: FormGroup; // product form data
  error!: string;
  togglePassword: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }
  togglePasswordVisibility() {
    this.togglePassword = !this.togglePassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.http
        .post("http://localhost:8000/v1/users/login", this.loginForm.value)
        .subscribe(
          (res: any) => {
            console.log(res);

            const now = new Date();
            const expiration = new Date(now.getTime() + 12 * 60 * 60 * 1000);

            if (res.role == "adminToken") {
              document.cookie = `adminToken=${
                res.token
              };expires=${expiration.toUTCString()};path=/`;
              this.router.navigate(["/admin/dashboard"]);
            }
            if (res.role == "userToken") {
              document.cookie = `userToken=${
                res.token
              };expires=${expiration.toUTCString()};path=/`;

              this.router.navigate(["/"]);
            }
          },
          (error) => {
            this.error = error.error.error;
            console.log(error.error);
          }
        );
    } else {
      console.log("Form is invalid, cannot submit.");
    }
  }
}
