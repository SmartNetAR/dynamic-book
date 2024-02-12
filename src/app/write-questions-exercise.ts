import { GrammarExercise } from "./grammar-exercise";
import { TextUserResponse } from "./text-user-response";

export interface WriteQuestionsExercise extends GrammarExercise {
  words: string[];
  userResponse: TextUserResponse;
}
