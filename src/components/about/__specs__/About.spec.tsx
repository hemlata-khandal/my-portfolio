import { render } from "@testing-library/react";
import About from "../About";

it("should verify the snapshot", () => {
  const { asFragment } = render(<About />);
  expect(asFragment()).toMatchSnapshot();
});
