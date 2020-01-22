const {
    filterArrayWithoutQueryElements
} = require('./without');

test('basic test', () => {
    expect(filterArrayWithoutQueryElements).toBeDefined();
})

test('filter [1,2] elements from input', () => {
    expect(filterArrayWithoutQueryElements([1, 2], [1, 2, 1, 4, 5])).toStrictEqual([4, 5]);
});


describe('exception test', () => {
    it('should throw an error', () => {
        expect(filterArrayWithoutQueryElements('a', [0, 1, 2])).toThrow()
    })
})

test('filter [1,2] elements from input', () => {
    expect(filterArrayWithoutQueryElements([1, 2], [1, 2, 1, 3, 4])).toStrictEqual([3, 4]);
});