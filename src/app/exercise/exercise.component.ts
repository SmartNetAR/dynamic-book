import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CopySentenceButtonComponent } from '../copy-sentence-button/copy-sentence-button.component';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [FormsModule, CopySentenceButtonComponent],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css',
})
export class ExerciseComponent implements OnInit {
  isResponseCorrect = false;
  @Input() exercise!: any /* PutWordsExercise | WriteQuestionsExercise */;

  ngOnInit(): void {
    this.evaluateResponse();
  }

  handleClickCopy() {
    this.copySentenceToInput();
    this.evaluateResponse();
  }

  copySentenceToInput() {
    this.exercise.userResponse = { ...this.exercise.statementTip };
  }

  evaluateResponse() {
    const normalizeResponse = this.normalizeResponse(
      this.exercise.userResponse.text
    );
    const normalizeExpectedResponse = this.normalizeResponse(
      this.exercise.expectedResponse
    );

    this.isResponseCorrect = normalizeResponse === normalizeExpectedResponse;
  }

  normalizeResponse(response: string) {
    response = response.toLowerCase();
    response = response.replace(/\s*[.,;:!?](?!\w)/g, '');
    response = response.replace(/\s+/g, ' ');

    return response;
  }
}
