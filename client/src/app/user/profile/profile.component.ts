import { CookieService } from './../../services/cookie.service';
import { Component , OnInit , ViewChild  } from '@angular/core';
import { SecondHeaderComponent } from '../second-header/second-header.component';
import { FooterComponent } from '../footer/footer.component';
import { FirestnavComponent } from '../firestnav/firestnav.component';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SecondHeaderComponent,FooterComponent,FirestnavComponent,SidebarModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit  {


  constructor(private CookieService : CookieService){}

  usertoken!:any
  
  ngOnInit(): void {
    this.usertoken=this.CookieService.get('userToken')
 
    console.log(this.usertoken);
    
  }





}
