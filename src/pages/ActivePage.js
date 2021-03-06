import React, { useState, useContext } from 'react';
import MainTemplate from 'templates/MainTemplate';
import Header from 'components/Header';
import TaskForm from 'components/TaskForm';
import Button from 'components/Button';
import TaskList from 'components/TaskList';
import Task from 'components/Task';
import { AppContext } from 'context/AppContext';

const ActivePage = () => {
  const { tasks } = useContext(AppContext);
  const [openForm, setOpenForm] = useState(false);

  const tasksStatus = tasks.filter((task) => task.active);

  tasksStatus.sort((a, b) => {
    if (a.priority) {
      a = 1;
    } else {
      a = -1;
    }
    if (b.priority) {
      b = 1;
    } else {
      b = -1;
    }
    return b - a;
  });

  const activeTasks = tasksStatus.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      text={task.text}
      date={task.date}
      priority={task.priority}
      active={task.active}
    />
  ));

  const toggleForm = () => {
    setOpenForm((visible) => !visible);
  };

  return (
    <MainTemplate>
      <Header
        heading="What will you do today?"
        description={`You have (${activeTasks.length}) active tasks`}
      />
      {openForm ? <TaskForm toggleForm={toggleForm} /> : null}
      {!openForm ? (
        <Button
          click={toggleForm}
          classname="activepage__button"
        >
          <i className="fas fa-plus" />
        </Button>
      ) : null}
      <TaskList tasks={activeTasks} />
    </MainTemplate>
  );
};

export default ActivePage;
