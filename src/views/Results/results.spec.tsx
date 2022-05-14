import { createSerializer } from "@emotion/jest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QuestionsContext } from "../../context";
import { questionsMock } from "../../mocks";
import { toQuestions } from "../../utils";
import Results from "./results.view";

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
        <Results />
      </BrowserRouter>
    </QuestionsContext.Provider>,
  );

it("renders component", () => {
  customRender();
  expect(screen.getByText("You scored 0 / 10")).toBeVisible();
  expect(screen.getByText("Play again")).toBeVisible();
});
