import { render } from "@testing-library/react";
import AdvanceImg from "../AdvanceImg";

it("should verify snapshot without style", () => {
  const { asFragment } = render(
    <AdvanceImg src="logo.jpg" srcWebp="logo.webp" altText="test image" />
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should verify snapshot with style", () => {
  const { asFragment } = render(
    <AdvanceImg
      src="logo.jpg"
      srcWebp="logo.webp"
      altText="test image"
      style={{ width: "100%" }}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
