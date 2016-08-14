import React from 'react';

/* eslint  react/prefer-es6-class: "off" */
const Callback = React.createClass({
  componentDidMount() {
    window.setTimeout(opener.SC.connectCallback, 1);
  },

  render() {
    return <div><p>This page should close soon.</p></div>;
  },
});

export default Callback;
