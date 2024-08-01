import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import CustomAppBar from "../CustomAppBar";

it("should verify the snapshot", () => {
  const toggleDrawerMock = jest.fn();
  const toggleDarkModeMock = jest.fn();
  const { asFragment } = render(
    <CustomAppBar
      darkMode
      drawerWidth={240}
      toggleDrawer={toggleDrawerMock}
      toggleDarkMode={toggleDarkModeMock}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});

it("should verify toggle dark/light mode", () => {
  const toggleDrawerMock = jest.fn();
  const toggleDarkModeMock = jest.fn();
  const { getByLabelText, getByTestId } = render(
    <CustomAppBar
      darkMode={false}
      drawerWidth={240}
      toggleDrawer={toggleDrawerMock}
      toggleDarkMode={toggleDarkModeMock}
    />
  );

  expect(getByTestId("DarkModeIcon")).toBeVisible();

  act(() => {
    fireEvent.click(getByLabelText("toggle light/dark mode"));
  });

  waitFor(() => {
    expect(getByTestId("LightModeIcon")).toBeVisible();
  });
});
