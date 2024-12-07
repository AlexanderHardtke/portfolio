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
   * displays the main content for the website and moves to the section selected by the user
   * 
   * @param href the section selected by the user
   */
  goToMainContent(href: string) {
    if (this.portData.page == 'index') {
      window.location.hash = href;
      setTimeout(() => window.location.hash = '#', 200);
    } else {
      this.portData.page = 'index';
      setTimeout(() => window.location.hash = href, 200);
      setTimeout(() => window.location.hash = '#', 200);
    }
  }
}
