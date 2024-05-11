import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-sign-up",
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, RouterLink],
  templateUrl: "./sign-up.component.html",
  styleUrl: "./sign-up.component.css",
})
export class SignUpComponent {
  singin!: FormGroup;
  error!: any;
  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit() {
    this.singin = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      location: new FormControl("", Validators.required),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"),
      ]),
      phone: new FormControl("", Validators.required),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/),
      ]),
      file: new FormControl(null),
    });
  }

  onFileSelect(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      let file: File = element.files[0];
      this.singin.patchValue({
        file: file,
      });
      // Safely trigger the value changes detection
      const fileControl = this.singin.get("file");
      if (fileControl) {
        fileControl.updateValueAndValidity();
      }
    }
  }

  insertuser() {
    Object.keys(this.singin.controls).forEach((field) => {
      const control = this.singin.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if (this.singin.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append("name", this.singin.get("name")!.value);
    formData.append("email", this.singin.get("email")!.value);
    formData.append("password", this.singin.get("password")!.value);
    formData.append("phone", this.singin.get("phone")!.value);
    formData.append("location", this.singin.get("location")!.value);
    const fileControl = this.singin.get("file");
    if (fileControl && fileControl.value) {
      formData.append("file", fileControl.value);
    }

    this.http
      .post("http://localhost:8000/v1/users/register", formData)
      .subscribe(
        (res: any) => {
          // Use 'any' as a type for res
          // Check if res.success exists and is a string
          if (res && typeof res.success === "string") {
            const token = res.success;

            function setCookie(name: string, value: string, hours: number) {
              const date = new Date();
              date.setTime(date.getTime() + hours * 60 * 60 * 1000);
              const expires = "expires=" + date.toUTCString();
              document.cookie =
                name +
                "=" +
                encodeURIComponent(value) +
                ";" +
                expires +
                ";path=/";
            }

            this.route.navigate(["/home"]);
            setCookie("userToken", token, 7); // Set the token as a cookie
            console.log(token); // Log the token
          } else {
            console.log("Token not found or is not a string");
          }
        },
        (error) => {
          this.error = error.error;
        }
      );
  }

  submithandel() {
    console.log(this.singin);
  }
}

// http://localhsot:8000/v1/users/register
