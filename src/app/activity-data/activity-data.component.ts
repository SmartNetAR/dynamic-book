import { Component, Input } from '@angular/core';
import { Activity } from '../lesson';
import { PutWordsExercise } from '../put-words-exercise';
import { WriteQuestionsExercise } from '../write-questions-exercise';

@Component({
  selector: 'app-activity-data',
  standalone: true,
  imports: [],
  templateUrl: './activity-data.component.html',
  styleUrl: './activity-data.component.css'
})
export class ActivityDataComponent {
  words: string[] = [];

  @Input()
  set activity(activity: Activity | undefined) {
    if (activity?.type === "put-correct-words") {
      this.words = this.getUnorderedWords(this.getUniqueWords(activity.exercises));
    }
  }

  private getUniqueWords(exercises: PutWordsExercise[] | WriteQuestionsExercise[]): string[] {
    const wordsSet = new Set<string>();
    exercises.forEach(exercise => {
      exercise.words.forEach(word => wordsSet.add(word))
    });

    return Array.from(wordsSet);
  }

  private getUnorderedWords(words: string[]): string[] {
    const unorderedWords: string[] = [];
    while (words.length > 0) {
      const index = Math.floor(Math.random() * words.length);
      unorderedWords.push(words[index]);
      words.splice(index, 1);
    }

    return unorderedWords;
  }
}
