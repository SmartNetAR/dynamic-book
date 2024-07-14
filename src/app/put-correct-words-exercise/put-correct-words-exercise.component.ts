import { Component, Input } from '@angular/core';
import { ExerciseComponent } from "../exercise/exercise.component";
import { PutWordsExercise } from '../put-words-exercise';
import { TextUserResponse } from '../text-user-response';

@Component({
    selector: 'app-put-correct-words-exercise',
    standalone: true,
    templateUrl: './put-correct-words-exercise.component.html',
    styleUrl: './put-correct-words-exercise.component.css',
    imports: [ExerciseComponent]
})
export class PutCorrectWordsExerciseComponent {
  mappedExercise!: PutWordsExercise;

  @Input()
  set exercise(value: PutWordsExercise) {
    this.mappedExercise = {
      ...value,
      statement: this.getStatementTip(value).text,
      statementTip: this.getStatementTip(value),
      expectedResponse: value.statement,
      getWords: () => [],
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
