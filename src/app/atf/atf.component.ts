import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PortfoliodataService } from '../portfoliodata.service';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {
  portData = inject(PortfoliodataService);

}
