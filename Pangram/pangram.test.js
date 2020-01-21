let {
    isPangram
} = require('./pangram');

test('basic test', () => {
    expect(isPangram('the quick brown fox jumps over the lazy dog')).toBe(true);
    expect(isPangram('a quick of the enemy will jeopardize gunboats')).toBe(false);
})