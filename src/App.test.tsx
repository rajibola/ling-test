import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Search functionality works", () => {
  render(<App />);
  window.alert = () => {};

  const searchButton = screen.getByText("Search");
  const input = screen.getByPlaceholderText("Enter user name");
  expect(input).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "Ridwan" } });
  expect(screen.getByDisplayValue("Ridwan") === input).toBe(true);

  fireEvent.click(searchButton, { onclick: () => input });
});

test("Check if data is returned after searching with correct name", () => {
  render(<App />);

  const searchButton = screen.getByText("Search");
  const input = screen.getByPlaceholderText("Enter user name");

  fireEvent.change(input, { target: { value: "Rica Ella Francisco" } });

  fireEvent.click(searchButton, { onclick: () => input });

  const listItem = screen.getByTestId("list-item");

  expect(listItem).toBeInTheDocument();
});
