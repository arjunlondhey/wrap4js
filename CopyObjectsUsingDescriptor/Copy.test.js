const { copyObjectsUsingDescriptor } = require('./Copy');


describe('copyObjectsUsingDescriptor', () => {
    test('basic test', () => {
        expect(copyObjectsUsingDescriptor).toBeDefined();
    });
    test('copy the object properties', () => {
        const object1 = copyObjectsUsingDescriptor({ foo1: 'bar', foo2: 'bazz' });
        expect(object1).toBe({ foo1: 'bar', foo2: 'bazz' });
    });
    test('copy the object with non configurable desriptor', () => {
        let object1 = null;
        Object.defineProperty(object1, 'foo', {
            enumerable: true,
            configurable: false,
            writable: false,
            value: 'buzz'
        });
        const object2 = copyObjectsUsingDescriptor(object1);
        expect(object2).toBe({ foo1: 'bar' });
    });
/*     test('returns the default value if known property is accessed', () => {
        const result = copyObjectsUsingDescriptor({ foo: 'bar' }, 'defaultValue');
        expect(result.bazzz).toBe('defaultValue');
    });
 */});