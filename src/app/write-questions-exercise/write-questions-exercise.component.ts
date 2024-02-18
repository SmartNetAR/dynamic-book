import { Component, Input, OnInit } from '@angular/core';
import { ExerciseComponent } from '../exercise/exercise.component';
import { WriteQuestionsExercise } from '../write-questions-exercise';
import { TextUserResponse } from '../text-user-response';

@Component({
  selector: 'app-write-questions-exercise',
  standalone: true,
  imports: [ExerciseComponent],
  templateUrl: './write-questions-exercise.component.html',
  styleUrl: './write-questions-exercise.component.css',
})
export class WriteQuestionsExerciseComponent implements OnInit {
  @Input() exercise!: any;
  mappedExercise: any

  ngOnInit(): void {
    this.mappedExercise = {
      ...this.exercise,
      statement: this.getStatementTip(this.exercise).text,
      statementTip: this.getStatementTip(this.exercise),
      expectedResponse: this.exercise.statement
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
