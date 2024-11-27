import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  lang: "en" | "ger";

  constructor() {
    this.lang = "en";
  }

  setLang(lang: string) {
    if (lang == "ger" || lang == "en") {
      this.lang = lang;
    }
      
  }
}
