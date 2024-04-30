import { Component } from '@angular/core';
import { SecondHeaderComponent } from '../second-header/second-header.component';
import { FirestnavComponent } from '../firestnav/firestnav.component';
import { FooterComponent } from '../footer/footer.component';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FirestnavComponent,FooterComponent,SecondHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  latitude = 51.678418; // Default latitude
  longitude = 7.809007; // Default longitude
  zoom = 12; // Default zoom level
}
