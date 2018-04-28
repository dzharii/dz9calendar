import * as date from './date';

it("should return 31 for January 2018", () => {
    expect(date.lastDayOfMonth(2018, 1)).toBe(31);
});