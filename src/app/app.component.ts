import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LessonsComponent } from './lessons/lessons.component';
import { DataLoaderComponent } from './data-loader/data-loader.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, LessonsComponent, DataLoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  lessonUrl = 'https://smartnetar.github.io/English-Book-Pre-intermediate/lessons.json';

  handleChangeLessonUrl(url: string) {
    this.lessonUrl = url;
  };
}
