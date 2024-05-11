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
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      quantity: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required]),
      images: new FormControl(null, [Validators.required]),
      short_desc: new FormControl("", [
        Validators.required,
        Validators.minLength(15),
      ]),
      desc: new FormControl("", [
        Validators.required,
        Validators.minLength(30),
      ]),
      discount: new FormControl("", [Validators.required]),
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

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const files: File[] = event.target.files;
      this.productForm.patchValue({
        images: files,
      });
    }
  }

  addNewProduct() {
    Object.keys(this.productForm.controls).forEach((field) => {
      const control = this.productForm.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if (this.productForm.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append("name", this.productForm.value.name);
    formData.append("quantity", this.productForm.value.quantity);
    formData.append("price", this.productForm.value.price);
    formData.append("category", this.productForm.value.category);
    formData.append("short_desc", this.productForm.value.short_desc);
    formData.append("desc", this.productForm.value.desc);
    formData.append("discount", this.productForm.value.discount);
    const images: FileList = this.productForm.value.images;

    for (let i = 0; i < images.length; i++) {
      formData.append("image", images[i]);
    }

    console.log(this.productForm);

    this.http.post("http://localhost:8000/v1/products", formData).subscribe(
      (res: any) => {
        this.route.navigate(["/admin/products"]);
      },
      (error) => console.log(error)
    );
  }
}

// http://localhost:8000/v1/products
