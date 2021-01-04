import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, classname, click }) => (
  <button
    className={`button ${classname}`}
    onClick={click}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  classname: PropTypes.string.isRequired,
  click: PropTypes.func,
};

Button.defualtProps = {
  click: null,
};

export default Button;
