import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <aside className="sidebar">
    <h1 className="sidebar__heading">Task list</h1>
    <nav className="sidebar__navigation">
      <ul>
        <li>
          <NavLink
            className="sidebar__link"
            exact
            to="/"
          >
            active
          </NavLink>
        </li>
        <li>
          <NavLink
            className="sidebar__link"
            to="/completed"
          >
            completed
          </NavLink>
        </li>
        <li>
          <NavLink
            className="sidebar__link"
            to="/search"
          >
            search
          </NavLink>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
