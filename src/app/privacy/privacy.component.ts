import { Component, inject } from '@angular/core';
import { PortfoliodataService } from '../portfoliodata.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: '../impressum/impressum.component.scss'
})
export class PrivacyComponent {
  portData = inject(PortfoliodataService);

  /**
    * displays the main content on the website
    */
  goToMainContent() {
    this.portData.page = "index"
  }
}