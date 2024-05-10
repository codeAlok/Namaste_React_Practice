// **** test code file ****

import { sum } from "../Sum";

test("Sum function should calculate the sum of two numbers", ()=> {

    const result = sum(3,4);

    // assertion (expected result must included)
    expect(result).toBe(5);

});