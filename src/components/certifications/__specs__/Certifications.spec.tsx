import { render } from "@testing-library/react";
import Certifications from "../Certifications";

it("should verify snapshot", () => {
  const { asFragment } = render(<Certifications />);
  expect(asFragment()).toMatchSnapshot();
});
