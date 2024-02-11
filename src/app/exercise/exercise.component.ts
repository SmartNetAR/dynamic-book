import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PutWordsExercise } from '../put-words-exercise';
import { WriteQuestionsExercise } from '../write-questions-exercise';
import { FormsModule } from '@angular/forms';
import { GrammarExercise } from '../grammar-exercise';
import { CopySentenceButtonComponent } from '../copy-sentence-button/copy-sentence-button.component';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [FormsModule, CopySentenceButtonComponent],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css',
})
export class ExerciseComponent implements AfterViewInit  {
  @Input() exercise!: PutWordsExercise | WriteQuestionsExercise;
  private _activityType!: string;

  @Input() tipSentence!: string;

  @Input()
  set activityType(value: string) {
    this._activityType = value;
  }
  get activityType(): string {
    return this._activityType;
  }

  handleClick() {
    this.copySentenceToInput();
  }

  ngAfterViewInit(): void {
    if (!this._activityType) {
      throw new Error('activityType is required');
    }
  }

  copySentenceToInput() {
      this.exercise.userResponse = this.tipSentence;
  }

}
