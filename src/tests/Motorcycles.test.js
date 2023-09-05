import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useSelector } from "react-redux";
import Motorcycles from "../components/pages/motorcycles";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter

// Mock `useSelector` and `Navbar`
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

jest.mock("../components/navbar.js", () => () => (
  <div data-testid="navbar">Navbar</div>
));

// Mock `react-slick` to render its children
jest.mock("react-slick", () => ({ children }) => <div>{children}</div>);

describe("Motorcycles", () => {
  it("displays loading when motorcycles are being fetched", () => {
    useSelector.mockImplementation(() => ({ message: "loading" }));

    render(
      <MemoryRouter>
        <Motorcycles />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays motorcycles when they are available", async () => {
    const mockMotorcycles = [
      { id: 1, name: "Motor1", image: "img1", description: "desc1" },
      { id: 2, name: "Motor2", image: "img2", description: "desc2" },
    ];

    useSelector.mockImplementation(() => ({
      message: "",
      motorcycles: mockMotorcycles,
    }));

    render(
      <MemoryRouter>
        <Motorcycles />
      </MemoryRouter>
    );

    const motor1Element = await screen.findByText("Motor1");
    const motor2Element = await screen.findByText("Motor2");

    expect(motor1Element).toBeInTheDocument();
    expect(motor2Element).toBeInTheDocument();
  });
});
