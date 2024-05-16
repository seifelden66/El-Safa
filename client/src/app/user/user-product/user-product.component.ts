import { ToastrService } from "ngx-toastr";
import { CookieService } from "./../../services/cookie.service";
import { Component, OnInit, inject } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from "@ng-bootstrap/ng-bootstrap";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FooterComponent } from "../footer/footer.component";
import { FirestnavComponent } from "../firestnav/firestnav.component";
import { SecondHeaderComponent } from "../second-header/second-header.component";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { TableModule } from "primeng/table";

@Component({
  selector: "app-user-product",
  standalone: true,
  imports: [
    DecimalPipe,
    FormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    HttpClientModule,
    FooterComponent,
    FirestnavComponent,
    SecondHeaderComponent,
    RouterLink,
    RouterLinkActive,
    TableModule,
  ],
  templateUrl: "./user-product.component.html",
  styleUrl: "./user-product.component.css",
})
export class UserProductComponent {
  usertoken!: any;
  userorders!: any;

  toster = inject(ToastrService);

  constructor(
    private CookieService: CookieService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usertoken = this.CookieService.get("userToken");
    
    this.getmyproduct();

    if (this.usertoken) {
    } else {
      this.toster.error("Please login firest");

      this.router.navigate([`/home`]);
    }
  }

  getmyproduct() {
    this.http
      .get("http://localhost:8000/v1/users-order/orders", {
        headers: {
          Authorization: `Bearer ${this.usertoken}`,
        },
      })
      .subscribe((res) => {
        this.userorders = res;
      });
  }

  order_data(order_id: any) {
    this.router.navigate([`/order-data`, order_id]);


  }
}

// http://localhost:8000/v1/users-order/orders

// http://localhost:8000/v1/users/orders-details?id=6639c0242103424e9190e2ef
