const { counter } = require('./counter');
test('basic test', () => {
    expect(counter).toBeDefined();
})

test('get next counter value', () => {
    const newCounter = counter();
    expect(newCounter()).toBe(1);
    expect(newCounter()).toBe(2);
    expect(newCounter()).toBe(3);
    expect(newCounter()).toBe(4);
});