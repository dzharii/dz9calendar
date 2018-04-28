export function lastDayOfMonth(year:number, month: number): number {
    _assertValidYearAndMonth(year, month);
    return new Date(year, month, 0).getDate();
}

export function allMonthDays(year:number, month: number): number[] {
    _assertValidYearAndMonth(year, month);
    let result: number[] = [];
    let lastDay = lastDayOfMonth(year, month);
    for (let i = 1; i <= lastDay; i++) {
        result.push(i);
    }
    return result;
}

 export function _assertValidYearAndMonth(year:number, month: number) {
    if (!year) throw new Error("year is not defined");
    if (!month) throw new Error("month is not defined");
 }