import { Component, inject } from '@angular/core';
import { PortfoliodataService } from '../portfoliodata.service';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {
  portData = inject(PortfoliodataService);

}
