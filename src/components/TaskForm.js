import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from 'context/AppContext';
import Button from 'components/Button';

const TaskForm = ({ toggleForm }) => {
  const { tasks, setTasks } = useContext(AppContext);
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState(false);

  const currentDate = new Date().toISOString().slice(0, 10);
  const newDate = date.split('-').reverse().join('.');

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setTasks([...tasks, {
      id: tasks.length,
      text,
      date: newDate,
      priority,
      active: true,
    }]);
    toggleForm();
  };

  return (
    <div className="form">
      <h2 className="form__heading">What would you like to add?</h2>
      <form
        className="form__fields"
        onSubmit={handleSubmitForm}
      >
        <label htmlFor="text">
          Enter your task below
        </label>
        <input
          className="form__input"
          id="text"
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Throw out rubbish..."
        />
        <label htmlFor="date">
          Select a date to complete the task
        </label>
        <input
          className="form__input"
          id="date"
          type="date"
          min={currentDate}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="checkkbox">
          <input
            className="form__checkbox"
            id="checkbox"
            type="checkbox"
            onChange={() => setPriority(!priority)}
            checked={priority}
          />
          Priority
        </label>
        <Button classname="form__button--submit">Submit</Button>
      </form>
      <Button
        classname="form__button--exit"
        click={toggleForm}
      >
        Cancel
      </Button>
    </div>
  );
};

TaskForm.propTypes = {
  toggleForm: PropTypes.func.isRequired,
};

export default TaskForm;
