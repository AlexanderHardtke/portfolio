import { Component, inject } from '@angular/core';
import { PortfoliodataService } from '../portfoliodata.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  portData = inject(PortfoliodataService);
  contactData = {
    name: "",
    email: "",
    message: ""
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }

}
