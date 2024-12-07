import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2 } from '@angular/core';
import { PortfoliodataService } from '../portfoliodata.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  portData = inject(PortfoliodataService);
  isMenuOpen = false;

  constructor(private renderer: Renderer2) { }

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
