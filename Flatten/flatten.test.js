const {
    flatten
} = require('./flatten');

test('basic test', () => {
    expect(flatten).toBeDefined();
})

test('flaten array with depth 1', () => {
    expect(flatten([1, 2, [3, 4, [5, 6]]], 1)).toStrictEqual([1, 2, 3, 4, [5, 6]]);
});


test('flaten array with depth 2', () => {
    expect(flatten([1, 2, [3, 4, [5, 6]]], 2)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});