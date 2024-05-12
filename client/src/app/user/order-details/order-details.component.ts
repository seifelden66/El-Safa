import { CookieService } from './../../services/cookie.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FirestnavComponent } from '../firestnav/firestnav.component';
import { SecondHeaderComponent } from '../second-header/second-header.component';
import { TableModule } from 'primeng/table';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf } from "@angular/common";

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [HttpClientModule,FooterComponent,FirestnavComponent,SecondHeaderComponent,TableModule,RouterLink,RouterLinkActive,FormsModule,NgClass,NgIf],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {
  order_id!: any;
  user_token! : any;
  order_details!: any
  orderId!: any;
  adminToken!: any;
  user!: any;
  orders!: any;
  orderStatus!: string;
  orderMessage!: string;
  modelStatus: boolean = false;
  
  constructor(private http : HttpClient , private ActivatedRoute : ActivatedRoute,private CookieService : CookieService, private router : Router   ){}

  
  toster = inject(ToastrService);


  ngOnInit(): void {
    this.order_id = this.ActivatedRoute.snapshot.params['id']
    console.log(this.order_id);
    this.user_token = this.CookieService.get("userToken")
    this.getorder_details()

  

  }


  getorder_details(){

    this.http.get(`http://localhost:8000/v1/users/orders-details?id=${this.order_id}`,{headers :{ 
      Authorization : `Bearer ${this.user_token}`
    } }).subscribe((res)=>{
      this.order_details = res
      console.log(res);
      
    })
  }


}

