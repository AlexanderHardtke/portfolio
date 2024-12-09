import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2 } from '@angular/core';
import { PortfoliodataService } from '../portfoliodata.service';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  portData = inject(PortfoliodataService);
  isMenuOpen = false;

  constructor(private renderer: Renderer2, private router: Router) { }

  /**
   * deactivates the scrollbar for the website if the burger menu is open
   */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  /**
   * sets the language of the website
   * 
   * @param lang The Language selected
   */
  setLang(lang: string) {
    if (lang == "ger" || lang == "en") {
      this.portData.lang = lang;
    }
  }
}
