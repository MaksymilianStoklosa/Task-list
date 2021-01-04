import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from 'context/AppContext';
import Button from 'components/Button';

const TaskForm = ({ toggleForm }) => {
  const { tasks, setTasks } = useContext(AppContext);
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setTasks([...tasks, {
      id: tasks.length,
      text,
      date,
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
        <p>
          Enter your task below
        </p>
        <input
          className="form__input"
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Throw out rubbish..."
        />
        <p>
          Select a date to complete the task
        </p>
        <input
          className="form__input"
          type="date"
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
