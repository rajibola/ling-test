import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const searchButton = screen.getByText("Search");
  const input = screen.getByPlaceholderText("Enter user name");
  expect(input).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "Ridwan" } });
  expect(screen.getByDisplayValue("Ridwan") === input).toBe(true);

  fireEvent.click(searchButton, { onclick: () => input });
});

test("renders hook", () => {
  render(<App />);

  const searchButton = screen.getByText("Search");
  const input = screen.getByPlaceholderText("Enter user name");

  fireEvent.change(input, { target: { value: "Rica Ella Francisco" } });

  fireEvent.click(searchButton, { onclick: () => input });

  const listItem = screen.getByTestId("list-item");

  expect(listItem).toBeInTheDocument();
});