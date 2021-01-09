import React, { useContext, useState } from 'react';
import MainTemplate from 'templates/MainTemplate';
import Header from 'components/Header';
import TaskList from 'components/TaskList';
import Task from 'components/Task';
import { AppContext } from 'context/AppContext';
import Button from 'components/Button';

const SearchPage = () => {
  const { tasks } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');
  const [searchInput, setSearchInput] = useState(false);

  const filtredTasks = tasks.filter((task) => {
    if (searchValue === '') {
      return task;
    }
    if (task.text.toLowerCase().includes(searchValue.toLowerCase())) {
      return task;
    }
    return null;
  }).map((task) => (
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
      <input
        className="searchpage__input"
        style={searchInput ? { transform: 'translateY(22rem)' } : null}
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search ..."
      />
      <TaskList tasks={filtredTasks} />
      <Button
        classname="searchpage__button"
        click={() => setSearchInput((visible) => !visible)}
      >
        <i className="fas fa-search" />
      </Button>
    </MainTemplate>
  );
};

export default SearchPage;
