import * as React from 'react';
export interface MyProps {
    days: number[][]
}
export interface MyState {}

export class MonthDaysGrid extends React.Component<MyProps, MyState> {
    render() {
        let { days } = this.props;
        return days.map((row, i) => {
            return (
            <tr key={i}>
                {row.map((cell, j) => (<td key={j}>{ cell } </td>))}
            </tr>);
        });
    }
}