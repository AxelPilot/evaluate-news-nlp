 /**
 * @jest-environment jsdom
 */
import { radioButtonListener } from "../src/client/js/radioButtons";

describe("Testing the radio button toggle functionality", () => {
    test("Testing the radioButtonListener() function", () => {
        expect(radioButtonListener).toBeDefined();
    });
});