import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";
import Title from "./title.component";

expect.addSnapshotSerializer(createSerializer());

describe("Title", () => {
  it("renders component", () => {
    const { container } = render(<Title />);
    expect(container).toMatchSnapshot();
  });
});
