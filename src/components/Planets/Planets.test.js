import React              from 'react';
import ReactDOM           from 'react-dom';
import Planets            from './Planets';
import { mount, shallow } from 'enzyme';

describe('Planets test',()=>{
  const wrapper = mount(<Planets isFavorite="favorite"
                                       data={ {name       : 'Naboo',
                                               terrain    : "grass",
                                               climate    : "wet",
                                               population : 10000,
                                              residents   : ["garry"]} }
  />)


  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<Planets isFavorite="favorite"
                                   data={ {name       : 'Naboo',
                                           terrain    : "grass",
                                           climate    : "wet",
                                           population : 10000,
                                           residents  : ["garry"]} }
                                         />, div)
  });

  it('should have a class', () => {
    expect(wrapper.hasClass('favorite')).toEqual(true)
  });

  it('should have a class dependent on the prop isFavorite', () => {
    expect(wrapper.hasClass('favorite')).toEqual(true)

    const newWrapper =mount(<Planets isFavorite="not-favorite"
                                           data={ {name       : 'Naboo',
                                                   terrain    : "grass",
                                                   climate    : "wet",
                                                   population : 10000,
                                                   residents  : ["garry"]} }
    />)
    expect(newWrapper.hasClass('not-favorite')).toEqual(true)
  });

  it('should contain elements', () => {
    expect(wrapper.find('div').length).toEqual(7)
  });

  it('should have a default state', () => {
    let expected = {"residents": []}
    expect(wrapper.state()).toEqual(expected)
  })

  it('should regonize a click for favorites', () => {
  const spy = jest.fn()
  const wrapper = mount(<Planets isFavorite = "not-favorite"
                           selectedFavorites={ spy }
                                        data={ {name        : 'Naboo',
                                                terrain     : "grass",
                                                climate     : "wet",
                                                population  : 10000,
                                                residents   : ["garry"]} }
  />)

  wrapper.simulate('click')
  expect(spy).toBeCalled()
  });
})
