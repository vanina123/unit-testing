const {add ,subtract , multiply, divide} = require('./task3.js')

describe('Arithmetics', () => {
    describe('add', () => {
        it('Add two numbers', () => {
            expect(add(9, 3)).toEqual(12);
        } )
    });

    describe('subtract', () => {
        it('Subtract two numbers', () => {
            expect(subtract(4, 3)).toEqual(1);
        })
    })

    describe('multiply', () => {
        it('Multiply two numbers', () => {
            expect(multiply(4, 3)).toEqual(12);
        })
    })

    describe('divide', () => {
        it('divide two numbers', () => {
            expect(divide(4, 2)).toEqual(2);
        })
    })
})