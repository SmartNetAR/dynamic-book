import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface GrammarExercise {
  id: number;
  question: string;
  words: string[];
  userResponse: string;
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
              question: 'When you lived in Europe, what country did you live in?',
              words: ['did', 'in'],
              userResponse: '',
            },
          ],
        },
      ],
    },
  };
getSentenceWithoutWord(exercise: GrammarExercise) {
    const words = exercise.question.split(/\b/);
    const filteredWords = words.filter(word => !exercise.words.includes(word.trim()));
    let sentenceWithoutWords = filteredWords.join('').trim();
    sentenceWithoutWords = sentenceWithoutWords.replace(/\s+/g, ' ');
    sentenceWithoutWords = sentenceWithoutWords.replace(/\s*([\.,;:!?])(?!\w)/g, '$1');

    return sentenceWithoutWords;
}







//   getSentenceWithoutWord(exercise: GrammarExercise) {
//     let wordsBetweenSpaces = exercise.question
//       .split(' ')
//       .filter((word) => !exercise.words.includes(word))
//       .join(' ');

//     return wordsBetweenSpaces;

//     // return wordsBetweenSpaces
//     //   .split(/[\s.,!?:;]+/)
//     //   .filter((word) => !exercise.words.includes(word))
//     //   .join(' ');
//   }

  copySentenceToInput(exercise: GrammarExercise) {
    exercise.userResponse = this.getSentenceWithoutWord(exercise);
  }
}

// .split(/[\s.,!?:;]+/)
