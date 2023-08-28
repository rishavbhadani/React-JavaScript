import React, { useState } from 'react';

const AddWeekForm = ({ addWeek }) => {
  const [showForm, setShowForm] = useState(false);
  const [weekNumber, setWeekNumber] = useState('');

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get the week number from the form input
    const newWeekNumber = parseInt(weekNumber);
    
    // Check if the week number is valid and not already used
    if (newWeekNumber && !isNaN(newWeekNumber)) {
      // Create a new week object
      const newWeek = {
        id: newWeekNumber,
        week_number: newWeekNumber,
        modules: [] // Adjust this as needed
      };
      
      // Add the new week to the state using the addWeek prop
      addWeek(newWeek);
      
      // Reset form and hide it
      setWeekNumber('');
      setShowForm(false);
    }
  };

  return (
    <div className="add-week-form">
      <button className="add-week-button" onClick={handleToggleForm}>
        Add a week
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="weekNumber">Week Number:</label>
          <input
            type="number"
            id="weekNumber"
            value={weekNumber}
            onChange={(e) => setWeekNumber(e.target.value)}
            min="1"
            required
          />
          <button type="submit">Add Week</button>
        </form>
      )}
    </div>
  );
};

export default AddWeekForm;
