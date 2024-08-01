import { render } from "@testing-library/react";
import Header from "../Header";

it("should verify the snapshot", () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});
