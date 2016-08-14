import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { CLIENT_ID } from '../../constants/auth';

/* eslint  react/prefer-es6-class: "off" */
const Stream = React.createClass({
  propTypes: {
    user: PropTypes.object,
    tracks: PropTypes.array,
    activeTrack: PropTypes.object,
    onAuth: PropTypes.func,
    onPlay: PropTypes.func,
  },

  componentDidUpdate() {
    const audioElement = ReactDOM.findDOMNode(this.refs.audio);

    if (!audioElement) {
      return;
    }

    const { activeTrack } = this.props;

    if (activeTrack) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  },

  render() {
    const { user, tracks = [], activeTrack, onAuth, onPlay } = this.props;

    return (
      <div>
        <div>
          {
            user && <div>{user.username}</div> || <button onClick={onAuth} type="button">Login</button>
          }
        </div>
        <br />
        {
          tracks.map((track, index) =>
            <div className="track" key={index}>
              <span>{(track.origin || {}).title}</span>
              <button type="button" onClick={() => onPlay(track)}>Play</button>
            </div>
          )
        }
        {
          activeTrack ?
            <audio id="audio" ref="audio" src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`}></audio> :
            null
        }
      </div>
    );
  },
});

export default Stream;
