const mcPostData = require('../src/server/mc-post-data');

describe("Testing the Meaning Cloud post route functionality", () => {
    test("Testing the mcPostData() function", () => {
        expect(mcPostData).toBeDefined();
    });
});
