import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DataLoaderComponent } from './data-loader/data-loader.component';
import { DataServiceService } from './data-service.service';
import { ExercisePreviewerComponent } from "./exercise-previewer/exercise-previewer.component";
import { Lesson } from './lesson';
import { LessonService } from './lesson.service';
import { LessonsComponent } from './lessons/lessons.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, FormsModule, LessonsComponent, DataLoaderComponent, ExercisePreviewerComponent]
})
export class AppComponent {
  lessons?: Lesson[];
  devMode = false;

  constructor(
    private readonly lessonService: LessonService,
    private readonly dataService: DataServiceService
  ) {
    this.dataService.getData().subscribe({
      next: (data) => {
        this.lessons = data;
      },
      error: (error) => {
        this.lessons = [];
        console.error('>>> [AppComponent] error', error);
      }
    });
  }

  ngOnInit(): void {
    const url = 'https://smartnetar.github.io/English-Book-Pre-intermediate/lessons.json';
    this.getLessons(url);
  }

  getLessons(url: string) {
    this.lessonService.getLessons(url)
      .subscribe((lessons: Lesson[]) => {
        this.dataService.setData(lessons);
      });
  };

  setLessons(lessonsToTry: Lesson[]) {
    this.dataService.setData(lessonsToTry);
  }

  toggleDevMode() {
    this.devMode = !this.devMode;
  }
}
