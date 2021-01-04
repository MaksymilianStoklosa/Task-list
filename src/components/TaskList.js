import React from 'react';
import PropTypes from 'prop-types';

const TaskList = ({ tasks }) => (
  <div className="task-list">
    {tasks}
  </div>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default TaskList;
