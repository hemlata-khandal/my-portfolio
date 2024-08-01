import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ResponsiveDrawer from "../ResponsiveDrawer";

describe("Responsive Drawer", () => {
  const toggleDarkModeMock = jest.fn();
  const getElementByIdMock = jest.fn();
  const scrollIntoViewMock = jest.fn();
  beforeEach(() => {
    global.document.getElementById = getElementByIdMock;
    getElementByIdMock.mockReturnValue({ scrollIntoView: scrollIntoViewMock });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should verify the snapshot", () => {
    const { asFragment } = render(
      <ResponsiveDrawer
        selectedIndex={0}
        darkMode
        toggleDarkMode={toggleDarkModeMock}
      >
        <p>This is test content</p>
      </ResponsiveDrawer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should verify drawer open close", () => {
    global.innerWidth = 400;
    const { getByLabelText } = render(
      <ResponsiveDrawer
        selectedIndex={0}
        darkMode
        toggleDarkMode={toggleDarkModeMock}
      >
        <p>This is test content</p>
      </ResponsiveDrawer>
    );

    act(() => {
      fireEvent.click(getByLabelText("open drawer"));
    });
  });

  it("verify on click of drawer menu should scroll to respective section", () => {
    const { getAllByTestId } = render(
      <ResponsiveDrawer
        selectedIndex={0}
        darkMode
        toggleDarkMode={toggleDarkModeMock}
      >
        <p>This is test content</p>
      </ResponsiveDrawer>
    );

    act(() => {
      fireEvent.click(getAllByTestId("about")[0]);
    });

    expect(getElementByIdMock).toBeCalledWith("about-section");
    expect(scrollIntoViewMock).toBeCalledTimes(1);
  });
});
