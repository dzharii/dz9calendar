import * as React from 'react';
import './App.css';
import {CalendarContainer} from './components/calendar/CalendarContainer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <CalendarContainer />
      </div>
    );
  }
}

export default App;
