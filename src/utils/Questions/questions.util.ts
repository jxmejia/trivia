import { Question } from "../../types";

export const transformToQuestions = (data: any): Question[] => {
  const isBooleanType = (element: any) => element.type === "boolean";
  const isTrue = (element: string) => !!(element === "True");
  const mapToQuestion = (element: any, index: number) => ({
    index: index + 1,
    category: element.category,
    type: element.type,
    difficulty: element.difficulty,
    description: element.question, // TOOD String.fromCharCode(parseInt(unicode,16))
    correctAnswer: isTrue(element.correct_answer),
    incorrectAnswers: element.incorrect_answers.map(isTrue),
  });
  const aja = data?.filter(isBooleanType).map(mapToQuestion) || [];
  console.log(aja);
  return aja;
};

export const isCorrectAnswer = ({ correctAnswer, answer }: Question) => correctAnswer === answer;

export const getCorrectAnswersTotal = (questions: Question[] = []) => questions.filter(isCorrectAnswer).length;
