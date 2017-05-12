import React              from 'react';
import ReactDOM           from 'react-dom';
import Person             from './Person';
import { mount, shallow } from 'enzyme';

describe('Person test', () => {
  const wrapper = mount(<Person isFavorite="favorite"
                                      data={ {name      : 'han',
                                              homeworld : "Naboo",
                                              species   : ["human"]} }
                                        />)

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Person isFavorite="favorite"
                                  data={ { name       : 'han',
                                           homeworld  : "Naboo",
                                           species    : ["human"]} }
                                      />, div)
  });

  it('should have a class', () => {
    expect(wrapper.hasClass('favorite')).toEqual(true)
  });

  it('should have a class dependent on the prop isFavorite', () => {
    expect(wrapper.hasClass('favorite')).toEqual(true)

    const newWrapper = mount(<Person isFavorite="not-favorite"
                                           data={ { name      : 'han',
                                                    homeworld : "Naboo",
                                                    species   : ["human"]} }
                                                  />)

    expect(newWrapper.hasClass('not-favorite')).toEqual(true)
  });

  it('should contain elements',() => {
    expect(wrapper.find('div').length).toEqual(6)
  });

  it('should have a default state', () => {
    let expected = { homeworld  : "",
                     species    : "",
                     population : "" }

    expect(wrapper.state()).toEqual(expected)
  });

  it('should regonize a click for favorites', () => {
    const spy = jest.fn()
    const wrapper = mount(<Person isFavorite="not-favorite"
                           selectedFavorites={ spy }
                                        data={ {name      : 'han',
                                                homeworld : "Naboo",
                                                species   : ["human"]} }
                         />)

    wrapper.simulate('click')
    expect(spy).toBeCalled()
  });

})
