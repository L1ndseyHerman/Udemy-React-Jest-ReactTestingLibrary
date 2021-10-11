//  This is technically an Integration Test now, bec tests the mult
//  Output.js inside of Greeting.js!

import { render, screen } from "@testing-library/react";
//  For the button click:
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

//  This is for testing suites (groups): Like test(), it doesn't require any imports.
//  1st arg is a description. This one says all the tests in the suite are for <Greeting />:

//  2nd arg is 1+ tests. This is 1 suite with 1 test,
//  but can have mult suites and mult tests per suite.
describe("Greeting component", () => {
  //  Don't need to import any library for test(), it's just there already.
  test("renders Hello World as a text", () => {
    //  Arrange:
    //  The render takes JSX code:
    render(<Greeting />);

    //  Act:
    //  Nothing in this test.

    //  Assert:
    //  The text here could be a RegEx or a hardcoded String:
    //  2nd param is for an exact match or false if casing doesn't matter to u.
    //screen.getByText('Hello World', {exact: false});
    //    This is of type DOMNode:
    const helloWorldElement = screen.getByText("Hello World!");
    //    Takes whatever, including DOMNodes:
    //    For a negation:
    //expect(helloWorldElement).not.toBeInTheDocument();
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    //    Arrange:
    render(<Greeting />);

    //  Act:
    //  This only works if there's only one button in the component.
    //  Remember the classnames u had to add just for unit tests?
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //  Assert:
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    //    Arrange:
    render(<Greeting />);

    //  Act:
    //  This only works if there's only one button in the component.
    //  Remember the classnames u had to add just for unit tests?
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //  Assert:
    //  Says to use queryByText() instead of getByText():
    //  Returns null if it's not found, so that's why expecting it toBeNull();
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
