const formatPolarity = require('../src/server/format-polarity');

describe("Testing polarity interpretation functionality", () => {
    test("Testing the formatPolarity() function", () => {
        expect(formatPolarity).toBeDefined();
    });

    test("Testing that P+ is Strong Positive", () => {
        expect(formatPolarity('P+')).toBe('Strong Positive');
    });

    test("Testing that P is Positive", () => {
        expect(formatPolarity('P')).toBe('Positive');
    });

    test("Testing that NEU is Neutral", () => {
        expect(formatPolarity('NEU')).toBe('Neutral');
    });

    test("Testing that N is Negative", () => {
        expect(formatPolarity('N')).toBe('Negative');
    });

    test("Testing that N+ is Strong Negative", () => {
        expect(formatPolarity('N+')).toBe('Strong Negative');
    });

    test("Testing that NONE is Without Polarity", () => {
        expect(formatPolarity('NONE')).toBe('Without Polarity');
    });
});
