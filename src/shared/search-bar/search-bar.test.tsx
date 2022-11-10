import { fireEvent, render, screen } from "@testing-library/react";
import { SearchBar } from ".";

test("SearchBar component renders correctly", () => {
  render(<SearchBar onClick={() => null} />);

  const input = screen.getByPlaceholderText("Enter user name");
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "Ridwan" } });
  expect(screen.getByDisplayValue("Ridwan") === input).toBe(true);
});
