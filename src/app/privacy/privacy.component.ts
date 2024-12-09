import { Component, inject } from '@angular/core';
import { PortfoliodataService } from '../portfoliodata.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './privacy.component.html',
  styleUrl: '../impressum/impressum.component.scss'
})
export class PrivacyComponent {
  portData = inject(PortfoliodataService);

}