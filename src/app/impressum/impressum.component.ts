import { Component, inject } from '@angular/core';
import { PortfoliodataService } from '../portfoliodata.service';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  portData = inject(PortfoliodataService);

  /**
     * displays the main content on the website
     */
  goToMainContent() {
    this.portData.page = "index"
  }
}
