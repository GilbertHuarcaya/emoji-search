import React from "react";
import Header from "./Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Verifiar titulo de la app", () => {
  render(<Header />);
  const titulo = screen.getByText("Emoji Search");
  expect(titulo).toBeInTheDocument();
});
