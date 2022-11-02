import React from "react";
import { render, screen } from "@testing-library/react";
import { ListHeader } from ".";
import { ListHeaderProps } from "../../types";

const titles: ListHeaderProps["titles"] = ["One", "Two", "Three", "Four"];

test("renders learn react link", () => {
  render(<ListHeader titles={titles} />);

  const rankNameOne = screen.getByText("One");
  const rankNameTwo = screen.getByText("Two");
  const rankNameThree = screen.getByText("Three");
  const rankNameFour = screen.getByText("Four");

  expect(rankNameOne).toBeInTheDocument();
  expect(rankNameTwo).toBeInTheDocument();
  expect(rankNameThree).toBeInTheDocument();
  expect(rankNameFour).toBeInTheDocument();
});
