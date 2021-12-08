import React from "react";
import EmojiResultsRow from "./EmojiResultRow";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Verificar titulo del emoji", () => {
  render(<EmojiResultsRow symbol=":)" title="feliz" />);
  const cliker = screen.queryByText("feliz");
  expect(cliker).toHaveTextContent("feliz");
});
