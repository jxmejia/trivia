import { Category, Type } from "../../types";
import { getCorrectAnswersTotal, isCorrectAnswer, transformToQuestions } from "./questions.util";

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
    expect(transformToQuestions(undefined).length).toBe(0);
  });

  it("returns an empty array when question type is not boolean", () => {
    expect(transformToQuestions([{ ...data, type: undefined }]).length).toBe(0);
  });

  it("returns questions", () => {
    const [question] = transformToQuestions([data]);
    expect(question.index).toBe(data.index);
    expect(question.category).toBe(data.category);
    expect(question.type).toBe(data.type);
    expect(question.difficulty).toBe(data.difficulty);
    expect(question.description).toBe(data.question);
    expect(question.correctAnswer).toBe(true);
    expect(question.incorrectAnswers[0]).toBe(false);
  });
});

describe("isCorrectAnswer", () => {
  const question = {
    index: 1,
    category: "Vehicles" as Category,
    type: "boolean" as Type,
    difficulty: "hard",
    description: "In 1993 Swedish car manufacturer Saab...",
    correctAnswer: true,
    incorrectAnswers: [false],
  };

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
  const questions = [
    {
      index: 1,
      category: "Vehicles" as Category,
      type: "boolean" as Type,
      difficulty: "hard",
      description: "In 1993 Swedish car manufacturer Saab...",
      correctAnswer: true,
      incorrectAnswers: [false],
      answer: true,
    },
  ];

  it("returns 1", () => {
    expect(getCorrectAnswersTotal(questions)).toBe(1);
  });
});
