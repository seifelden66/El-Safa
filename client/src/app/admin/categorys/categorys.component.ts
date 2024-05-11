import { PaginatorModule } from "primeng/paginator";
import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CategorysService } from "../services/categorys.service";
import { NgClass } from "@angular/common";
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { TableModule } from "primeng/table";
@Component({
  selector: "app-categorys",
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    NgClass,
    ReactiveFormsModule,
    TableModule,
    PaginatorModule,
  ],
  templateUrl: "./categorys.component.html",
  styleUrl: "./categorys.component.css",
})
export class CategorysComponent {
  constructor(
    private categorysService: CategorysService,
    private http: HttpClient
  ) {}

  totalRecords!: number;
  rowsPerPageOptions = [5, 10, 20];
  rows = 10;
  first = 0;
  categorys: any;
  AddNewCategoryModelStatus: boolean = false;
  CategoryForm!: FormGroup;

  ngOnInit() {
    this.getCategorys();
    this.CategoryForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
    });
  }

  getCategorys(): void {
    this.categorysService.getCategorys().subscribe((res) => {
      this.categorys = res;
    });
  }

  showAddNewCategoryModel() {
    this.AddNewCategoryModelStatus = true;
  }

  hideAddNewCategoryModel() {
    this.AddNewCategoryModelStatus = false;
  }

  addNewCategory() {
    Object.keys(this.CategoryForm.controls).forEach((field) => {
      const control = this.CategoryForm.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });
    if (this.CategoryForm.invalid) {
      return;
    }

    this.http
      .post("http://localhost:8000/v1/categories", this.CategoryForm.value)
      .subscribe(
        (res) => {
          this.hideAddNewCategoryModel();
          this.CategoryForm.reset();
          this.categorys.push(res);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.getCategorys();
  }
}

// http://localhost:8000/v1/categories
