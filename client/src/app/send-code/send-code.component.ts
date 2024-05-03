import { Router } from "@angular/router";
import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CookieService } from "../services/cookie.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-send-code",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./send-code.component.html",
  styleUrl: "./send-code.component.css",
})
export class SendCodeComponent {
  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private router: Router
  ) {}
  sendCodeForm!: FormGroup;
  error!: any;
  emailToken!: any;
  timer: number = 30;
  TimerId: any;
  ngOnInit() {
    this.sendCodeForm = new FormGroup({
      code: new FormControl("", [Validators.required]),
    });
    this.emailToken = this.cookieService.get("emailToken");
    this.CodeExpireTime();
  }
  ngOnDestroy() {
    clearInterval(this.TimerId);
  }
  CodeExpireTime() {
    this.TimerId = setInterval(() => {
      if (this.timer === 0) {
        clearInterval(this.TimerId);
        this.router.navigate(["/forgotPassword"]);
      } else {
        this.timer -= 1;
      }
    }, 1350);
  }
  onSubmit() {
    this.http
      .post(
        "http://localhost:8000/v1/users/forgot-password-code",
        this.sendCodeForm.value,
        {
          headers: {
            Authorization: `Bearer ${this.emailToken}`,
          },
        }
      )
      .subscribe(
        (res: any) => {
          if (res.resetToken) {
            const now = new Date();
            const expiration = new Date(now.getTime() + 3 * 60 * 1000);
            document.cookie = `resetToken=${
              res.resetToken
            };expires=${expiration.toUTCString()};path=/`;
            this.router.navigate(["/resetPassword"]);
          }
        },
        (error) => {
          this.error = error.error.error;
        }
      );
  }
}
