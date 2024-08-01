import * as MediaQueryHook from "@mui/material";
import { render } from "@testing-library/react";
import App from "../App";

jest.mock("@mui/material", () => ({
  __esModule: true,
  ...jest.requireActual("@mui/material"),
}));

it("should verify the snapshot for light mode", () => {
  jest.spyOn(MediaQueryHook, "useMediaQuery").mockReturnValue(false);
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it("should verify the snapshot for dark mode", () => {
  jest.spyOn(MediaQueryHook, "useMediaQuery").mockReturnValue(true);
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
