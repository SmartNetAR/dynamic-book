import { Injectable } from '@angular/core';
import { PutWordsExercise } from './put-words-exercise';
import { WriteQuestionsExercise } from './write-questions-exercise';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  private putWordsExercises: PutWordsExercise[] = [
    {
      id: 1,
      statement: 'Where were you born?',
      words: ['were'],
      expectedResponse: '',
      userResponse: { text: 'Where were you born?' },
    },
    {
      id: 2,
      statement: 'Do you have any brothers or sisters?',
      words: ['you'],
      expectedResponse: '',
      userResponse: { text: '' },
    },
    // {
    //   id: 3,
    //   statement: 'What university do you go to?',
    //   words: ['do'],
    //   expectedResponse: '',
    //   userResponse: { text: '' },
    // },
    // {
    //   id: 4,
    //   statement: 'What languages can you speak?',
    //   words: ['can'],
    //   expectedResponse: '',
    //   userResponse: { text: '' },
    // },
    // {
    //   id: 6,
    //   statement: 'Where did you study English before?',
    //   words: ['did'],
    //   expectedResponse: '',
    //   userResponse: { text: '' },
    // },
    // {
    //   id: 7,
    //   statement: 'What kind of music do you listen to?',
    //   words: ['to'],
    //   expectedResponse: '',
    //   userResponse: { text: '' },
    // },
    // {
    //   id: 8,
    //   statement: 'Where did you go last weekend?',
    //   words: ['go'],
    //   expectedResponse: '',
    //   userResponse: { text: '' },
    // },
    // {
    //   id: 9,
    //   statement: 'When you lived in Europe, what country did you live in?',
    //   words: ['did', 'in'],
    //   expectedResponse: '',
    //   userResponse: { text: '' },
    // },
  ];

  private writeQuestionsExercises: WriteQuestionsExercise[] = [
    {
      id: 1,
      statement: 'Where do you go to university?',
      words: ['you / go to university'],
      expectedResponse: 'do you go to university',
      userResponse: { text: 'Where do you go to university?' },
    },
    {
      id: 2,
      statement: 'What did you do last night?',
      words: ['you / do last night'],
      expectedResponse: 'did you do last night',
      userResponse: { text: '' },
    },
    // {
    //   id: 3,
    //   statement: 'What TV programmes does your girlfriend watch?',
    //   words: ['TV programmes / your girlfriend / watch'],
    //   expectedResponse: 'TV programmes does your girlfriend watch',
    //   userResponse: { text: '' },
    // },
    // {
    //   id: 4,
    //   statement: 'When is your birthday?',
    //   words: ['your birthday'],
    //   expectedResponse: 'is your birthday',
    //   userResponse: { text: '' },
    // },
    // {
    //   id: 5,
    //   statement: 'Where are you from?',
    //   words: ['you / from'],
    //   expectedResponse: 'are you from',
    //   userResponse: { text: '' },
    // },
    // {
    //   id: 6,
    //   statement: 'Where did your friends go on holiday last year?',
    //   words: ['your friends / go / holiday last year'],
    //   expectedResponse: 'did your friends go on holiday last year',
    //   userResponse: { text: '' },
    // },
    // {
    //   id: 7,
    //   statement: 'What kind of books do you read?',
    //   words: ['you / read'],
    //   expectedResponse: 'do you read',
    //   userResponse: { text: '' },
    // },
    // {
    //   id: 8,
    //   statement: 'Why were you angry yesterday?',
    //   words: ['you / angry yesterday'],
    //   expectedResponse: 'were you angry yesterday',
    //   userResponse: { text: '' },
    // },
  ];

  private writeNegativeSentencesExercises: WriteQuestionsExercise[] = [
    {
      id: 1,
      statement: 'You get up early.',
      expectedResponse: 'You don\'t get up early.',
      userResponse: { text: 'You don\'t get up early.' },
      words: [],
    },
    {
      id: 2,
      statement: 'It rains a lot here.',
      expectedResponse: 'It doesn\'t rain a lot here.',
      userResponse: { text: '' },
      words: [],
    },
    {
      id: 3,
      statement: 'We live in a flat',
      expectedResponse: 'We don\'t live in a flat.',
      userResponse: { text: '' },
      words: [],
    },
  ];

  private lessons = [
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
            exercises: this.putWordsExercises,
          },
          {
            id: 'b',
            title: 'Write questions in the present or past simple.',
            type: 'write-questions',
            exercises: this.writeQuestionsExercises,
          },
        ],
      },
    },
    {
      id: '1B',
      name: "Charlotte's choice",
      sections: {
        id: 1,
        name: 'grammar',
        title: 'present simple',
        activities: [
          {
            id: 'a',
            title: 'Write negative sentences.',
            type: 'write-sentence',
            exercises: this.writeNegativeSentencesExercises,
          },
        ],
      },
    },
  ];

  constructor() {}

  getLessons() {
    return this.lessons;
  }
}
