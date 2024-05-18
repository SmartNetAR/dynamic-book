import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Lesson } from '../lesson';
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
  @Input() lessons: Lesson[] = [];
}
