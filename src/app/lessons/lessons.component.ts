import { Component } from '@angular/core';
import { PutWordsExerciseComponent } from '../put-words-exercise/put-words-exercise.component';
import { WriteQuestionsExerciseComponent } from '../write-questions-exercise/write-questions-exercise.component';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [WriteQuestionsExerciseComponent, PutWordsExerciseComponent],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css'
})
export class LessonsComponent {
  lessons = [
    {
      id: '1A',
      name: 'Where are you from?',
      sections: {
        id: 1,
        name: 'grammar',
        title: 'word order in questions',
        activities: [
          {
            id: 'a',
            title: 'Put the words into the correct place in the questions.',
            type: 'put-words',
            exercises: [
              {
                id: 1,
                baseSentence: 'Where were you born?',
                words: ['were'],
                userResponse: 'Where were you born?',
              },
              {
                id: 2,
                baseSentence: 'Do you have any brothers or sisters?',
                words: ['you'],
                userResponse: '',
              },
              {
                id: 3,
                baseSentence: 'What university do you go to?',
                words: ['do'],
                userResponse: '',
              },
              {
                id: 4,
                baseSentence: 'What languages can you speak?',
                words: ['can'],
                userResponse: '',
              },
              {
                id: 6,
                baseSentence: 'Where did you study English before?',
                words: ['did'],
                userResponse: '',
              },
              {
                id: 7,
                baseSentence: 'What kind of music do you listen to?',
                words: ['to'],
                userResponse: '',
              },
              {
                id: 8,
                baseSentence: 'Where did you go last weekend?',
                words: ['go'],
                userResponse: '',
              },
              {
                id: 9,
                baseSentence:
                  'When you lived in Europe, what country did you live in?',
                words: ['did', 'in'],
                userResponse: '',
              },
            ],
          },
          {
            id: 'b',
            title: 'Write questions in the present or past simple.',
            type: 'write-questions',
            exercises: [
              {
                id: 1,
                baseSentence: 'Where do you go to university?',
                words: ['you / go to university'],
                expectedResponse: 'do you go to university',
                userResponse: 'Where do you go to university?',
              },
              {
                id: 2,
                baseSentence: 'What did you do last night?',
                words: ['you / do last night'],
                expectedResponse: 'did you do last night',
                userResponse: '',
              },
              {
                id: 3,
                baseSentence: 'What TV programmes does your girlfriend watch?',
                words: ['TV programmes / your girlfriend / watch'],
                expectedResponse: 'TV programmes does your girlfriend watch',
                userResponse: '',
              },
              {
                id: 4,
                baseSentence: 'When is your birthday?',
                words: ['your birthday'],
                expectedResponse: 'is your birthday',
                userResponse: '',
              },
              {
                id: 5,
                baseSentence: 'Where are you from?',
                words: ['you / from'],
                expectedResponse: 'are you from',
                userResponse: '',
              },
              {
                id: 6,
                baseSentence: 'Where did your friends go on holiday last year?',
                words: ['your friends / go / holiday last year'],
                expectedResponse: 'did your friends go on holiday last year',
                userResponse: '',
              },
              {
                id: 7,
                baseSentence: 'What kind of books do you read?',
                words: ['you / read'],
                expectedResponse: 'do you read',
                userResponse: '',
              },
              {
                id: 8,
                baseSentence: 'Why were you angry yesterday?',
                words: ['you / angry yesterday'],
                expectedResponse: 'were you angry yesterday',
                userResponse: '',
              },
            ],
          },
        ],
      },
    },
    {
        id: '1B',
        name: 'Charlotte\'s choice',
        sections: {
            id: 1,
            name: 'grammar',
            title: 'present simple',
            activities: [
                {
                    id : 'a',
                    title: 'Write negative sentences.',
                    type: 'write-questions',
                    exercises: [
                        {
                            id: 1,
                            baseSentence: 'You get up early.',
                            expectedBaseSentence: 'You don\'t get up early.',
                            words: [],
                            userResponse: '',
                        },
                    ]
                }
            ]

        }
    }
  ];

}
