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
@Component({
  selector: "app-categorys",
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, NgClass, ReactiveFormsModule],
  templateUrl: "./categorys.component.html",
  styleUrl: "./categorys.component.css",
})
export class CategorysComponent {
  constructor(
    private categorysService: CategorysService,
    private http: HttpClient
  ) {}
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
}

// http://localhost:8000/v1/categories
