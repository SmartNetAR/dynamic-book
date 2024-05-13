import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-loader',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-loader.component.html',
  styleUrl: './data-loader.component.css'
})
export class DataLoaderComponent {

  @Input() url: string = 'https://smartnetar.github.io/English-Book-Pre-intermediate/lessons.json';

  @Output() urlChange = new EventEmitter<string>();

  handleUrlChange() {
    this.urlChange.emit(this.url);
  }


}
