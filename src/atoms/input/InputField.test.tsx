import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import InputField from "./InputField";
import { hasInputValue } from "../../common/test.helpers";

describe("InputField", () => {
  it("should display entered text", async () => {
    render(<InputField label="My input" />);

    const inputEl = screen.getByLabelText("My input");

    fireEvent.change(inputEl, { target: { value: "Hello World" } });

    expect(hasInputValue(inputEl, "Hello World")).toBe(true);
  });

  it("should has an asterisk if required", async () => {
    render(<InputField label="My input" required />);

    const labelEl = screen.getByTestId("input-label");

    expect(labelEl.className).toContain("required");
  });

  it("should not has an asterisk if not required", async () => {
    render(<InputField label="My input" required={false} />);

    const labelEl = screen.getByTestId("input-label");

    expect(labelEl.className).not.toContain("required");
  });

  it("should render errorMessage text", () => {
    render(
      <InputField label="My input" required={false} errorMessage={"An error"} />
    );

    const errorMsg = screen.getByTestId("input-error");

    expect(errorMsg.innerHTML).toContain("An error");
  });

  it("should not render errorMessage text if not errorMessage", () => {
    render(<InputField label="My input" required={false} errorMessage={""} />);

    const errorMsg = screen.getByTestId("input-error");

    expect(errorMsg.innerHTML).toBe("<span></span>");
  });
});
