import { Component, OnInit } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HttpClient } from "@angular/common/http";
import { RouterLink } from "@angular/router";
import { NgClass } from "@angular/common";
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { CategorysService } from "../services/categorys.service";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    RouterLink,
    NgClass,
    ReactiveFormsModule,
  ],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.css",
})
export class ProductsComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private categorysService: CategorysService
  ) {}

  products: any[] = [];
  categorys: any;
  productId: string = "";
  deleteModelStatus: boolean = false;
  editModelStatus: boolean = false;
  imageModelStatus: boolean = false;
  productImages: any;
  productForm!: FormGroup;

  ngOnInit(): void {
    this.getallproduct();
    this.getCategorys();
    this.initForm();
  }

  getallproduct() {
    this.http.get("http://localhost:8000/v1/products").subscribe((res: any) => {
      this.products = res.products;
      console.log(res.products);
    });
  }
  // get categorys service
  getCategorys(): void {
    this.categorysService.getCategorys().subscribe((res) => {
      this.categorys = res;
    });
  }

  showDeleteModel(id: string) {
    this.productId = id;
    this.deleteModelStatus = true;
  }

  hideDeleteModel() {
    this.deleteModelStatus = false;
  }

  deleteProduct() {
    this.http
      .delete(`http://localhost:8000/v1/products/${this.productId}`)
      .subscribe(
        (res: any) => {
          alert(res.message);
          // Remove deleted product from the list
          this.products = this.products.filter(
            (product) => product._id !== this.productId
          );
        },
        (error) => {
          alert(error.message);
        }
      );
    this.deleteModelStatus = false;
  }

  showEditModel(id: string) {
    this.productId = id;
    this.editModelStatus = true;
    const product = this.products.find((elem: any) => elem._id == id);

    this.productForm.patchValue({
      name: product.name,
      quantity: product.quantity,
      price: product.price,
      discount: product.discount,
      category: product.category,
      short_desc: product.short_desc,
      desc: product.desc,
    });
  }

  showImageModel(images: any) {
    this.productImages = images;
    this.imageModelStatus = true;
  }
  hideImageModel() {
    this.imageModelStatus = false;
  }
  hideEditModel() {
    this.editModelStatus = false;
  }

  initForm() {
    this.productForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      quantity: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      discount: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required]),
      short_desc: new FormControl("", [Validators.required]),
      desc: new FormControl("", [Validators.required]),
    });
  }

  EditProduct() {
    this.http
      .put(
        `http://localhost:8000/v1/products/${this.productId}`,
        this.productForm.value
      )
      .subscribe(
        (res: any) => {
          // Update the product list after editing
          const editedProductIndex = this.products.findIndex(
            (product) => product._id === this.productId
          );
          if (editedProductIndex !== -1) {
            this.products[editedProductIndex] = res;
          }
          this.productForm.reset();
          // this.editModelStatus = true;
        },
        (error) => {
          console.error(error.message);
        }
      );
    this.editModelStatus = false;
  }
}

// edit http://loclhost:8000/products/id
