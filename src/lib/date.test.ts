import * as date from './date';

var undefinedNumberHack: number;

describe("lastDayOfMonth",  () => {
    it("should return 28 for February 2018 as a non leap-year", () => {
        expect(date.lastDayOfMonth(2018, 2)).toBe(28);
    });

    it("should return 29 for February 2020 as a leap-year", () => {
        expect(date.lastDayOfMonth(2020, 2)).toBe(29);
    });
});

describe("allMonthDays", () => {
    it("should return a list of days for the given month", () => {
        let allDays = date.allMonthDays(2018, 4);
        expect(allDays.length).toBe(30);
        expect(allDays[0]).toBe(1);
        expect(allDays[allDays.length - 1]).toBe(30);
    })
});

describe("_assertValidYearAndMonth", () => {
    it("should throw an exception when year is undefined", () => {
        try {
            date._assertValidYearAndMonth(undefinedNumberHack, 10);
        }
        catch (e) {
            expect(e.message).toBe("year is not defined");
        }
    });

    it("should throw an exception when month is undefined", () => {
        try {
            date._assertValidYearAndMonth(2018, undefinedNumberHack);
        }
        catch (e) {
            expect(e.message).toBe("month is not defined");
        }
    });
});