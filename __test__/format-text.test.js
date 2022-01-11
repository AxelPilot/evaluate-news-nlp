const formatText = require('../src/server/format-text');

describe("Testing conversion of text from upper case to lower " + 
    "case with a capital first letter", () => {
    test("Testing the formatPolarity() function", () => {
        expect(formatText).toBeDefined();
    });

    test("Testing conversion of text from upper case to lower " + 
        "case with a capital first letter", () => {
        expect(formatText('LOREM IPSUM DOLOR SIT AMET'))
            .toBe('Lorem ipsum dolor sit amet');
    });
});
