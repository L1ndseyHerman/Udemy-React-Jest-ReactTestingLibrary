import { render, screen } from "@testing-library/react";
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
});
