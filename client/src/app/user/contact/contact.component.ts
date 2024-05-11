import { Component } from "@angular/core";
import { SecondHeaderComponent } from "../second-header/second-header.component";
import { FirestnavComponent } from "../firestnav/firestnav.component";
import { FooterComponent } from "../footer/footer.component";

import {
  Validators,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-contact",
  standalone: true,
  imports: [
    SecondHeaderComponent,
    FirestnavComponent,
    FooterComponent,
    ReactiveFormsModule,
  ],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent {
  FormData!: FormGroup;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.FormData = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"),
      ]),
      message: new FormControl("", [
        Validators.required,
        Validators.minLength(15),
      ]),
    });
  }

  onSubmit() {
    Object.keys(this.FormData.controls).forEach((field) => {
      const control = this.FormData.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if (this.FormData.invalid) {
      return;
    }

    this.http
      .post("http://localhost:8000/v1/users/sendEmail", this.FormData.value)
      .subscribe(
        (res: any) => {
          alert(res.message);
          this.FormData.reset();
        },
        (error) => {
          console.log(error);
        }
      );
  }
}

// , {headers : {
//   Authorization : `Bearer ${this.userToken}`
// }}
