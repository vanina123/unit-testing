const stringLength = require('./task1.js')

describe("stringLength", () => {
    it("Return number of string character", () => {
        const string = 'Vanina'
        expect(stringLength(string)).toBe(6);
    })

    it("throw error when more than 10", () => {
        const string = 'charater more than 10'
        expect(() => stringLength(string)).toThrow('charater more than 10');
    })

})