import { fireEvent,render, screen } from "@testing-library/react";
import Counter from "../Counter";

describe("Render counter elements", () => {
  it("When increment is clicked", () => {
    render(<Counter />);
    const buttonIncrement = screen.getByTestId("inc");
    fireEvent.click(buttonIncrement);
    expect(screen.getByText("Counter: 1")).toBeInTheDocument();
  });

  it("When decrement is clicked", () => {
    render(<Counter />);
    const buttonDecremnet = screen.getByTestId("dec");
    fireEvent.click(buttonDecremnet);
    expect(screen.getByText("Counter: -1")).toBeInTheDocument();
  });
});
