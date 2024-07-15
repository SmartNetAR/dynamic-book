import { PutWordsExercise } from "./put-words-exercise";
import { WriteQuestionsExercise } from "./write-questions-exercise";

export interface Lesson {
  id: string;
  name: string;
  sections: Section[];
}

interface Section {
  id: number;
  name: string;
  title: string;
  activities: Activity[];
}

export interface Activity {
  id: string;
  title: string;
  type: string;
  exercises: (PutWordsExercise | WriteQuestionsExercise)[];
}
