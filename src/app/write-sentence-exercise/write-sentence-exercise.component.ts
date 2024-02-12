import { Component, Input, OnInit } from '@angular/core';
import { ExerciseComponent } from '../exercise/exercise.component';
import { TextUserResponse } from '../text-user-response';
import { WriteQuestionsExercise } from '../write-questions-exercise';

@Component({
  selector: 'app-write-sentence-exercise',
  standalone: true,
  imports: [ExerciseComponent],
  templateUrl: './write-sentence-exercise.component.html',
  styleUrl: './write-sentence-exercise.component.css',
})
export class WriteSentenceExerciseComponent implements OnInit {
  @Input() exercise!: any;
  mappedExercise: any;

  ngOnInit(): void {
    this.mappedExercise = {
      ...this.exercise,
      statementTip: this.getStatementTip(this.exercise),
      expectedResponse: this.exercise.expectedResponse,
    };
  }

  private getStatementTip(exercise: WriteQuestionsExercise): TextUserResponse {
    return {
      text: this.firstMatchingWords(exercise.statement, exercise.expectedResponse),
    };
  }

  private firstMatchingWords(str1: string, str2: string): string {
    const words1 = str1.split(' ');
    const words2 = str2.split(' ');

    for (let i = 0; i < Math.min(words1.length, words2.length); i++) {
      if (words1[i] === words2[i]) {
        return words1[i];
      }
    }

    return '';
  }
}
