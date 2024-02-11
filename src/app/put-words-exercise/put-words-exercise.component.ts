import { Component, Input } from '@angular/core';
import { ExerciseComponent } from '../exercise/exercise.component';
import { PutWordsExercise } from '../put-words-exercise';

@Component({
  selector: 'app-put-words-exercise',
  standalone: true,
  imports: [ExerciseComponent],
  templateUrl: './put-words-exercise.component.html',
  styleUrl: './put-words-exercise.component.css'
})
export class PutWordsExerciseComponent {
  @Input() exercise!: PutWordsExercise;
  private _activityType!: string;

  @Input()
  set activityType(value: string) {
    this._activityType = value;
  }
  get activityType(): string {
    return this._activityType;
  }

  getSentenceWithoutWord(exercise: PutWordsExercise) {
    const words = exercise.baseSentence.split(/\b/);
    const filteredWords = words.filter(
      (word) => !exercise.words.includes(word.trim())
    );
    let sentenceWithoutWords = filteredWords.join('').trim();
    sentenceWithoutWords = sentenceWithoutWords.replace(/\s+/g, ' ');
    sentenceWithoutWords = sentenceWithoutWords.replace(
      /\s*([\.,;:!?])(?!\w)/g,
      '$1'
    );

    return sentenceWithoutWords;
  }
}
