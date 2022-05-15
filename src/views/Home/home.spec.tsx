import { createSerializer } from "@emotion/jest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QuestionsContext } from "../../context";
import { mockQuestions } from "../../mocks";
import { toQuestions } from "../../utils";
import Home from "./home.view";

expect.addSnapshotSerializer(createSerializer());

const mockContext = {
  questions: toQuestions(mockQuestions),
  getQuestions: jest.fn(),
  setQuestions: jest.fn(),
};

const customRender = () =>
  render(
    <QuestionsContext.Provider value={mockContext}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </QuestionsContext.Provider>,
  );

it("renders component", () => {
  customRender();
  expect(screen.getByText("Welcome to the Trivia Challenge!")).toBeVisible();
  expect(screen.getByText("You will be presented with 10 True or False questions.")).toBeVisible();
  expect(screen.getByText("Can you score 100%?")).toBeVisible();
  expect(screen.getByText("Begin")).toBeVisible();
});

it("gets the questions", () => {
  customRender();
  const button = screen.getByText("Begin");
  fireEvent.click(button);
  expect(mockContext.getQuestions).toBeCalledTimes(1);
});
