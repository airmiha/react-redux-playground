import React, { PropTypes } from 'react';
import NavLink from './NavLink/NavLink';

const Repos = ({ children }) => (
  <div>
    <h2>Repos</h2>
    <ul>
      <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
      <li><NavLink to="/repos/facebook/react">React</NavLink></li>
    </ul>
    {children}
  </div>
);

Repos.propTypes = {
  children: PropTypes.array,
};

export default Repos;
