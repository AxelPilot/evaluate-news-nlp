 /**
 * @jest-environment jsdom
 */
  import { validURL } from "../src/client/js/validURL";

describe("Testing the RegEx url validation", () => {
    test("Testing the validURL() function", () => {
        expect(validURL).toBeDefined();
    });

    test("Testing the validURL() function", () => {
        expect(validURL("http://www.domain.com/folder/?arg1=one&arg2=two")).toBe(true);
    });

    test("Testing the validURL() function", () => {
        expect(validURL("Hi there. My name is Bob.")).toBe(false);
    });
});