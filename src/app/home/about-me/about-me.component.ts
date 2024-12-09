import { Component, inject } from '@angular/core';
import { PortfoliodataService } from '../../portfoliodata.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  portData = inject(PortfoliodataService);

}
