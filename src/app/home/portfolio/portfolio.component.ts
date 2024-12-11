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
      signatur: "Alexandra H.",
      imgCollab: "feedback1.png",
      feedbackEng: "Model text until real feedback exists. Alexander was a really pleasant fellow to work with and always helpful.",
      feedbackGer: "Mustertext bis echtes Feedback vorhanden. Alexander war immer freundlich und allzeit hilfsbereit",
    },
    {
      signatur: "Edward S.",
      imgCollab: "feedback2.png",
      feedbackEng: "Model text until real feedback exists. Edward significantly contributed to the success of the project with his positive attitude and solutionoriented approach. His ability to tackle challenges methodically and motivate the team was crucial.",
      feedbackGer: "Mustertext bis echtes Feedback vorhanden. Edward hat mit seiner positiven Einstellung und lösungsorientierten Herangehensweise wesentlich zum Erfolg des Projekts beigetragen. Seine Fähigkeit, Herausforderungen strukturiert anzugehen und das Team zu motivieren, war entscheidend.",
    },
    {
      signatur: "Markus R.",
      imgCollab: "feedback3.png",
      feedbackEng: "Model text until real feedback exists. Markus really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      feedbackGer: "Mustertext bis echtes Feedback vorhanden. Markus hat das Team wirklich durch seine großartige Organisation und klare Kommunikation zusammengehalten. Ohne sein Engagement wären wir nicht so weit gekommen.",
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
