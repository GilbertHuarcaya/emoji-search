import React from "react";
import SearchInput from "./SearchInput";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Verificar si la app tiene input en DOM", () => {
  render(<SearchInput />);
  const Input = screen.getByTestId("emoji-input");
  expect(Input).toBeInTheDocument();
});
