import React from 'react';
import Hello from './Hello';

/* eslint  react/prefer-es6-class: "off" */
const HelloContainer = React.createClass({
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
      <Hello word={this.state.word} mode={this.state.mode} setMode={this.setMode} setWord={this.setWord} />
    );
  },
});

export default HelloContainer;
