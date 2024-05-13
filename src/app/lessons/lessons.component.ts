import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lesson } from '../lesson';
import { LessonService } from '../lesson.service';
import { PutWordsExerciseComponent } from '../put-words-exercise/put-words-exercise.component';
import { WriteQuestionsExerciseComponent } from '../write-questions-exercise/write-questions-exercise.component';
import { WriteSentenceExerciseComponent } from '../write-sentence-exercise/write-sentence-exercise.component';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [
    WriteQuestionsExerciseComponent,
    PutWordsExerciseComponent,
    WriteSentenceExerciseComponent,
    CommonModule],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css',
})
export class LessonsComponent {
  @Input()
  set url(value: string) {
    if (value) {
      this.lessons$ = this.lessonService.getLessons(value) || of([]);
    }
  }

  lessons$: Observable<Lesson[]> = of([]);

  constructor(private readonly lessonService: LessonService) {
  }
}
