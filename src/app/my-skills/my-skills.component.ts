import { Component, inject } from '@angular/core';
import { PortfoliodataService } from '../portfoliodata.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  portData = inject(PortfoliodataService);

}
