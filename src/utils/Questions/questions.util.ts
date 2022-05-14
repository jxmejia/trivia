import { QuestionsData, Question, Category, QuestionType } from "../../types";

export const toQuestions = (data: QuestionsData[]): Question[] => {
  const isBooleanType = (element: QuestionsData) => element.type === "boolean";
  const isTrue = (element?: string) => !!(element === "True");
  const toQuestion = (element: QuestionsData, index: number) => ({
    index: index + 1,
    category: element.category as Category,
    type: element.type as QuestionType,
    difficulty: element.difficulty,
    description: element.question, // FIXME: transform into natural text?
    correctAnswer: isTrue(element.correct_answer),
    incorrectAnswers: element.incorrect_answers?.map(isTrue),
  });
  return data.filter(isBooleanType).map(toQuestion);
};

export const isCorrectAnswer = ({ correctAnswer, answer }: Question): boolean => correctAnswer === answer;

export const getCorrectAnswersTotal = (questions: Question[] = []): number => questions.filter(isCorrectAnswer).length;
