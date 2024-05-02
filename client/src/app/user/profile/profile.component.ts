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
export class ProfileComponent  {
}
