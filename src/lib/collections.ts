import * as check from './check';

export class CyclicIterator {
    current: number;
    constructor(public begin: number, public end: number, startValue?: number) {
        if (check.isUndefinedOrNull(begin)) throw new Error("begin is not defined");
        if (check.isUndefinedOrNull(end)) throw new Error("end is not defined");
        if (begin > end) throw new Error("begin value cannot be greater than end value");

        if (check.isUndefinedOrNull(startValue)) {
            this.current = begin;
        }
        else {
            let startFrom = <number>startValue;
            let inRange = startFrom >= begin && startFrom <= end;
            if (!inRange) throw new Error("startValue value is outside of [begin .. end] range");
            this.current = startFrom;
        }
    }

    next(): number {
        let result = this.current;
        this.current = (this.current === this.end)
                        ? this.begin
                        : this.current + 1;
        return result;
    }
}