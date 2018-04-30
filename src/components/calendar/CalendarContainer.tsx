import "./Calendar.css";
import * as React from 'react';
import { WeekDaysHeader } from './WeekDaysHeader';
import { MonthDaysGrid } from './MonthDaysGrid';
import * as date from '../../lib/date';

export interface MyProps {}
export interface MyState {}

export class CalendarContainer extends React.Component<MyProps, MyState> {
    render() {
        let days = date.allMonthDaysByWeek(2018, 1);

        let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


        return (
        <div>
            <table className="Calendar-Container">
                <thead>
                    <WeekDaysHeader weekDayList={weekDays}/>
                </thead>
                <tbody>
                    <MonthDaysGrid days={days} />
                </tbody>
            </table>
        </div>);
    }

}