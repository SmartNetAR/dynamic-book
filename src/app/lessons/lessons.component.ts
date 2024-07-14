import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivityDataComponent } from "../activity-data/activity-data.component";
import { Lesson } from '../lesson';
import { PutCorrectWordsExerciseComponent } from "../put-correct-words-exercise/put-correct-words-exercise.component";
import { PutWordsExerciseComponent } from '../put-words-exercise/put-words-exercise.component';
import { WriteQuestionsExerciseComponent } from '../write-questions-exercise/write-questions-exercise.component';
import { WriteSentenceExerciseComponent } from '../write-sentence-exercise/write-sentence-exercise.component';

@Component({
    selector: 'app-lessons',
    standalone: true,
    templateUrl: './lessons.component.html',
    styleUrl: './lessons.component.css',
    imports: [
        WriteQuestionsExerciseComponent,
        PutWordsExerciseComponent,
        WriteSentenceExerciseComponent,
        CommonModule,
        PutCorrectWordsExerciseComponent,
        ActivityDataComponent
    ]
})
export class LessonsComponent {
  @Input() lessons: Lesson[] = [];
}
