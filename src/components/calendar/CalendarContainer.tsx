import "./Calendar.css";
import * as React from 'react';
import { WeekDaysHeader } from './WeekDaysHeader';
import { MonthDaysGrid } from './MonthDaysGrid';

export interface MyProps {}
export interface MyState {}

export class CalendarContainer extends React.Component<MyProps, MyState> {
    render() {
        let days = [
            [1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19, 20, 21],
            [22, 23, 24, 25, 26, 27, 28],
            [29, 30],
        ];

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