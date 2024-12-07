import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtfComponent } from './atf/atf.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfoliodataService } from './portfoliodata.service';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyComponent } from './privacy/privacy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AtfComponent, AboutMeComponent, ContactComponent, FooterComponent, HeaderComponent, MySkillsComponent, PortfolioComponent, ImpressumComponent, PrivacyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  portData = inject(PortfoliodataService);

}

