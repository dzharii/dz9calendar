import * as React from 'react';
import {SquareCell, SquareRow} from './CalendarPresentation';

export interface MyProps {
    days: number[][],
    today: number
}
export interface MyState {}

export class MonthDaysGrid extends React.Component<MyProps, MyState> {
    render() {
        let { days } = this.props;

        return days.map((row, i) => {
            return (
            <SquareRow key={i}>
                {row.map((cell, j) => (<SquareCell key={j} className="numbers">{cell}</SquareCell>))}
            </SquareRow>);
        });
    }
}