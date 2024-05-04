import { CookieService } from './../../services/cookie.service';
import { Component , OnInit , ViewChild  } from '@angular/core';
import { SecondHeaderComponent } from '../second-header/second-header.component';
import { FooterComponent } from '../footer/footer.component';
import { FirestnavComponent } from '../firestnav/firestnav.component';
import { SidebarModule } from 'primeng/sidebar';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SecondHeaderComponent,FooterComponent,FirestnavComponent,SidebarModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit  {


  constructor(private CookieService : CookieService, private http : HttpClient){}

  usertoken!:any
  userdata!:any
  
  ngOnInit(): void {
    this.usertoken=this.CookieService.get('userToken')
 
    console.log(this.usertoken);
    this.getuserdata()
    
  }

  getuserdata(){
    this.http.get('http://localhost:8000/v1/users/profile',{headers:{
      Authorization : `Bearer ${this.usertoken}`
    }}).subscribe((res:any)=>{
      this.userdata = res.user;
      console.log(res);
      

    })
  }




}
