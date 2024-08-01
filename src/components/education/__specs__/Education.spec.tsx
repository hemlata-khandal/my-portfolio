import { render } from "@testing-library/react";
import Education from "../Education";

it("should verify snapshot", () => {
  const { asFragment } = render(<Education />);
  expect(asFragment()).toMatchSnapshot();
});
