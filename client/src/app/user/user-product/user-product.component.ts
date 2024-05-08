import { CookieService } from './../../services/cookie.service';
import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-product',
  standalone: true,
  imports: [DecimalPipe,FormsModule,NgbPaginationModule,NgbTypeaheadModule,HttpClientModule],
  templateUrl: './user-product.component.html',
  styleUrl: './user-product.component.css'
})


export class UserProductComponent {
  
  // usertoken!:any;
  

  // constructor(private CookieService : CookieService,private http:HttpClient){}


  // ngOnInit(): void {
  //   this.usertoken = this.CookieService.get('userToken')
  //   console.log(this.usertoken);

  //   this.getmyproduct() 

  // }


  // getmyproduct(){
  //   this.http.get('http://localhost:8000/v1/users-order/orders',{headers:{
  //     Authorization : `Bearer ${this.usertoken}`

  //   }}).subscribe((res)=>{
  //     console.log(res);
      
  //   })   
  // }


}



// http://localhost:8000/v1/users-order/orders