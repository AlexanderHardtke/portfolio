import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { PortfoliodataService } from '../portfoliodata.service';


@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
})
export class MySkillsComponent implements OnInit, OnDestroy {
  @ViewChild('blueShadow') blueShadow!: ElementRef<HTMLImageElement>;
  @ViewChild('skills') skillsSection!: ElementRef<HTMLElement>;
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
    if (this.skillsSection && this.blueShadow) {
      const skillsElement = this.skillsSection.nativeElement;
      const imageElement = this.blueShadow.nativeElement;
  
      if (this.isInViewport(skillsElement, 1300, 250)) {
        this.renderer.addClass(imageElement, 'active');
      } else {
        this.renderer.removeClass(imageElement, 'active');
      }
    }
  }
}