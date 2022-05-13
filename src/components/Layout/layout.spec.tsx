import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";
import Layout from "./layout.component";

expect.addSnapshotSerializer(createSerializer());

describe("Layout", () => {
  it("renders component", () => {
    const { container } = render(<Layout />);
    expect(container).toMatchSnapshot();
  });
});
