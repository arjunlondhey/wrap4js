const {
    sumFibs
} = require('./sumFibs');

test('basic test', () => {
    expect(sumFibs).toBeDefined();
})

test('Fibs sum of first 10 element is 10', () => {
    expect(sumFibs(10)).toStrictEqual(10);
});


test('Fibs sum of first 20 element is 23', () => {
    expect(sumFibs(20)).toStrictEqual(23);
});