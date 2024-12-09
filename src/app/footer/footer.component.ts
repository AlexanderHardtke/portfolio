import { Component, inject } from '@angular/core';
import { PortfoliodataService } from '../portfoliodata.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  portData = inject(PortfoliodataService)

  /**
   * Scrolls to the top of the page
   */
  goToTop() {
    window.scrollTo(0, 0);
  }
}
