import "./Calendar.css";
import * as React from 'react';
import { WeekDaysHeader } from './WeekDaysHeader';
import { MonthDaysGrid } from './MonthDaysGrid';
import * as date from '../../lib/date';


export interface MyProps { }
export interface MyState { }

export class CalendarContainer extends React.Component<MyProps, MyState> {
    render() {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth() + 1;

        let days = date.allMonthDaysByWeek(currentYear, currentMonth);
        let weekDays = date.getWeekDayNames();
        let monthName = date.getMonthName(currentMonth);

        let todayDate = currentDate.getDate();

        return (

            <div>
                <h1>{monthName}</h1>
                <div className="grid">
                    <WeekDaysHeader weekDayList={weekDays} />
                    <MonthDaysGrid days={days} today={todayDate} />
                </div>
            </div>
        );
    }
}