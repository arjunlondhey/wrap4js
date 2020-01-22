const {
    convertIntToRoman
} = require('./intToRoman');

test('basic test', () => {
    expect(convertIntToRoman).toBeDefined();
})

test('converts int 0 to roman 0', () => {
    expect(convertIntToRoman(0)).toBe('0');
});

test('converts negative int -2 to roman 0', () => {
    expect(convertIntToRoman(-2)).toBe('0');
});

test('handles invalid integer values 2a to roman 0', () => {
    expect(convertIntToRoman('-2a')).toBe('0');
});


test('converts int 5 to roman V', () => {
    expect(convertIntToRoman(5)).toBe('V');
});

test('converts int 19 to roman XIX', () => {
    expect(convertIntToRoman(19)).toBe('XIX');
});