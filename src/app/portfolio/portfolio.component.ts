import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component'
import { PortfoliodataService } from '../portfoliodata.service';



@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  @ViewChild('greenShadow') greenShadow!: ElementRef<HTMLImageElement>;
  @ViewChild('feedback') feedbackSection!: ElementRef<HTMLElement>;
  portData = inject(PortfoliodataService);

  private scrollListener: (() => void) | null = null;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.scrollListener = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private isInViewport(element: HTMLElement, topOffset: number = 0, bottomOffset: number = 0): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= -topOffset &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + bottomOffset &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  private handleScroll() {
    if (this.feedbackSection && this.greenShadow) {
      const skillsElement = this.feedbackSection.nativeElement;
      const imageElement = this.greenShadow.nativeElement;
      if (this.isInViewport(skillsElement, 300, 750)) {
        this.renderer.addClass(imageElement, 'active');
      } else {
        this.renderer.removeClass(imageElement, 'active');
      }
    }
  }
}
