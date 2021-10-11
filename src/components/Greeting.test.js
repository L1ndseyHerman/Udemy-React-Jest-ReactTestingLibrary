import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

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

//  Used to be App.test.js:
//  This uses React Testing Library as well as Jest!
//import { render, screen } from "@testing-library/react";
//import App from "./App";

//  The string in the test is just the name of the test, can be whatever u want.
/*test("renders learn react link", () => {
  //  Renders the <App /> component via React Testing Library
  render(<App />);
  //  This acesses 1 element on the virtual screen, also uses Regex w case-insensitive (i):
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
