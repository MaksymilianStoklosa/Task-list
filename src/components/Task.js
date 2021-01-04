import React, { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import Button from 'components/Button';

const Task = () => {
  const { tasks, setTasks } = useContext(AppContext);

  const handleChangeStatus = (id) => {
    const handleTasks = Array.from(tasks);
    handleTasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
      }
      setTasks(handleTasks);
    });
  };

  const handleRemove = (id) => {
    let handleTasks = [...tasks];
    handleTasks = handleTasks.filter((task) => task.id !== id);
    setTasks(handleTasks);
  };

  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="task"
        >
          <h2 className="task__heading">{`Task ${task.id + 1}`}</h2>
          <p className="task__text">{task.text}</p>
          <p className="task__date">{`Do before ${task.date}`}</p>
          <div className="task__buttons">
            <Button
              classname="task__button--done"
              click={() => handleChangeStatus(task.id)}
            >
              Done
            </Button>
            <Button
              classname="task__button--remove"
              click={() => handleRemove(task.id)}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Task;
