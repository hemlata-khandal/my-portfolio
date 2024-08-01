import { cleanup, render } from "@testing-library/react";
import Experiences from "../Experiences";

describe("test experiences component", () => {
  const mockUseMediaQuery = (
    width: number,
    predicate: (q: string) => boolean
  ) => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: width,
    });
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: predicate(query),
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
  };

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("verify snapshot for larger display", () => {
    mockUseMediaQuery(1600, (query) => !!query);
    const { asFragment } = render(<Experiences />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("verify snapshot for tablet or lesser size display", () => {
    mockUseMediaQuery(400, (query) => !!query);
    const { asFragment } = render(<Experiences />);
    expect(asFragment()).toMatchSnapshot();
  });
});
