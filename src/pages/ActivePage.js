import React, { useState } from 'react';
import MainTemplate from 'templates/MainTemplate';
import Header from 'components/Header';
import TaskForm from 'components/TaskForm';
import Task from 'components/Task';
import Button from 'components/Button';

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
      {!openForm ? (
        <Button
          click={toggleForm}
          classname="open-form-button"
        >
          <i className="fas fa-plus" />
        </Button>
      ) : null}
    </MainTemplate>
  );
};

export default ActivePage;
