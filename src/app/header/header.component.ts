import { CommonModule} from '@angular/common';
import { Component, inject } from '@angular/core';
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

  setLang(lang: string) {
    if (lang == "ger" || lang == "en") {
      this.portData.lang = lang;
    }
      
  }
}
