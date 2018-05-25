import * as React from 'react';
import * as check from '../../lib/check';

interface GetElement {
    (): HTMLElement | null
}
interface Props {
    watchElement: (HTMLElement | null)| GetElement
    label: string
    timeItervalMs?: number

}

interface State {
    clientWidth: number
    clientHeight: number
}

export class ElementSizeChange extends React.Component<Props, State> {
    lastWidth: number = 0
    lastHeight: number = 0
    timeIntervalMs: number = 200
    isRunning: boolean = false;
    watchElement: HTMLElement | null;
    label: string = "";
    _timeOut = -1;

    constructor(props: Props) {
        super(props);
        this.label = props.label || "";
        this.state = {clientWidth: 0, clientHeight: 0};
    }


    componentDidMount() {
        let { watchElement, timeItervalMs } = this.props;
        if (check.isDefined(timeItervalMs)) {
            this.timeIntervalMs = this.timeIntervalMs;
        }
        if (check.isFunction(watchElement)) {
            this.watchElement = (watchElement as GetElement)();
        }
        else {
            this.watchElement = watchElement as HTMLElement;
        }

        if (!this.isRunning) {
            this.isRunning = true;
            this._timeOut = window.setTimeout(this.run, this.timeIntervalMs);
        }
    }

    componentWillUnmount() {
        this.isRunning = false;
        if (this._timeOut >= 0) {
            clearTimeout(this._timeOut);
        }
    }

    run = () => {
        if (!check.isDefined(this.watchElement)) {
            return;
        }
        const {clientHeight, clientWidth} =  this.watchElement as HTMLElement;

        const hasChange = clientHeight != this.lastHeight
                          || clientWidth != this.lastWidth;
        if (hasChange) {
            this.lastHeight = clientHeight;
            this.lastWidth = clientWidth;

            this.setState({
                clientHeight,
                clientWidth
            });
        }
        if (this.isRunning) {
            setTimeout(this.run, this.timeIntervalMs);
        }
    }

    render() {
        const { clientWidth, clientHeight } = this.state;
        if (check.isDefined(clientWidth) && check.isDefined(clientHeight)) {
            return <div>{this.label} size: {clientWidth}px x {clientHeight}px</div>
        }
        else {
            return <div></div>
        }
    }

}