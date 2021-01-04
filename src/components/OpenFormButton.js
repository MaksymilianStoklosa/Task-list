import React from 'react';
import PropTypes from 'prop-types';

const ToggleButton = ({ toggleForm }) => (
  <button
    className="toggle-button"
    onClick={toggleForm}
  >
    <i className="fas fa-plus" />
  </button>
);

ToggleButton.propTypes = {
  toggleForm: PropTypes.func.isRequired,
};

export default ToggleButton;
