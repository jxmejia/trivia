import { render } from "@testing-library/react";
import App from "./App";

test("renders component", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
