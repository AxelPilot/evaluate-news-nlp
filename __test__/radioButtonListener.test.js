 /**
 * @jest-environment jsdom
 */
import { radioButtonListener } from "../src/client/js/radioButtons";

describe("Testing the radioButtonListener() function", () => {
    test("Testing the radioButtonListener() function", () => {
        expect(radioButtonListener).toBeDefined();
    });
});