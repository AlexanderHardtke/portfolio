import { Component, inject } from '@angular/core';
import { PortfoliodataService } from '../portfoliodata.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  portData = inject(PortfoliodataService)

  /**
   * displays the legal notice on the website instead of the main content
   */
  goToLegal() {
    this.portData.page = "impressum";
  }

  /**
   * displays the main content on the website
   */
  goToMainContent() {
    this.portData.page = "index"
  }
}
