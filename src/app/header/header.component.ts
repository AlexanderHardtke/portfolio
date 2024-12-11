import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { PortfoliodataService } from '../portfoliodata.service';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  portData = inject(PortfoliodataService);
  isMenuOpen: boolean = false;
  isRoot: boolean = false;

  constructor(private renderer: Renderer2, private router: Router) { }


  /**
   * checks the URL for the main-content page with the variable isRoot
   */
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isRoot = event.url != '/privacy' && event.url != '/impressum';
      }
    });
  }

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
