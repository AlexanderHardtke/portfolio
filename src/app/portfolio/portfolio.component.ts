import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component'

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
