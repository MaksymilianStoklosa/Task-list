import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { taskReducer } from 'reducer/Reducer';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const localStorageData = localStorage.getItem('tasks');
    return localStorageData ? JSON.parse(localStorageData) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <AppContext.Provider value={{
      tasks,
      dispatch,
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
