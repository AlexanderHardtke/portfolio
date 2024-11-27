import { Component, inject } from '@angular/core';
import { PortfoliodataService } from '../portfoliodata.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  portData = inject(PortfoliodataService);

}
