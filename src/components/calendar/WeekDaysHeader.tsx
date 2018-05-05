import * as React from 'react';
import {SquareCell, SquareRow} from './CalendarPresentation';

export interface MyProps {
    weekDayList: string[]
}
export interface MyState {}

export class WeekDaysHeader extends React.Component<MyProps, MyState> {
    render() {
        let {weekDayList} = this.props;
        return (<SquareRow>
        {
            weekDayList.map((wd, i) => (<SquareCell key={i}>{wd}</SquareCell>))
        }
        </SquareRow>);
    }
}