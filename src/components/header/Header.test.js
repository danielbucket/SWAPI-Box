import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import {mount,shallow} from 'enzyme'

describe('Header test',()=>{

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header favorites={["Gredo"]} />, div);
  });

  it('should have a class',()=>{
    const wrapper = shallow(<Header favorites={["Gredo"]} /> )
    expect(wrapper.hasClass('header')).toEqual(true)
  })

  it('should have elements within it',()=>{
    const wrapper = mount(<Header favorites={["Gredo"]} /> )
    expect((wrapper.find('ul').length)).toEqual(1)
    expect((wrapper.find('h2').length)).toEqual(1)
  
    expect((wrapper.find('header').length)).toEqual(1)
  })

  it('should have a default state',()=>{
      const wrapper = mount(<Header favorites={["Gredo"]} />)
      expect(wrapper.state()).toEqual({ hasBeenClicked: false })
  })

//   it('should contain a list of li based off of how many favorites it is passed',()=>{
// const wrapper = mount(<Header favorites={["Gredo","Han"]} />)
// expect((wrapper.find('li').length)).toEqual(2)
//
//   })

})
