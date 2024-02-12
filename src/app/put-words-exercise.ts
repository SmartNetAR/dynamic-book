import { GrammarExercise } from "./grammar-exercise";
import { TextUserResponse } from "./text-user-response";

export interface PutWordsExercise extends GrammarExercise {
  words: string[];
  userResponse: TextUserResponse;
}
