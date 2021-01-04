import React, { useContext } from 'react';
import MainTemplate from 'templates/MainTemplate';
import Header from 'components/Header';
import TaskList from 'components/TaskList';
import Task from 'components/Task';
import { AppContext } from 'context/AppContext';

const SearchPage = () => {
  const { tasks } = useContext(AppContext);
  const allTasks = tasks.map((task) => (
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
        heading="What you looking for?"
        description={`You have total (${tasks.length}) tasks`}
      />
      <TaskList tasks={allTasks} />
    </MainTemplate>
  );
};

export default SearchPage;
