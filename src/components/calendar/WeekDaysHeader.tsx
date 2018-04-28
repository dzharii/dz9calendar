import * as React from 'react';
export interface MyProps {
    weekDayList: string[]
}
export interface MyState {}

export class WeekDaysHeader extends React.Component<MyProps, MyState> {
    render() {
        let {weekDayList} = this.props;
        return (<tr>
        {
            weekDayList.map((wd, i) => (<th key={i}>{wd}</th>))
        }
        </tr>);
    }
}