import { Component } from '@angular/core';
import { SecondHeaderComponent } from '../second-header/second-header.component';
import { FirestnavComponent } from '../firestnav/firestnav.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FirestnavComponent,FooterComponent,SecondHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
