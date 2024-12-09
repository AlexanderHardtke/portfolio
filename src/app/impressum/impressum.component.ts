import { Component, inject } from '@angular/core';
import { PortfoliodataService } from '../portfoliodata.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  portData = inject(PortfoliodataService);

}
