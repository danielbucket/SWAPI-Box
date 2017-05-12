import React              from 'react';
import ReactDOM           from 'react-dom';
import CategorySelect     from './CategorySelect';
import { mount, shallow } from 'enzyme';

describe('Header test', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CategorySelect />, div);
  });

  it('should have a class', () => {
    const wrapper = mount(<CategorySelect/>)
    expect(wrapper.hasClass('category-select')).toEqual(true)
  })

  it('should contain buttons', () => {
    const wrapper = mount(<CategorySelect/>)
    expect(wrapper.find('button').length).toEqual(3)
  })

})
