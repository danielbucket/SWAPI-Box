import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount,shallow} from 'enzyme'

describe('App test',()=>{

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('has a class',()=>{
    const wrapper = shallow(<App/>)
    expect(wrapper.is('.App')).toEqual(true)
  })

  it('contains elements and components',()=>{
    const wrapper = mount(<App/>)
    expect(wrapper.find('.left-side-screen').length).toEqual(1)
    expect(wrapper.find('.right-side-screen').length).toEqual(1)
    expect(wrapper.find('.category-container').length).toEqual(1)
    expect(wrapper.find('CategorySelect').length).toEqual(1)
    expect(wrapper.find('CategoryDisplay').length).toEqual(1)
  })

  it('has a default state',()=>{
    const wrapper = mount(<App/>)
    const expected  = { favorites: [],
      category: [],
      categoryType: '',
      aboutMovie: '',
      activeButton: '' }

    expect(wrapper.state()).toEqual(expected)
  })

  it('can change its state',()=>{
    const wrapper = mount(<App/>)
    

  })

})
