import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const paths = [
    {
      to: '/',
      content: 'active',
    },
    {
      to: '/completed',
      content: 'completed',
    },
    {
      to: '/search',
      content: 'search',
    },
  ];

  return (
    <aside className="sidebar">
      <h1 className="sidebar__heading">Task list</h1>
      <nav className="sidebar__navigation">
        <ul>
          {paths.map((link) => (
            <li
              key={link.content}
            >
              <NavLink
                className="sidebar__link"
                to={link.to}
                exact
              >
                {link.content}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
