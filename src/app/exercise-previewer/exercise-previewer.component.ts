import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lesson } from '../lesson';

@Component({
    selector: 'app-exercise-previewer',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './exercise-previewer.component.html',
    styleUrl: './exercise-previewer.component.css'
})
export class ExercisePreviewerComponent {
    model = "";

    private examplePutWords =
        `[
  {
    "id": "6A",
    "name": "Think positive - or negative",
    "sections": {
      "id": 1,
      "name": "grammar",
      "title": "",
      "activities": [
        {
          "id": "a",
          "title": "Write sentences and questions with will / won't. Use contractions where you can.",
          "type": "put-words",
          "exercises": [
            {
              "id": 1,
              "statement": "It won't be easy to pass the exam.",
              "words": [
                "won't"
              ],
              "expectedResponse": "",
              "userResponse": {
                "text": ""
              }
            }
          ]
        }
      ]
    }
  }
]`

    @Input()
    set lessons(value: Lesson[]) {
        this.model = JSON.stringify(value, null, 2);
    }

    @Output() tryLessons = new EventEmitter<Lesson[]>();

    try() {
        const lessons = JSON.parse(this.model);
        this.tryLessons.emit(lessons);
    }

    setPutWordsExample() {
        this.model = this.examplePutWords;
    }
}
