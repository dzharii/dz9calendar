import * as check from './check';

var undefVal: number;
var nullVal = null;
describe('check.isUndefinedOrNull', () => {
    it('should return true when argument is undefined or null', () => {
        expect(check.isUndefinedOrNull(undefVal)).toBe(true);
        expect(check.isUndefinedOrNull(null)).toBe(true);
    });
    it('should return false when argument is defined', () => {
        expect(check.isUndefinedOrNull(10)).toBe(false);
        expect(check.isUndefinedOrNull("")).toBe(false);
        expect(check.isUndefinedOrNull("aaa")).toBe(false);
        expect(check.isUndefinedOrNull({})).toBe(false);
    });
});

