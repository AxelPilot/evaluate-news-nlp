const mcPostData = require('../src/server/mc-post-data');

describe("Testing the Meaning Cloud API post route functionality", () => {
    test("Testing the mcPostData() function", () => {
        expect(mcPostData).toBeDefined();
    });

    test("Testing the mcPostData() function", () => {
        expect.assertions(1);
        return mcPostData('txt', 'I love you!').then(data => {
            expect(data.score_tag).toBe('P+');
        });
    });
});
