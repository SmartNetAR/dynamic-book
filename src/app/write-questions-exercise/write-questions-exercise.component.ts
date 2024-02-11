import { Component, Input } from '@angular/core';
import { ExerciseComponent } from '../exercise/exercise.component';
import { WriteQuestionsExercise } from '../write-questions-exercise';

@Component({
  selector: 'app-write-questions-exercise',
  standalone: true,
  imports: [ExerciseComponent],
  templateUrl: './write-questions-exercise.component.html',
  styleUrl: './write-questions-exercise.component.css'
})
export class WriteQuestionsExerciseComponent {
  @Input() exercise!: any;
  private _activityType!: string;

  @Input()
  set activityType(value: string) {
    this._activityType = value;
  }
  get activityType(): string {
    return this._activityType;
  }

  getSentenceWithoutExpectedWords(exercise: WriteQuestionsExercise) {
    return exercise.baseSentence.replace(exercise.expectedResponse, '').trim();
  }
}
