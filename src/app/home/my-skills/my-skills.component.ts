import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { PortfoliodataService } from '../../portfoliodata.service';
import Aos from 'aos';


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

  constructor(private renderer: Renderer2) {
    Aos.init();
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
    if (this.skillsSection && this.blueShadow && window.innerWidth <= 1921) {
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