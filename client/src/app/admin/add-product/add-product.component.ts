import { Component, OnInit } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-product",
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./add-product.component.html",
  styleUrl: "./add-product.component.css",
})
export class AddProductComponent implements OnInit {
  constructor(private http: HttpClient, private route: Router) {}
  productForm!: FormGroup; // product form data
  categorys!: any; // categorys form database

  ngOnInit(): void {
    this.getCategorys();
    this.productForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      quantity: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required]),
      // images: new FormControl("", [Validators.required]),
      // description: new FormControl("", [Validators.required]),
    });
  }

  // get categorys form database
  getCategorys() {
    this.http
      .get("http://localhost:8000/v1/categories")
      .subscribe((res: any) => {
        this.categorys = res;
      });
  }

  addNewProduct() {
    this.http
      .post("http://localhost:8000/v1/products", this.productForm.value)
      .subscribe(
        (res: any) => {
          this.route.navigate(["/admin/products"]);
        },
        (error) => console.log(error)
      );
    console.log(this.productForm);
  }
}

// http://localhost:8000/v1/products
