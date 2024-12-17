import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component'
import { PortfoliodataService } from '../../portfoliodata.service';
import { CommonModule } from '@angular/common';
import Aos from 'aos';



@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  userFeedbacks = [
    {
      signatur: "Saskia D.",
      imgCollab: "Saskia_D.png",
      feedbackEng: "Alex has proven to be a highly collaborative and dedicated teammate, supporting his team members in troubleshooting and achieving sprint goals. Communication was always clear because he also had an urge to internalize everything. It was a lot of fun working with him.",
      feedbackGer: "Alex hat sich als äußerst kooperativer und engagierter Teamkollege erwiesen, indem er seine Teammitglieder beim Suchen von Fehlern und Erreichen der Sprint-Ziele unterstützt hat. Die Kommunikation war stets klar da er auch einen Drang hatte, alles zu verinnerlichen. Es hat sehr viel Spaß gemacht, mit ihm zu arbeiten.",
    },
    {
      signatur: "Alexander M.",
      imgCollab: "Alex_M.jpg",
      feedbackEng: "Alexander's core competency was the planning and management of production processes. He was a very important part of our leadership team.",
      feedbackGer: "Alexanders Kernkompetenz war die Planung und Steuerung von Produktionsprozessen. Er war ein sehr wichtiger Teil unseres Führungsteams.",
    },
  ]
  feedbackIndex: number = 0;

  @ViewChild('greenShadow') greenShadow!: ElementRef<HTMLImageElement>;
  @ViewChild('feedback') feedbackSection!: ElementRef<HTMLElement>;
  portData = inject(PortfoliodataService);

  private scrollListener: (() => void) | null = null;

  constructor(private renderer: Renderer2) {
    Aos.init();
  }

  /**
   * sets the previous feedback as active
   */
  prevFeedback() {
    if (this.feedbackIndex == 0) {
      this.feedbackIndex = this.userFeedbacks.length;
    }
    this.feedbackIndex--;
  }

  /**
   * sets the next feedback as active
   */
  nextFeedback() {
    if (this.feedbackIndex == this.userFeedbacks.length - 1) {
      this.feedbackIndex = 0;
    } else {
      this.feedbackIndex++;
    }
  }

  /**
   * adds an eventlistener for the scrollbar
   */
  ngOnInit() {
      this.scrollListener = this.handleScroll.bind(this);
      window.addEventListener('scroll', this.scrollListener);
  }

  /**
   * removes the eventlistener for the scrollbar
   */
  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  /**
   * checks if the element is in view of the screen and sets an offset
   * 
   * @param element the element that is in view
   * @param topOffset the offset of the top side of the element
   * @param bottomOffset the offset of the bottom side of the element
   * @returns true if the viewport aligns with the element
   */
  private isInViewport(element: HTMLElement, topOffset: number = 0, bottomOffset: number = 0): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= -topOffset &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + bottomOffset &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  /**
   * handles the scrollbar and checks if the shadow is in view for the user to add the active class if the screen is smaller than 1920px
   */
  private handleScroll() {
    if (this.feedbackSection && this.greenShadow && window.innerWidth <= 1921) {
      const skillsElement = this.feedbackSection.nativeElement;
      const imageElement = this.greenShadow.nativeElement;
      if (this.isInViewport(skillsElement, 70, 830)) {
        this.renderer.addClass(imageElement, 'active');
      } else {
        this.renderer.removeClass(imageElement, 'active');
      }
    }
  }
}
