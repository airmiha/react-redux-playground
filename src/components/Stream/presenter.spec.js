import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Stream from './presenter';

const tracks = [{ origin: { title: 'Track 1' } }, { origin: { title: 'Track 2' } }];

describe('<Stream />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Stream tracks={tracks} />);
  });

  it('has ', () => {
    const trackNodes = wrapper.find('.track span');
    expect(trackNodes).to.have.length(2);
    const trackTitles = trackNodes.map(node => node.text());
    const expectedTrackTitles = tracks.map(track => track.origin.title);
    expect(trackTitles).to.eql(expectedTrackTitles);
  });
});
