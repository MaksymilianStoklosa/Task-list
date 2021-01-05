import React, { useContext } from 'react';
import MainTemplate from 'templates/MainTemplate';
import Header from 'components/Header';
import TaskList from 'components/TaskList';
import Task from 'components/Task';
import { AppContext } from 'context/AppContext';

const CompletedPage = () => {
  const { tasks } = useContext(AppContext);

  const tasksStatus = tasks.filter((task) => !task.active);

  const completedTasks = tasksStatus.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      text={task.text}
      date={task.date}
      priority={task.priority}
      active={task.active}
    />
  ));

  return (
    <MainTemplate>
      <Header
        heading="Completed tasks list"
        description={`You completed (${completedTasks.length}) tasks`}
      />
      <TaskList tasks={completedTasks} />
    </MainTemplate>
  );
};

export default CompletedPage;
