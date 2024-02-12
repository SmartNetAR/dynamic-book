import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CopySentenceButtonComponent } from '../copy-sentence-button/copy-sentence-button.component';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [FormsModule, CopySentenceButtonComponent],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css',
})
export class ExerciseComponent {
  @Input() exercise!: any /* PutWordsExercise | WriteQuestionsExercise */;

  handleClick() {
    this.copySentenceToInput();
  }

  copySentenceToInput() {
      this.exercise.userResponse = this.exercise.statementTip;
  }

}
