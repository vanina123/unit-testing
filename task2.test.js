const reverseString = require('./task2.js')

describe("reverseString", () => {
    it("Reverse the string", () => {
        const string = 'Larissa'
        expect(reverseString(string)).toEqual('assiraL');
    })
})
