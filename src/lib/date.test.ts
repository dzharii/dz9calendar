import * as date from './date';

var undefinedNumberHack: number;

describe('lastDayOfMonth',  () => {
    it('should return 28 for February 2018 as a non leap-year', () => {
        expect(date.lastDayOfMonth(2018, 2)).toBe(28);
    });

    it('should return 29 for February 2020 as a leap-year', () => {
        expect(date.lastDayOfMonth(2020, 2)).toBe(29);
    });
});

describe('allMonthDays', () => {
    it('should return a list of days for the given month', () => {
        let allDays = date.allMonthDays(2018, 4);
        expect(allDays.length).toBe(30);
        expect(allDays[0]).toBe(1);
        expect(allDays[allDays.length - 1]).toBe(30);
    })
});

describe('allMonthDaysByWeek', () => {
    it('should should return a valid array for April 2018', () => {
        let actual = date.allMonthDaysByWeek(2018, 4);
        expect(actual.length).toBe(5);
        expect(actual[0][0]).toBe(1);
        expect(actual[4][1]).toBe(30);
    });

    it('should should return a valid array for February 2018', () => {
        let actual = date.allMonthDaysByWeek(2018, 2);
        expect(actual.length).toBe(5);
        expect(actual[0][0]).toBe(null);
        expect(actual[0][4]).toBe(1);
        expect(actual[4][3]).toBe(28);
    });
});

describe('_assertValidYearAndMonth', () => {
    it('should throw an exception when year is undefined', () => {
        try {
            date._assertValidYearAndMonth(undefinedNumberHack, 10);
        }
        catch (e) {
            expect(e.message).toBe('year is not defined');
        }
    });

    it('should throw an exception when month is undefined', () => {
        try {
            date._assertValidYearAndMonth(2018, undefinedNumberHack);
        }
        catch (e) {
            expect(e.message).toBe('month is not defined');
        }
    });
});

describe('getWeekDayNames', () => {
    it('should return 7 week day names', () => {
        expect(date.getWeekDayNames().length).toBe(7);
    });
});

describe('getMonthName', () => {
    it('should return valid month by index', () => {
        expect(date.getMonthName(1)).toBe('January');
        expect(date.getMonthName(12)).toBe('December');
    });

    it('should throw if argumet is incorrect', () => {
        expect(() => date.getMonthName(0)).toThrow('month value is out of range of [1 .. 12]');
    });
});