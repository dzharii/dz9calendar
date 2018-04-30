import {CyclicIterator} from './collections';

var undefinedNumber: number;
describe("CyclicIterator", () => {
    it("should throw when input parameters are invalid", ()=> {
        expect(() => new CyclicIterator(undefinedNumber, 3))
              .toThrow("begin is not defined");
        expect(() => new CyclicIterator(3, undefinedNumber))
              .toThrow("end is not defined");
        expect(() => new CyclicIterator(5, 2))
              .toThrow("begin value cannot be greater than end value");
        expect(() => new CyclicIterator(5, 10, 1))
              .toThrow("startValue value is outside of [begin .. end] range");
        expect(() => new CyclicIterator(5, 10, 15))
              .toThrow("startValue value is outside of [begin .. end] range");
    });

    describe("next()", () => {
        it("should return all elements", ()=> {
            let subj = new CyclicIterator(0, 3);
            expect(subj.next()).toBe(0);
            expect(subj.next()).toBe(1);
            expect(subj.next()).toBe(2);
            expect(subj.next()).toBe(3);
        });

        it("should cycle back to first element", ()=> {
            let subj = new CyclicIterator(0, 3);
            expect(subj.next()).toBe(0);
            expect(subj.next()).toBe(1);
            expect(subj.next()).toBe(2);
            expect(subj.next()).toBe(3);
            expect(subj.next()).toBe(0);
        });

        it("should cycle back with non-zero begin element", ()=> {
            let subj = new CyclicIterator(10, 13);
            expect(subj.next()).toBe(10);
            expect(subj.next()).toBe(11);
            expect(subj.next()).toBe(12);
            expect(subj.next()).toBe(13);
            expect(subj.next()).toBe(10);
        });

        it("should return same value if range has one item", ()=> {
            let subj = new CyclicIterator(10, 10);
            expect(subj.next()).toBe(10);
            expect(subj.next()).toBe(10);
            expect(subj.next()).toBe(10);
            expect(subj.next()).toBe(10);
        });

        it('should start from startValue if provided', () => {
            let subj = new CyclicIterator(5, 10, 8);
            expect(subj.next()).toBe(8);
        });
    });
});