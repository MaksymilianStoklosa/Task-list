import React, { useState } from 'react';
import MainTemplate from 'templates/MainTemplate';
import Header from 'components/Header';
import TaskForm from 'components/TaskForm';
import ToggleButton from 'components/ToggleButton';

const ActivePage = () => {
  const [openForm, setOpenForm] = useState(false);

  const toggleForm = () => {
    setOpenForm((form) => !form);
  };

  return (
    <MainTemplate>
      <Header
        heading="What will you do today?"
        description="You have (0) active tasks"
      />
      {openForm ? <TaskForm toggleForm={toggleForm} /> : null}
      {!openForm ? <ToggleButton toggleForm={toggleForm} /> : null}
    </MainTemplate>
  );
};

export default ActivePage;
