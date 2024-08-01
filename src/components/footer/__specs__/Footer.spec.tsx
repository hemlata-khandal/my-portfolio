import { render } from "@testing-library/react";
import Footer from "../Footer";

it("should verify snapshot", () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});
