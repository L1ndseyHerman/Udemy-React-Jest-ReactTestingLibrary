import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  //  ASYNC!!
  test("renders post if request succedes", async () => {
    //  This is a mock! It pretends to send a fetch() request, but doesn't really!
    window.fetch = jest.fn();
    //  The Promise gets a JSON object or something:
    window.fetch.mockResolvedValueOnce({
      //  This is fake data that you're pretending to return.
      //  Make sure you test data that could actually be in your database!
      //  This ignores the actual fetch() in Async.js so that it never runs.
      //  Esp impt for POST requests, won't actually insert data into your database!
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    //  Something abt this sees if any elements have the "role" of <li>?
    //  This expects only 1 of that element:
    //screen.getByRole
    //  This expects an array of many <li>:
    //  getAllByRole() instantly looks for elements on the screen, but they won't
    //  be there instantly bec they're async tho....
    //const listItemElements = screen.getAllByRole("listitem");
    //  find() methods will re-evaluate the screen a few times until this succeeds:
    //  3rd arg is for the timeout period, default is 1 second,
    //  so if your items still aren't there after 1sec, it would still fail.
    //const listItemElements = screen.findAllByRole("listitem", {}, {});

    //  This still doesn't work, possibly bec this coffee shop WiFi is too slow to fetch in 1s?
    //  LOL, yep it works on my parents' WIFI :)
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
