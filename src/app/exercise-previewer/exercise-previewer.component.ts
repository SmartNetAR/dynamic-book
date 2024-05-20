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
  select = "";

  exampleOptions = [
    { value: 'putWords', label: 'Put Words' },
    { value: 'write-questions', label: 'Write Questions' },
    { value: 'write-sentence', label: 'Write Sentence' }
  ];

  private examples = {
    putWords: `[
  {
    "id": "1A",
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
]`,
    'write-questions': `[
  {
    "id": "1A",
    "name": "Think positive - or negative",
    "sections": {
      "id": 1,
      "name": "grammar",
      "title": "",
      "activities": [
        {
          "id": "b",
          "title": "Write questions in the present or past simple.",
          "type": "write-questions",
          "exercises": [
            {
              "id": 1,
              "statement": "What did you do last night?",
              "words": [
                "you / do last night"
              ],
              "expectedResponse": "did you do last night",
              "userResponse": {
                "text": ""
              }
            }
          ]
        }
      ]
    }
  }
]`,
    'write-sentence': `[
  {
    "id": "1B",
    "name": "Charlotte's choice",
    "sections": {
      "id": 1,
      "name": "grammar",
      "title": "present simple",
      "activities": [
        {
          "id": "a",
          "title": "Write negative sentences.",
          "type": "write-sentence",
          "exercises": [
            {
              "id": 1,
              "statement": "You get up early.",
              "expectedResponse": "You don't get up early.",
              "userResponse": {
                "text": ""
              },
              "words": []
            }
          ]
        }
      ]
    }
  }
]`
  }

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
    this.model = this.examples[this.select as keyof typeof this.examples];
  }
}
