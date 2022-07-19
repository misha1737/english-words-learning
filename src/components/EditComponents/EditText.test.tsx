import EditText from "./EditText";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// (or /dom, /vue, ...)
describe("EditText", () => {
  it("should show login form", () => {
    let textValue = "";
    const changetextValue = (value: string) => {
      textValue = value;
    };
    render(<EditText input={changetextValue} value={textValue} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  it("test label", () => {
    let textValue = "";
    const changetextValue = (value: string) => {
      textValue = value;
    };
    let label = "email";
    render(
      <EditText input={changetextValue} value={textValue} label={label} />
    );
    expect(screen.getByLabelText("email")).toBeInTheDocument();
  });
  it("test value", () => {
    const changetextValue = (value: string) => {
      textValue = value;
    };
    let textValue = "some text";
    render(<EditText input={changetextValue} value={textValue} />);
    expect(screen.getByDisplayValue("some text")).toBeInTheDocument();
  });
  it("test change value", () => {
    let textValue = "";
    const changetextValue = (value: string) => {
      textValue = value;
    };
    const { rerender } = render(
      <EditText input={changetextValue} value={textValue} />
    );
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "react" },
    });
    rerender(<EditText input={changetextValue} value={textValue} />);
    expect(textValue).toBe("react");
  });
  it("test user change value", async () => {
    let textValue = "";
    const changetextValue = (value: string) => {
      textValue = value;
    };
    const user = userEvent.setup();
    render(<EditText input={changetextValue} value={textValue} />);
    console.log(textValue);
    const input = screen.getByRole("textbox");
    await user.click(input);
    expect(input).toHaveFocus();
    await user.type(input, "user text");
    // screen.debug();
    //expect(textValue).toBe("user text");
    //expect(screen.getByDisplayValue("user text")).toBeInTheDocument();
  });
  it("input focus", () => {
    let textValue = "";
    const changetextValue = (value: string) => {
      textValue = value;
    };
    render(<EditText input={changetextValue} value={textValue} />);
    const input = screen.getByRole("textbox");
    expect(input).not.toHaveFocus();
    act(() => input.focus());
    expect(input).toHaveFocus();
  });
});
