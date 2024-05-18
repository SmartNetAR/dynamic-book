import { Component, Input } from '@angular/core';
import { ExerciseComponent } from '../exercise/exercise.component';
import { PutWordsExercise } from '../put-words-exercise';
import { TextUserResponse } from '../text-user-response';

@Component({
  selector: 'app-put-words-exercise',
  standalone: true,
  imports: [ExerciseComponent],
  templateUrl: './put-words-exercise.component.html',
  styleUrl: './put-words-exercise.component.css',
})
export class PutWordsExerciseComponent {
  mappedExercise!: PutWordsExercise;

  @Input()
  set exercise(value: PutWordsExercise) {
    this.mappedExercise = {
      ...value,
      statement: this.getStatementTip(value).text,
      statementTip: this.getStatementTip(value),
      expectedResponse: value.statement
    }
  }

  private getStatementTip(exercise: PutWordsExercise): TextUserResponse {
    const exerciseWordsLowerCase = exercise.words.map(word => word.toLowerCase());
    const statementWords = exercise.statement.split(/(\b[\wáéíóúü']+\b)/).filter(Boolean);
    const filteredWords = statementWords.filter(word => !exerciseWordsLowerCase.includes(word.trim().toLowerCase()));
    let sentenceWithoutWords = filteredWords.join('').trim();
    sentenceWithoutWords = sentenceWithoutWords.replace(/\s+/g, ' ');
    sentenceWithoutWords = sentenceWithoutWords.replace(/\s*([\.,;:!?])(?!\w)/g, '$1');

    return { text: sentenceWithoutWords };
  }
}
