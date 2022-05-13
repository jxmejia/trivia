import { createContext, useState } from "react";
import { questionsMock } from "../../mocks";
import { Question } from "../../models";
import { transformToQuestion } from "../../utils";
import { QuestionsContextProviderProps, QuestionsContextState } from "./questions.definition";

export const QuestionsContext = createContext<QuestionsContextState>({});

export const QuestionsContextProvider = ({ children }: QuestionsContextProviderProps): JSX.Element => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const getQuestions = async () => {
    let jsonResponse;

    try {
      const response = await fetch(process.env.REACT_APP_QUESTIONS_API_URL || "");
      if (response.status === 200) {
        jsonResponse = await response.json();
      }
    } catch (error) {
      console.error(error);
    } finally {
      const questions = transformToQuestion(jsonResponse?.results || questionsMock);
      setQuestions(questions);
    }
  };

  return (
    <QuestionsContext.Provider value={{ questions, getQuestions, setQuestions }}>{children}</QuestionsContext.Provider>
  );
};

export default QuestionsContextProvider;
