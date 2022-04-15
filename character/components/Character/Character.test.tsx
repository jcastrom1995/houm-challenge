import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Character from "./Character";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <Character
        photo="https://rickandmortyapi.com/api/character/avatar/361.jpeg"
        name="Javier Castro"
        gender="Male"
        location="San Miguel"
        onSelect={() => jest.fn()}
      />
    );

    const name = screen.getByText("Javier Castro");

    expect(name).toBeInTheDocument();
  });
});
