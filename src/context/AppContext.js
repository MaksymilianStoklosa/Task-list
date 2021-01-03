import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'Hello',
      date: '12.01.2021',
      priority: false,
      active: false,
    },
  ]);

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
