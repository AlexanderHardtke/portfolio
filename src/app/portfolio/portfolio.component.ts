import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component'
import { PortfoliodataService } from '../portfoliodata.service';
import { CommonModule } from '@angular/common';



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
      signatur: "Cookie",
      imgCollab: "laptop3.png",
      feedbackEng: "Loves eating cookies",
      feedbackGer: "Liebt Kekse :)",
    },
    {
      signatur: "Sharkie",
      imgCollab: "project_sharkie.png",
      feedbackEng: "Loves eating fishes",
      feedbackGer: "Liebt Fische :)",
    },
    {
      signatur: "Pikagirl",
      imgCollab: "PA150252.JPG",
      feedbackEng: "Loves Ash",
      feedbackGer: "Liebt Ash :)",
    },
  ]
  feedbackIndex: number = 0;

  @ViewChild('greenShadow') greenShadow!: ElementRef<HTMLImageElement>;
  @ViewChild('feedback') feedbackSection!: ElementRef<HTMLElement>;
  portData = inject(PortfoliodataService);

  private scrollListener: (() => void) | null = null;

  constructor(private renderer: Renderer2) { }

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
   * handles the scrollbar and checks if the shadow is in view for the user to add the active class
   */
  private handleScroll() {
    if (this.feedbackSection && this.greenShadow) {
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
