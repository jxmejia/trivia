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

it("renders component", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

it("redirects to quiz", () => {
  render(
    <QuestionsContext.Provider value={contextMock}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </QuestionsContext.Provider>,
  );

  const button = screen.getByText("Begin");
  fireEvent.click(button);

  expect(contextMock.getQuestions).toBeCalledTimes(1);
});
