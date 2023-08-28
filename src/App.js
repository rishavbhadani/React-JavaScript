import React, { useState } from 'react';
import AddWeekForm from './AddWeekForm';
import './App.css';

function App() {
  const [weeks, setWeeks] = useState([
    // Initial week data here
  ]);
  const [currentWeek, setCurrentWeek] = useState(null);

  const displayWeekDetails = (week) => {
    setCurrentWeek(week);
  };

  const addWeek = (newWeek) => {
    setWeeks([...weeks, newWeek]);
  };

  return (
    <div className="App">
      <header>
        <div className="welcome-message">Welcome User</div>
        <nav>
          <ul className="week-nav">
            {weeks.map((week) => (
              <li
                key={week.id}
                onClick={() => displayWeekDetails(week)}
                className="week"
              >
                Week {week.week_number}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="container">
        <div className="week-details">
          {currentWeek ? `Week ${currentWeek.week_number} Details` : ''}
        </div>
        <div className="week-description">
          {currentWeek ? `Week ${currentWeek.week_number} Description` : ''}
        </div>
      </div>
      <div className="side-box">
        <div className="week-side-box">
        </div>
        <div className="week-side-box">
        </div>
      </div>
      <AddWeekForm addWeek={addWeek} />
    </div>
  );
}

export default App;
