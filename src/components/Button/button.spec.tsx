import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";
import Button from "./button.component";

expect.addSnapshotSerializer(createSerializer());

it("renders component", () => {
  const { container } = render(<Button />);
  expect(container).toMatchSnapshot();
});
