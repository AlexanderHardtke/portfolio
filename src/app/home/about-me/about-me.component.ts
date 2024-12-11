import { Component, inject } from '@angular/core';
import { PortfoliodataService } from '../../portfoliodata.service';
import Aos from 'aos';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  portData = inject(PortfoliodataService);


  constructor() {
    Aos.init();
  }
}
