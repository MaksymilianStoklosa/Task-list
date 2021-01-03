import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ heading, description }) => (
  <header className="header">
    <h1 className="header__heading">{heading}</h1>
    <h4 className="header__description">{description}</h4>
  </header>
);

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header;
