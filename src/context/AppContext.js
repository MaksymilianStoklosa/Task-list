import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks') || '[]');
  const [tasks, setTasks] = useState(tasksFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <AppContext.Provider value={{
      tasks,
      setTasks,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
