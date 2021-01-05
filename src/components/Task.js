import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from 'context/AppContext';
import Button from 'components/Button';

const Task = ({
  id,
  text,
  date,
  priority,
  active,
}) => {
  const { tasks, setTasks } = useContext(AppContext);

  const handleChangeStatus = (number) => {
    const handleTasks = Array.from(tasks);
    handleTasks.forEach((task) => {
      if (task.id === number) {
        task.active = !task.active;
      }
      setTasks(handleTasks);
    });
  };

  const handleRemove = (number) => {
    let handleTasks = [...tasks];
    handleTasks = handleTasks.filter((task) => task.id !== number);
    setTasks(handleTasks);
  };

  const important = priority && 'important';
  const inActive = !active && 'inactive';

  return (
    <div
      className="task"
    >
      <h2 className={`task__heading ${important} ${inActive}`}>
        {`Task ${id + 1}`}
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
