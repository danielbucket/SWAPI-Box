import { mount, shallow } from 'enzyme';
import React              from 'react';
import ReactDOM           from 'react-dom';
import CategoryDisplay    from './CategoryDisplay'

describe('CategoryDisplay Test', () => {
  it('should do a thing', () => {
    let wrapper = mount(<CategoryDisplay
                          typeCategory={ "people" }
                          displayMovieInfo={ false }
                          presentCategory={ [{
                                    homeworld: 'Nabu',
                                    species: ['gringo'],
                                    name: 'Darth Picard'
                                  }] }
                          favorites={['Darth Picard']}/> )

    expect(wrapper.find('.favorite').length).toEqual(1)
    expect(wrapper.find('Person').length).toEqual(1)
    expect(wrapper.find('.card-title').props().children[0]).toEqual('Darth Picard')

  })

  it('should do a thing', () => {
    let wrapper = mount(<CategoryDisplay
                          typeCategory={ "people" }
                          displayMovieInfo={ false }
                          presentCategory={ [
                                  { homeworld: 'Nabu',
                                    species: ['gringo'],
                                    name: 'Darth Picard' },
                                  { homeworld: 'Kentucky',
                                    species: ['Asian'],
                                    name: 'Politicians' },
                                  { homeworld: 'Middle Earth',
                                    species: ['Dinosaurs'],
                                    name: 'Gerald' }
                                  ] }
                          favorites={ ['Gerald'] }/> )


    expect(wrapper.find('.favorite').length).toEqual(1)
    expect(wrapper.find('.favorite').find('.card-title').props().children[0]).toEqual('Gerald')

    expect(wrapper.find('.not-favorite').length).toEqual(2)
    expect(wrapper.find('.not-favorite').first().find('.card-title').props().children[0]).toEqual('Darth Picard')
    expect(wrapper.find('.not-favorite').last().find('.card-title').props().children[0]).toEqual('Politicians')
  })


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CategoryDisplay
                          typeCategory={ "people" }
                          displayMovieInfo={ false }
                          presentCategory={ [{
                                    homeworld: 'Nabu',
                                    species: ['gringo'],
                                    name: 'Darth Picard'
                                  }] }
                          favorites={['Darth Picard']}/>, div);
  });

})
