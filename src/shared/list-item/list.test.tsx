import React from "react";
import { render, screen } from "@testing-library/react";
import { ListItem } from ".";

const data = {
  name: "ridwan",
  bananas: 20,
  position: 5,
  isSearchedUser: true,
  index: 40,
};

test("ListItem renders correctly", () => {
  render(<ListItem {...data} />);

  const textName = screen.getByText("ridwan");
  const bananaCount = screen.getByText(20);
  expect(textName).toBeInTheDocument();
  expect(bananaCount).toBeInTheDocument();
});
