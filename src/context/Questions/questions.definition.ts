import { Dispatch, ReactNode, SetStateAction } from "react";
import { Question } from "../../types";

export type QuestionsContextState = {
  questions?: Question[];
  getQuestions?: () => void;
  setQuestions?: Dispatch<SetStateAction<Question[]>>;
};

export type QuestionsContextProviderProps = {
  children: ReactNode;
};
