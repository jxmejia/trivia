import { Category, QuestionType } from "../../types";
import { getCorrectAnswersTotal, hasAnswers, isCorrectAnswer, toQuestions } from "./questions.util";

const question = {
  index: 1,
  category: "Vehicles" as Category,
  type: "boolean" as QuestionType,
  difficulty: "hard",
  description: "In 1993 Swedish car manufacturer Saab...",
  correctAnswer: true,
  incorrectAnswers: [false],
};

describe("transformToQuestion", () => {
  const data = {
    index: 1,
    category: "Vehicles",
    type: "boolean",
    difficulty: "hard",
    question: "In 1993 Swedish car manufacturer Saab...",
    correct_answer: "True",
    incorrect_answers: ["False"],
  };

  it("returns an empty array when no data", () => {
    expect(toQuestions([]).length).toBe(0);
  });

  it("returns an empty array when question type is not boolean", () => {
    expect(toQuestions([{ ...data, type: undefined }]).length).toBe(0);
  });

  it("returns questions", () => {
    const [question] = toQuestions([data]);
    expect(question.index).toBe(data.index);
    expect(question.category).toBe(data.category);
    expect(question.type).toBe(data.type);
    expect(question.difficulty).toBe(data.difficulty);
    expect(question.description).toBe(data.question);
    expect(question.correctAnswer).toBe(true);
    expect(question.incorrectAnswers?.[0]).toBe(false);
  });
});

describe("isCorrectAnswer", () => {
  it("returns true", () => {
    expect(isCorrectAnswer({ ...question, answer: true })).toBeTruthy;
    expect(isCorrectAnswer({ ...question, correctAnswer: false, answer: false })).toBeTruthy;
  });

  it("returns false", () => {
    expect(isCorrectAnswer({ ...question, answer: false })).toBeFalsy;
    expect(isCorrectAnswer({ ...question, answer: true })).toBeFalsy;
  });
});

describe("getCorrectAnswersTotal", () => {
  it("returns 0", () => {
    expect(getCorrectAnswersTotal([{ ...question, answer: false }])).toBe(0);
  });

  it("returns 1", () => {
    expect(getCorrectAnswersTotal([{ ...question, answer: true }])).toBe(1);
  });
});

describe("hasAnswers", () => {
  it("returns false", () => {
    expect(hasAnswers([{ ...question, answer: false }])).toBeFalsy;
    expect(hasAnswers([{ ...question, answer: true }])).toBeFalsy;
  });

  it("returns true", () => {
    expect(hasAnswers([{ ...question, answer: undefined }])).toBeTruthy;
  });
});
