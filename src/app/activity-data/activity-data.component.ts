import { Component, Input } from '@angular/core';
import { Activity } from '../lesson';
import { PutWordsExercise } from '../put-words-exercise';
import { WriteQuestionsExercise } from '../write-questions-exercise';

@Component({
  selector: 'app-activity-data',
  standalone: true,
  imports: [],
  templateUrl: './activity-data.component.html',
  styleUrl: './activity-data.component.css'
})
export class ActivityDataComponent {
  @Input() activity: Activity | undefined;

  getUniqueWords(exercises: PutWordsExercise[] | WriteQuestionsExercise[]): string[] {
    const wordsSet = new Set<string>();
    exercises.forEach(exercise => {
      exercise.words.forEach(word => wordsSet.add(word))
    });

    return Array.from(wordsSet);
  }
}
