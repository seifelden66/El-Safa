import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-forgot-password",
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: "./forgot-password.component.html",
  styleUrl: "./forgot-password.component.css",
})
export class ForgotPasswordComponent {
  forgotPasswordForm!: FormGroup;
  error: any;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
    });
  }

  onSubmit() {
    this.http
      .post(
        "http://localhost:8000/v1/users/forgot-password-email",
        this.forgotPasswordForm.value
      )
      .subscribe(
        (res: any) => {
          if (res.emailToken) {
            // cookie token email
            const now = new Date();
            const expiration = new Date(now.getTime() + 3 * 60 * 1000);
            document.cookie = `emailToken=${
              res.emailToken
            };expires=${expiration.toUTCString()};path=/`;
            this.router.navigate(["/sendCode"]);
          }
        },
        (error) => {
          this.error = error.error.error;
        }
      );
  }
}
