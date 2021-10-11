import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  //  ASYNC!!
  test("renders post if request succedes", async () => {
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
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
