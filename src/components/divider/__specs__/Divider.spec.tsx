import { render } from "@testing-library/react";
import Divider from "../Divider";

it("verify snapshot for divider in light mode", () => {
  const { asFragment } = render(<Divider variant="light" width="60%" />);
  expect(asFragment()).toMatchSnapshot();
});

it("verify snapshot for divider in dark mode", () => {
  const { asFragment } = render(<Divider variant="dark" width="80%" />);
  expect(asFragment()).toMatchSnapshot();
});
