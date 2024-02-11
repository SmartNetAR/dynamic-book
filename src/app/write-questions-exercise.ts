import { GrammarExercise } from "./grammar-exercise";

export interface WriteQuestionsExercise extends GrammarExercise {
  expectedResponse: string;
  words: string[];
}
