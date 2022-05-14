import { createSerializer } from "@emotion/jest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QuestionsContext } from "../../context";
import { mockQuestions } from "../../mocks";
import { toQuestions } from "../../utils";
import Quiz from "./quiz.view";

expect.addSnapshotSerializer(createSerializer());

const contextMock = {
  questions: toQuestions(mockQuestions),
  getQuestions: jest.fn(),
  setQuestions: jest.fn(),
};

const customRender = () =>
  render(
    <QuestionsContext.Provider value={contextMock}>
      <BrowserRouter>
        <Quiz />
      </BrowserRouter>
    </QuestionsContext.Provider>,
  );

it("renders component", () => {
  customRender();
  expect(screen.getByText("Vehicles")).toBeVisible();
  expect(
    screen.getByText(
      "In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.",
    ),
  ).toBeVisible();
  expect(screen.getByText("True")).toBeVisible();
  expect(screen.getByText("False")).toBeVisible();
});

it("answers false", () => {
  customRender();
  const button = screen.getByText("False");
  fireEvent.click(button);
  expect(contextMock.questions[0].answer).toBeFalsy;
});

it("answers true", () => {
  customRender();
  const button = screen.getByText("True");
  fireEvent.click(button);
  expect(contextMock.questions[0].answer).toBeTruthy;
});
