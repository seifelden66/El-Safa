import { Component } from '@angular/core';
import { FirestnavComponent } from '../firestnav/firestnav.component';
import { SecondHeaderComponent } from '../second-header/second-header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [FirestnavComponent,SecondHeaderComponent,FooterComponent,FormsModule],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css'
})
export class TrackingComponent {




}
