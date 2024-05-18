import { TextUserResponse } from "./text-user-response";
import { UserResponse } from "./user-response";

export interface GrammarExercise {
  id: number;
  statement: string;
  statementTip: TextUserResponse;
  userResponse: UserResponse;
  expectedResponse: string;
}
