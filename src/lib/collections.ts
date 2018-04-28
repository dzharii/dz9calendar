export class CyclicIterator {
    current: number;
    constructor(public begin: number, public end: number) {
        if (typeof begin === 'undefined' || begin === null) throw new Error("begin is not defined");
        if (typeof end   === 'undefined' || end === null) throw new Error("end is not defined");
        if (begin > end) throw new Error("begin value cannot be greater than end value");

        this.current = begin;
    }

    next(): number {
        let result = this.current;
        this.current = (this.current === this.end)
                        ? this.begin
                        : this.current + 1;
        return result;
    }
}