import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";
import App from "./App";

expect.addSnapshotSerializer(createSerializer());

it("renders component", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
