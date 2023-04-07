const capitalize = require('./task4.js')

describe('capitalize', () => {
    it("Capitalize first letter of string", () => {
        expect(capitalize('duala')).toBe('Duala');
    })
})