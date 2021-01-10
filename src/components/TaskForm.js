import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from 'context/AppContext';
import Button from 'components/Button';
import { ACTION } from 'reducer/Reducer';

const TaskForm = ({ toggleForm }) => {
  const { dispatch } = useContext(AppContext);
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState(false);
  const [textError, setTextError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const validationForm = () => {
    let inputText = false;
    let inputDate = false;

    if (text.length < 1 && text.indexOf(' ') === -1) {
      setTextError(true);
      inputText = true;
    }

    if (date.length < 10) {
      setDateError(true);
      inputDate = true;
    }
    return {
      inputText,
      inputDate,
    };
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validation = validationForm();
    if (!validation.inputText && !validation.inputDate) {
      dispatch({
        type: ACTION.ADD_TASK,
        payload: {
          text,
          date,
          priority,
        },
      });
      toggleForm();
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    setTextError(false);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setDateError(false);
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
          className={textError ? 'error' : 'form__input'}
          id="text"
          type="text"
          onChange={handleTextChange}
          placeholder="Throw out rubbish..."
        />
        <label htmlFor="date">
          Select date to complete the task
        </label>
        <input
          className={dateError ? 'error' : 'form__input'}
          id="date"
          type="date"
          min={
            new Date().toISOString().slice(0, 10)
          }
          onChange={handleDateChange}
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
