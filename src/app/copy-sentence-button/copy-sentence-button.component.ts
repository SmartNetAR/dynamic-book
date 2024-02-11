import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-copy-sentence-button',
  standalone: true,
  imports: [],
  templateUrl: './copy-sentence-button.component.html',
  styleUrl: './copy-sentence-button.component.css'
})
export class CopySentenceButtonComponent {
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }
}
