import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";
import Text from "./text.component";

expect.addSnapshotSerializer(createSerializer());

describe("Text", () => {
  it("renders component", () => {
    const { container } = render(<Text />);
    expect(container).toMatchSnapshot();
  });
});
