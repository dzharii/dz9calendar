import {CyclicIterator} from '../lib/collections';


export const WeekDayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
export const MonthName = ['January','February','March','April','May','June','July','August','September','October','November','December'];
export const WeekBeginDay = 0;
export const WeekEndDay = 6;

export function getWeekDayNames(): string[] {
    return WeekDayName.concat();
}

export function getMonthName(month: number): string {
    let monthInRange = month >= 1 && month <= 12;
    if (!monthInRange) throw new Error('month value is out of range of [1 .. 12]');
    let monthIndex = month - 1;
    return MonthName[monthIndex];
}

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


export function allMonthDaysByWeek(year:number, month: number): number[][] {
    _assertValidYearAndMonth(year, month);

    let result: number[][] = [];

    const lastMonthDay = lastDayOfMonth(year, month);
    const firstMonthDayDate = new Date(year, month - 1, 1);
    const firstMonthDayWeekDay = firstMonthDayDate.getDay();
    const weekDayIter = new CyclicIterator(WeekBeginDay, WeekEndDay, firstMonthDayWeekDay);


    let row:(number|null)[] | null = null;
    for (let day = 1; day <= lastMonthDay; day++) {
        if (row === null) {
            row = [null, null, null, null, null, null, null];
        }
        let weekDayIndex = weekDayIter.next();
        row[weekDayIndex] = day;
        if (weekDayIndex === WeekEndDay) {
            result.push(<number[]>row);
            row = null;
        }
    }
    if (row !== null) {
        result.push(<number[]>row);
    }
    return result;
}



export function _assertValidYearAndMonth(year:number, month: number) {
    if (!year) throw new Error('year is not defined');
    if (!month) throw new Error('month is not defined');
 }