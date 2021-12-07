import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Calculations done properly", () => {
  test("calculates proper weight for Mars", async () => {
    render(<App />);

    //Simulating that we enter a weight of 23kg
    const weightInput = screen.getByTestId("weight-input");
    userEvent.type(weightInput, "23");

    //Simulating that the submit button is being clicked
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Waiting a couple of seconds so that the planet component renders
    await new Promise((r) => setTimeout(r, 3600));

    //Evaluating if result is correct
    expect(screen.queryByTestId("mars")).toHaveTextContent("8.71 kg");
  });

  test("calculates proper weight for Mercury", async () => {
    render(<App />);

    //Simulating that we enter a weight of 23kg
    const weightInput = screen.getByTestId("weight-input");
    userEvent.type(weightInput, "23");

    //Simulating that the submit button is being clicked
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Waiting a couple of seconds so that the planet component renders
    await new Promise((r) => setTimeout(r, 3600));

    //Evaluating if result is correct
    expect(screen.queryByTestId("mercury")).toHaveTextContent("8.68 kg");
  });

  test("calculates proper weight for Venus", async () => {
    render(<App />);

    //Simulating that we enter a weight of 23kg
    const weightInput = screen.getByTestId("weight-input");
    userEvent.type(weightInput, "23");

    //Simulating that the submit button is being clicked
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Waiting a couple of seconds so that the planet component renders
    await new Promise((r) => setTimeout(r, 3600));

    //Evaluating if result is correct
    expect(screen.queryByTestId("venus")).toHaveTextContent("20.82 kg");
  });

  test("calculates proper weight for The Moon", async () => {
    render(<App />);

    //Simulating that we enter a weight of 23kg
    const weightInput = screen.getByTestId("weight-input");
    userEvent.type(weightInput, "23");

    //Simulating that the submit button is being clicked
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Waiting a couple of seconds so that the planet component renders
    await new Promise((r) => setTimeout(r, 3600));

    //Evaluating if result is correct
    expect(screen.queryByTestId("moon")).toHaveTextContent("3.81 kg");
  });

  test("calculates proper weight for Jupiter", async () => {
    render(<App />);

    //Simulating that we enter a weight of 23kg
    const weightInput = screen.getByTestId("weight-input");
    userEvent.type(weightInput, "23");

    //Simulating that the submit button is being clicked
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Waiting a couple of seconds so that the planet component renders
    await new Promise((r) => setTimeout(r, 3600));

    //Evaluating if result is correct
    expect(screen.queryByTestId("jupiter")).toHaveTextContent("58.18 kg");
  });

  test("calculates proper weight for Saturn", async () => {
    render(<App />);

    //Simulating that we enter a weight of 23kg
    const weightInput = screen.getByTestId("weight-input");
    userEvent.type(weightInput, "23");

    //Simulating that the submit button is being clicked
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Waiting a couple of seconds so that the planet component renders
    await new Promise((r) => setTimeout(r, 3600));

    //Evaluating if result is correct
    expect(screen.queryByTestId("saturn")).toHaveTextContent("24.50 kg");
  });

  test("calculates proper weight for Uranus", async () => {
    render(<App />);

    //Simulating that we enter a weight of 23kg
    const weightInput = screen.getByTestId("weight-input");
    userEvent.type(weightInput, "23");

    //Simulating that the submit button is being clicked
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Waiting a couple of seconds so that the planet component renders
    await new Promise((r) => setTimeout(r, 3600));

    //Evaluating if result is correct
    expect(screen.queryByTestId("uranus")).toHaveTextContent("20.39 kg");
  });

  test("calculates proper weight for Neptune", async () => {
    render(<App />);

    //Simulating that we enter a weight of 23kg
    const weightInput = screen.getByTestId("weight-input");
    userEvent.type(weightInput, "23");

    //Simulating that the submit button is being clicked
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Waiting a couple of seconds so that the planet component renders
    await new Promise((r) => setTimeout(r, 3600));

    //Evaluating if result is correct
    expect(screen.queryByTestId("neptune")).toHaveTextContent("25.82 kg");
  });

  test("calculates proper weight for Earth", async () => {
    render(<App />);

    //Simulating that we enter a weight of 23kg
    const weightInput = screen.getByTestId("weight-input");
    userEvent.type(weightInput, "23");

    //Simulating that the submit button is being clicked
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Waiting a couple of seconds so that the planet component renders
    await new Promise((r) => setTimeout(r, 3600));

    //Evaluating if result is correct
    expect(screen.queryByTestId("earth")).toHaveTextContent("23.00 kg");
  });
});

describe("Showing error message if input is not a number", () => {
  test("Error is displayed if input is empty", () => {
    render(<App />);

    //Simulating that the submit button is being clicked
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Checking if the error message is displayed
    const errorElement = screen.getByText('Please, enter a valid number.');
    expect(errorElement).toBeInTheDocument();

  });

  test("Error is displayed if input contain letters", () => {
    render(<App />);

    //Entering 23abc in input
    const weightInput = screen.getByTestId("weight-input");
    userEvent.type(weightInput, "23abc");

    //Simulating that the submit button is being clicked
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Checking if the error message is displayed
    const errorElement = screen.getByText('Please, enter a valid number.');
    expect(errorElement).toBeInTheDocument();

  });

  test("Error is displayed if input contain special characters", () => {
    render(<App />);

    //Entering 23.*/ in input
    const weightInput = screen.getByTestId("weight-input");
    userEvent.type(weightInput, "23.*/");

    //Simulating that the submit button is being clicked
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Checking if the error message is displayed
    const errorElement = screen.getByText('Please, enter a valid number.');
    expect(errorElement).toBeInTheDocument();

  });
});
