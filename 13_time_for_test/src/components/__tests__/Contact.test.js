import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// ** To group multiple test_case together put all in describe() **
describe("Contact us page test case", () => {

    // ** test_case for heading rendered
    test("Should load contact us component", () => {

        render(<Contact />);     // check whether rendered the component

        // *** Querying ***
        const heading = screen.getByRole("heading");

        // *** Asserting ***
        expect(heading).toBeInTheDocument(); // check whether any heading is rendered or not
    });

    // ** test_case for button rendered
    test("Should load button in contact us component", () => {

        render(<Contact />);

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    });

    // ** test_case for a particular text got rendered/not
    test("Should load text in contact component", () => {

        render(<Contact />);

        const text = screen.getByText("Submit"); // check whether "Submit" text is rendered 

        expect(text).toBeInTheDocument();
    });

    // ** test_case for a input box got rendered/not
    test("Should load input name inside contact component", () => {

        render(<Contact />);

        const inputName = screen.getByPlaceholderText("name");

        expect(inputName).toBeInTheDocument();
    });

    // ** test_case for 2 input box got rendered/not
    test("Should load 2 input boxes on contact component", () => {

        render(<Contact />);

        // *** Quering ***
        const inputBoxes = screen.getAllByRole("textbox"); // for "input:, we use "textbox"

        // console.log(inputBoxes); // return a reactElement(object)
        // console.log(inputBoxes.length); // return 2 (2 textbox available)

        // *** Asserting
        expect(inputBoxes.length).toBe(2); // matching length
    });
});


