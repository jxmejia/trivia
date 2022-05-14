import { createSerializer } from "@emotion/jest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QuestionsContext } from "../../context";
import { questionsMock } from "../../mocks";
import { toQuestions } from "../../utils";
import Home from "./home.view";

expect.addSnapshotSerializer(createSerializer());

const contextMock = {
  questions: toQuestions(questionsMock),
  getQuestions: jest.fn(),
  setQuestions: jest.fn(),
};

const customRender = () =>
  render(
    <QuestionsContext.Provider value={contextMock}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </QuestionsContext.Provider>,
  );

it("renders component", () => {
  customRender();
  expect(screen.getByText("Welcome to the trivia challenge")).toBeVisible();
  expect(screen.getByText("You will be presented with 10 True or False questions.")).toBeVisible();
  expect(screen.getByText("Can you score 100%?")).toBeVisible();
  expect(screen.getByText("Begin")).toBeVisible();
});

it("redirects to quiz", () => {
  customRender();
  const button = screen.getByText("Begin");
  fireEvent.click(button);
  expect(contextMock.getQuestions).toBeCalledTimes(1);
});
