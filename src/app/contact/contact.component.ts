import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { PortfoliodataService } from '../portfoliodata.service';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './confirmation/confirmation.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, ConfirmationDialogComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  showConfirmation: boolean = false;
  http = inject(HttpClient);
  @ViewChild('purpleShadow') purpleShadow!: ElementRef<HTMLImageElement>;
  @ViewChild('contact') contactSection!: ElementRef<HTMLElement>;
  portData = inject(PortfoliodataService);
  contactData = {
    name: "",
    email: "",
    message: "",
    privacyPolicy: false,
  };

  private scrollListener: (() => void) | null = null;
  mailTest = true;
  privacyPolicy = true;

  constructor(private renderer: Renderer2) {}

  post = {
    endPoint: 'https://alexander.hardtke.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.sendMailNotification();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.sendMailNotification();
      ngForm.resetForm();
    }
  }

  sendMailNotification() {
    this.showConfirmation = true;
    setTimeout(() => {
      this.showConfirmation = false;
    }, 3000);
  }

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
    if (this.contactSection && this.purpleShadow) {
      const skillsElement = this.contactSection.nativeElement;
      const imageElement = this.purpleShadow.nativeElement;
  
      if (this.isInViewport(skillsElement, 1000, 750)) {
        this.renderer.addClass(imageElement, 'active');
      } else {
        this.renderer.removeClass(imageElement, 'active');
      }
    }
  }

  goToPrivacyPolicy() {
    this.portData.page = "privacy"
  }
}
