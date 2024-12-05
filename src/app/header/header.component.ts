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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  setLang(lang: string) {
    if (lang == "ger" || lang == "en") {
      this.portData.lang = lang;
    }

  }
}
