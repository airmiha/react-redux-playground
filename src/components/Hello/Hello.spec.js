import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Hello from './Hello';

const actions = {
  setMode: sinon.spy(),
  setWord: sinon.spy(),
};

describe('<Hello />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Hello {...actions} />);
  });

  it('has a paragraph with an initial salutation and hidden input', () => {
    expect(wrapper.find('p').text()).to.equal('Hello, friend (click here to change name)!');
    expect(wrapper.find('input')).to.have.style('display', 'none');
  });

  it('should call setMode when salutation is clicked', () => {
    wrapper.find('span').simulate('click');
    expect(actions.setMode).to.have.been.calledWith('edit');
  });

  it('should hide salutation and show input when in edit mode', () => {
    wrapper = shallow(<Hello {...actions} mode={'edit'} />);
    expect(wrapper.find('span')).to.have.style('display', 'none');
    expect(wrapper.find('input')).to.have.style('display', 'inline');
  });

  it('should call setWord with text in the input on Enter', () => {
    wrapper = shallow(<Hello {...actions} mode={'edit'} />);
    const input = wrapper.find('input');
    const newValue = 'Value';
    input.simulate('keyUp', { key: 'A' });
    expect(actions.setWord.callCount).to.equal(0);
    input.simulate('keyUp', { key: 'Enter', target: { value: newValue } });
    expect(actions.setWord).to.have.been.calledWith(newValue);
  });

  it('should show salutation word from props when in display mode', () => {
    const word = 'Dear friend';
    wrapper = shallow(<Hello {...actions} word={word} />);
    expect(wrapper.find('span').text()).to.equal(`${word}!`);
  });
});
