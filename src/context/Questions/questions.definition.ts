import { Dispatch, ReactNode, SetStateAction } from "react";
import { Question } from "../../models";

export type QuestionsContextState = {
  questions?: Question[];
  getQuestions?: () => void;
  setQuestions?: Dispatch<SetStateAction<Question[]>>;
};

export type QuestionsContextProviderProps = {
  children: ReactNode;
};
