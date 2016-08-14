import React, { PropTypes } from 'react';
import Stream from './Stream/index';

/* eslint  react/prefer-es6-class: "off" */
const Soundcloud = React.createClass({
  propTypes: {
    children: PropTypes.object,
  },

  getInitialState() {
    return { tracks: [] };
  },

  render() {
    return (
      <Stream />
    );
  },
});

export default Soundcloud;
