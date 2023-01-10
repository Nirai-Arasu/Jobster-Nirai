import React from 'react';
import { NavLink } from 'react-router-dom';
import links from '../utils/link';

const Navlinks = ({ toggle }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.path}
            onClick={toggle}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            end
          >
            <span className="icon">{link.icon}</span>
            {link.text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navlinks;
