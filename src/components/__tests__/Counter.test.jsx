import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import { Counter } from "../Counter";

// see https://github.com/gnapse/jest-dom#usage
import "jest-dom/extend-expect";

// see https://jestjs.io/docs/ja/tutorial-react

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

it("is visible for the users", () => {
  const { getByTestId } = render(<Counter />);

  expect(getByTestId("counter")).toBeVisible();
});

it("changes the counter text when the button is clicked", () => {
  const { getByTestId } = render(<Counter />);

  expect(getByTestId("text")).toHaveTextContent("count: 0");

  fireEvent.click(getByTestId("button"));

  expect(getByTestId("text")).toHaveTextContent("count: 1");
});
