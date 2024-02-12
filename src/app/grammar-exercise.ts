import { UserResponse } from "./user-response";

export interface GrammarExercise {
  id: number;
  statement: string;
  userResponse: UserResponse;
  expectedResponse: string;
}
