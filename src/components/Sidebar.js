import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <aside>
    <h1>Task list</h1>
    <nav>
      <ul>
        <NavLink exact to="/">active</NavLink>
        <NavLink to="/completed">completed</NavLink>
        <NavLink to="/search">search</NavLink>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
