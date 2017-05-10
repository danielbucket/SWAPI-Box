import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount,shallow} from 'enzyme'
import fetchMock from 'fetch-mock'
import fakeData  from './App-test-helper.js'


describe('App test',()=>{

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  });

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
      activeButton: '',
      defaultAboutMovie: "",
      displayMovieInfo: false}

    expect(wrapper.state()).toEqual(expected)
  })

  it('can change its state',()=>{
    fetchMock(dataSource)
    .then( resp => resp.json() )
    .then( data => {
      this.setState({ category: data.results,
                  categoryType: input,
                    aboutMovie: this.state.defaultAboutMovie
                  });
    }).catch( e => {
      console.log(e)
    })

    const wrapper = mount(<App/>)
    console.log(wrapper.state())

  })

})
