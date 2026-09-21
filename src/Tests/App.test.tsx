import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

function getInput() {
  return screen.getByPlaceholderText("Enter the task.....");
}

function getAddButton() {
  return screen.getByRole("button", { name: "Add" });
}

describe("App", () => {
  it("blocks adding an empty task and shows an error", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(getAddButton());

    expect(screen.getByText("Input cannot be empty")).toBeInTheDocument();
    expect(screen.queryByText(/1 -/)).not.toBeInTheDocument();
  });

  it("blocks adding a whitespace-only task", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(getInput(), "   ");
    await user.click(getAddButton());

    expect(screen.getByText("Input cannot be empty")).toBeInTheDocument();
  });

  it("adds a task and clears the input", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(getInput(), "Buy milk");
    await user.click(getAddButton());

    expect(screen.getByText("1 - Buy milk")).toBeInTheDocument();
    expect(getInput()).toHaveValue("");
    expect(screen.queryByText("Input cannot be empty")).not.toBeInTheDocument();
  });

  it("numbers multiple tasks sequentially", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(getInput(), "First");
    await user.click(getAddButton());
    await user.type(getInput(), "Second");
    await user.click(getAddButton());

    expect(screen.getByText("1 - First")).toBeInTheDocument();
    expect(screen.getByText("2 - Second")).toBeInTheDocument();
  });

  it("deletes a task", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(getInput(), "Buy milk");
    await user.click(getAddButton());
    expect(screen.getByText("1 - Buy milk")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Delete" }));

    expect(screen.queryByText("1 - Buy milk")).not.toBeInTheDocument();
  });

  it("resets the input and error", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(getAddButton());
    expect(screen.getByText("Input cannot be empty")).toBeInTheDocument();

    await user.type(getInput(), "Draft textss");
    await user.click(screen.getByRole("button", { name: "Reset" }));

    expect(getInput()).toHaveValue("");
    expect(screen.queryByText("Input cannot be empty")).not.toBeInTheDocument();
  });
});
