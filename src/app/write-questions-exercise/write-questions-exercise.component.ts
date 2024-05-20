import { Component, Input } from '@angular/core';
import { ExerciseComponent } from '../exercise/exercise.component';
import { TextUserResponse } from '../text-user-response';
import { WriteQuestionsExercise } from '../write-questions-exercise';

@Component({
  selector: 'app-write-questions-exercise',
  standalone: true,
  imports: [ExerciseComponent],
  templateUrl: './write-questions-exercise.component.html',
  styleUrl: './write-questions-exercise.component.css',
})
export class WriteQuestionsExerciseComponent {
  mappedExercise!: WriteQuestionsExercise

  @Input()
  set exercise(value: WriteQuestionsExercise){
    this.mappedExercise = {
      ...value,
      statement: this.getStatementTip(value).text,
      statementTip: this.getStatementTip(value),
      expectedResponse: value.statement
    }
  }

  private getStatementTip(
    exercise: WriteQuestionsExercise
  ): TextUserResponse {
    return {
      text: exercise.statement.replace(exercise.expectedResponse, '').trim(),
    };
  }
}
