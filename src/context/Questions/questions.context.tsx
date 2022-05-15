import { createContext, useState } from "react";
import { mockQuestions } from "../../mocks";
import { QuestionsData, Question } from "../../types";
import { toQuestions } from "../../utils";
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
      } else {
        // TODO: use throw / error boundary?
        console.error(`Response status failed: status ${response}`);
      }
    } catch (error) {
      // TODO: use throw / error boundary?
      console.error(error);
    } finally {
      const questions = toQuestions((jsonResponse?.results as QuestionsData[]) || mockQuestions);
      setQuestions(questions);
    }
  };

  return (
    <QuestionsContext.Provider value={{ questions, getQuestions, setQuestions }}>{children}</QuestionsContext.Provider>
  );
};

export default QuestionsContextProvider;
