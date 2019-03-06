import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import { HiddenLabel } from "../HiddenLabel";

// see https://github.com/gnapse/jest-dom#usage
import "jest-dom/extend-expect";

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

it("is invisible for the users at first", () => {
  const { queryByTestId, getByTestId } = render(<HiddenLabel />);

  expect(queryByTestId("text")).toBeNull();

  fireEvent.click(getByTestId("button"));

  expect(queryByTestId("text")).not.toBeNull();
  expect(getByTestId("text")).toHaveTextContent("Hidden label");
});
