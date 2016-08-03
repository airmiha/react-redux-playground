import React, { PropTypes } from 'react';

const { string, func } = PropTypes;

function Hello({ word = 'friend (click here to change name)', mode = 'display', actions: { setMode, setWord } }) {
  const styles = {
    displayMode: { display: mode === 'display' && 'inline' || 'none' },
    editMode: { display: mode === 'edit' && 'inline' || 'none' },
  };

  const onKeyUp = e => {
    if (e.key !== 'Enter') {
      return;
    }

    setWord(e.target.value);
  };

  return (
    <p>Hello,&nbsp;
      <span style={styles.displayMode} onClick={() => setMode('edit')}>{word}!</span>
      <input style={styles.editMode} onKeyUp={onKeyUp} />
    </p>
  );
}

Hello.propTypes = {
  word: string,
  mode: string,
  actions: PropTypes.shape({
    setWord: func,
    setMode: func,
  }),
};

export default Hello;
