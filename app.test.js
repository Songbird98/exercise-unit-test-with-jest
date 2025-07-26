const { sum, fromDollarToYen, fromEuroToDollar, fromYanToPound } = require('./app.js');

test('adds 7 + 3 to equal 10', () => {
    expect(sum(7, 3)).toBe(10);
});

test('convert 1 dollar to yen', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(147.72);
});

test('convert 3 euro to dollars', () => {
    expect(fromEuroToDollar(3)).toBeCloseTo(3.51); // 3 * 1.17
});

test('convert 200 yen to pounds', () => {
    expect(fromYanToPound(200)).toBeCloseTo(1.0); // 200 * 0.005
});