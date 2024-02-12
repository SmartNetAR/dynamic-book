import { Component } from '@angular/core';
import { LessonService } from '../lesson.service';
import { PutWordsExerciseComponent } from '../put-words-exercise/put-words-exercise.component';
import { WriteQuestionsExerciseComponent } from '../write-questions-exercise/write-questions-exercise.component';
import { WriteSentenceExerciseComponent } from '../write-sentence-exercise/write-sentence-exercise.component';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [WriteQuestionsExerciseComponent, PutWordsExerciseComponent, WriteSentenceExerciseComponent],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css',
})
export class LessonsComponent {
    lessons = this.lessonService.getLessons();

    constructor (private readonly lessonService: LessonService) {
    }
}
