import { screen } from "@testing-library/react";

export type TestElement = Document | Element | Window | Node;

export const hasInputValue = (e: TestElement, inputValue: string) => {
  return screen.getByDisplayValue(inputValue) === e;
};
