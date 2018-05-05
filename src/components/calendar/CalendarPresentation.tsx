import * as React from 'react';
import * as check from '../../lib/check';

interface SquareCellProps {
    className?: string;
}

export class SquareCell extends React.Component<SquareCellProps> {
    render() {
        let { children, className } = this.props;

        let contentClass = ["table-cell", className]
                           .filter(check.isDefined)
                           .join(" ");

        return (<div className="square">
            <div className="content">
                <div className="table">
                    <div className={contentClass}>
                        {children}
                    </div>
                </div>
            </div>
        </div>)
    }
}

export class SquareRow extends React.Component {
    render() {
        let { children } = this.props;
        return (<div className="row">{children}</div>)
    }
}


