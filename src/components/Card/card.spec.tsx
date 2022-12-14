import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";
import Card from "./card.component";

expect.addSnapshotSerializer(createSerializer());

it("renders component", () => {
  const { container } = render(<Card />);
  expect(container).toMatchSnapshot();
});
