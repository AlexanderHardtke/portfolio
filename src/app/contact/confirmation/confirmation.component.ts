import { Component, Input, OnChanges, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationDialogComponent {
  @Input() visible: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnChanges() {
    const body = document.body;
    if (this.visible) {
      this.renderer.setStyle(body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(body, 'overflow');
    }
  }
}