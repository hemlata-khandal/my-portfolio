import { render } from "@testing-library/react";
import Skills from "../Skills";

it("should verify snapshot", () => {
  const { asFragment } = render(<Skills />);
  expect(asFragment()).toMatchSnapshot();
});
