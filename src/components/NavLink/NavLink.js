import React from 'react';
import { Link } from 'react-router';

import styles from './NavLink.css';

/* eslint  react/prefer-es6-class: "off", react/prefer-stateless-function: "off"*/

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName={styles.active} />;
  },
});
