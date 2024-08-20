const math = require('../math');

test('soma 2 + 3 igual a 5', () => { 
    expect(math.add(2, 3)).toBe(5); 
});

test('soma 3 + 3 igual a 6', () => { 
    expect(math.add(3, 3)).toBe(6); 
});

test('soma 5 + 5 igual a 10', () => { 
    expect(math.add(5, 5)).toBe(10); 
});

test('soma 2.9 + 9.1 igual a 12', () => { 
    expect(math.add(2.9, 9.1)).toBe(12); 
});
