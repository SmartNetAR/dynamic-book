import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface GrammarExercise {
  id: number;
  question: string;
  userResponse: string;
}

interface PutWordsExercise extends GrammarExercise {
  words: string[];
}

interface WriteQuestionsExercise extends GrammarExercise {
    expectedResponse: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  lesson = {
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
              question: 'Where were you born?',
              words: ['were'],
              userResponse: 'Where were you born?',
            },
            {
              id: 2,
              question: 'Do you have any brothers or sisters?',
              words: ['you'],
              userResponse: '',
            },
            {
              id: 3,
              question: 'What university do you go to?',
              words: ['do'],
              userResponse: '',
            },
            {
              id: 4,
              question: 'What languages can you speak?',
              words: ['can'],
              userResponse: '',
            },
            {
              id: 6,
              question: 'Where did you study English before?',
              words: ['did'],
              userResponse: '',
            },
            {
              id: 7,
              question: 'What kind of music do you listen to?',
              words: ['to'],
              userResponse: '',
            },
            {
              id: 8,
              question: 'Where did you go last weekend?',
              words: ['go'],
              userResponse: '',
            },
            {
              id: 9,
              question:
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
              question: 'Where do you go to university?',
              words: ['you / go to university'],
              expectedResponse: 'do you go to university',
              userResponse: 'Where do you go to university?',
            },
            {
              id: 2,
              question: 'What did you do last night?',
              words: ['you / do last night'],
              expectedResponse: 'did you do last night',
              userResponse: '',
            },
            {
              id: 3,
              question: 'What TV programmes does your girlfriend watch?',
              words: ['TV programmes / your girlfriend / watch'],
              expectedResponse: 'TV programmes does your girlfriend watch',
              userResponse: '',
            },
            {
              id: 4,
              question: 'When is your birthday?',
              words: ['your birthday'],
              expectedResponse: 'is your birthday',
              userResponse: '',
            },
            {
              id: 5,
              question: 'Where are you from?',
              words: ['you / from'],
              expectedResponse: 'are you from',
              userResponse: '',
            },
            {
              id: 6,
              question: 'Where did your friends go on holiday last year?',
              words: ['your friends / go / holiday last year'],
              expectedResponse: 'did your friends go on holiday last year',
              userResponse: '',
            },
            {
              id: 7,
              question: 'What kind of books do you read?',
              words: ['you / read'],
              expectedResponse: 'do you read',
              userResponse: '',
            },
            {
              id: 8,
              question: 'Why were you angry yesterday?',
              words: ['you / angry yesterday'],
              expectedResponse: 'were you angry yesterday',
              userResponse: '',
            },
          ],
        },
      ],
    },
  };

  getParsedQuestion(exercise: GrammarExercise, type: string) {
    if (type === 'put-words') {
      return this.getSentenceWithoutWord(exercise as PutWordsExercise);
    } else {
    // if (type === 'write-questions') {
      return this.getSentenceWithoutExpectedWords( exercise as WriteQuestionsExercise);
    }
  }

  getSentenceWithoutWord(exercise: PutWordsExercise) {
    const words = exercise.question.split(/\b/);
    const filteredWords = words.filter(
      (word) => !exercise.words.includes(word.trim())
    );
    let sentenceWithoutWords = filteredWords.join('').trim();
    sentenceWithoutWords = sentenceWithoutWords.replace(/\s+/g, ' ');
    sentenceWithoutWords = sentenceWithoutWords.replace(
      /\s*([\.,;:!?])(?!\w)/g,
      '$1'
    );

    return sentenceWithoutWords;
  }

  getSentenceWithoutExpectedWords(exercise: WriteQuestionsExercise) {
    return exercise.question.replace(exercise.expectedResponse, '').trim();
  }

  copySentenceToInput(exercise: GrammarExercise, type: string) {
    if (type === 'put-words') {
        exercise.userResponse = this.getSentenceWithoutWord(exercise as PutWordsExercise);
    } else {
      exercise.userResponse = this.getSentenceWithoutExpectedWords( exercise as WriteQuestionsExercise);
    }
  }
}
