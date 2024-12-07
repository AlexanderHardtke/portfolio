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
   * displays the main content for the website and moves to the section selected by the user
   * 
   * @param href the section selected by the user
   */
  goToMainContent(href: string) {
    if (this.portData.page == 'index') {
      window.location.hash = href;
    } else {
      this.portData.page = 'index';
      setTimeout(() => window.location.hash = href, 200);
    }
  }
}
