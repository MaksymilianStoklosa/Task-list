import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from 'context/AppContext';
import { ACTION } from 'reducer/Reducer';
import Button from 'components/Button';

const Task = ({
  id,
  text,
  date,
  priority,
  active,
}) => {
  const { dispatch } = useContext(AppContext);

  const handleChangeStatus = (taskID) => {
    dispatch({
      type: ACTION.CHANGE_STATUS,
      payload: {
        id: taskID,
      },
    });
  };

  const handleRemove = (taskID) => {
    dispatch({
      type: ACTION.REMOVE_TASK,
      payload: {
        id: taskID,
      },
    });
  };

  const important = priority && 'important';
  const inActive = !active && 'inactive';

  return (
    <div
      className="task"
    >
      <h2 className={`task__heading ${important} ${inActive}`}>
        Let&#39;s do it!
      </h2>
      <p className={`task__text ${inActive}`}>
        {text}
      </p>
      <p className={`task__date ${inActive}`}>
        {`Do before ${date}`}
      </p>
      <div className="task__buttons">
        <Button
          classname="task__button--done"
          click={() => handleChangeStatus(id)}
        >
          {active ? 'Done' : 'Not done'}
        </Button>
        <Button
          classname="task__button--remove"
          click={() => handleRemove(id)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

Task.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  priority: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Task;
