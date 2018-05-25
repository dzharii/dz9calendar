import * as React from 'react';
import {SquareHeaderCell, SquareRow} from './CalendarPresentation';

export interface MyProps {
    weekDayList: string[]
}
export interface MyState {}

export class WeekDaysHeader extends React.Component<MyProps, MyState> {
    render() {
        let {weekDayList} = this.props;
        return (<SquareRow>
        {
            weekDayList.map((wd, i) => (<SquareHeaderCell key={i} className="weekdays">{wd}</SquareHeaderCell>))
        }
        </SquareRow>);
    }
}