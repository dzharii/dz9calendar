export const WeekDayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
export const MonthName = ['January','February','March','April','May','June','July','August','September','October','November','December'];


export function lastDayOfMonth(year:number, month: number): number {
    _assertValidYearAndMonth(year, month);
    return new Date(year, month, 0).getDate();
}

export function allMonthDays(year:number, month: number): number[] {
    _assertValidYearAndMonth(year, month);
    let result: number[] = [];
    const lastDay = lastDayOfMonth(year, month);
    for (let i = 1; i <= lastDay; i++) {
        result.push(i);
    }
    return result;
}

/*
export function allMonthDaysByWeek(year:number, month: number): number[][] {
    _assertValidYearAndMonth(year, month);
    let result: number[][] = [];

    const lastMonthDay = lastDayOfMonth(year, month);
    const firstDayDate = new Date(year, month, 1);


    for (let i = 0; i < lastMonthDay; i++) {

    }

    const DAYS_IN_A
    var day = days[ now.getDay() ];
    var month = months[ now.getMonth() ];

}
*/

export function mkWeekDaysIterator() {

}

export function _assertValidYearAndMonth(year:number, month: number) {
    if (!year) throw new Error("year is not defined");
    if (!month) throw new Error("month is not defined");
 }