import { PutWordsExercise } from "./put-words-exercise";
import { WriteQuestionsExercise } from "./write-questions-exercise";

export interface Lesson {
  id: string;
  name: string;
  sections: Sections;
}

interface Sections {
  id: number;
  name: string;
  title: string;
  activities: Activity[];
}

interface Activity {
  id: string;
  title: string;
  type: string;
  exercises: (PutWordsExercise | WriteQuestionsExercise)[];
}
