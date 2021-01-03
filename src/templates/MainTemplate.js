import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/Sidebar';

const MainTemplate = ({ children }) => (
  <div className="maintemplate">
    <Sidebar />
    <div className="maintemplate__child">
      {children}
    </div>
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
