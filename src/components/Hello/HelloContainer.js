import React, { PropTypes } from 'react';
import Hello from './Hello';
import NavLink from '../NavLink/NavLink.js';

/* eslint  react/prefer-es6-class: "off" */
const HelloContainer = React.createClass({
  propTypes: {
    children: PropTypes.object,
  },

  getInitialState() {
    return {};
  },

  setMode(newMode) {
    this.setState({ mode: newMode });
  },

  setWord(newWord) {
    this.setState({ mode: 'display', word: newWord });
  },

  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul>
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/soundcloud">Soundcloud</NavLink></li>
        </ul>
        {this.props.children}
        <Hello word={this.state.word} mode={this.state.mode} setMode={this.setMode} setWord={this.setWord} />
      </div>
    );
  },
});

export default HelloContainer;
