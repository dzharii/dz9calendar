import * as check from './check';

var undefVal: number;

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

describe('isDefined', () => {
    it('returns true when item defined', () => {
        expect(check.isDefined(10)).toBe(true);
        expect(check.isDefined("")).toBe(true);
        expect(check.isDefined("aaa")).toBe(true);
        expect(check.isDefined({})).toBe(true);
    });
});


describe('isFunction', () => {
    it('returns true when item is a function', () => {
        expect(check.isFunction(() => 10)).toBe(true);
        expect(check.isFunction(10)).toBe(false);
        expect(check.isFunction({})).toBe(false);
        expect(check.isFunction(function() {})).toBe(true);
    });
});

