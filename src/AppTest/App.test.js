import React                from 'react';
import ReactDOM             from 'react-dom';
import App                  from '../App';
import { mount, shallow }   from 'enzyme'
import fetchMock            from 'fetch-mock'
import fakeData             from '../helperApi/App-test-helper.js'
import fakePeople           from '../helperApi/fakePeople.js'
import fakeVehicle          from '../helperApi/fakeVehicle.js'
import fakePlanets          from '../helperApi/fakePlanets.js'

describe('App test', () => {

  let testP = new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve("Success!");
        reject("GRRR")

      }, 2000)
      })

  beforeEach( () => {
  fetchMock.get('http://swapi.co/api/films/?/format=json', {
    status: 200,
    body: fakeData
    })
  })

  afterEach( () => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  });


  it('has a class', () => {
    const wrapper = shallow(<App />)
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

  it('has a default state', () => {
    const wrapper = mount(<App />)
    const expected  = {
                      favorites: [],
                      category: [],
                      categoryType: '',
                      aboutMovie: '',
                      activeButton: '',
                      defaultAboutMovie: "",
                      displayMovieInfo: false,
                      showFavorites: false
                    }

    expect(wrapper.state()).toEqual(expected)
  })

  it('can change its state on load', async () => {

    const wrapper = mount(<App />)
    expect(typeof wrapper.state().defaultAboutMovie.title).toEqual('undefined')

    await testP

    expect(fetchMock.called()).toEqual(true)
    expect(wrapper.state().defaultAboutMovie.title).toEqual('A WONDEROUS DAY')
    expect(wrapper.state().defaultAboutMovie.episode_id).toEqual(4)
    expect(wrapper.state().defaultAboutMovie.director).toEqual('George Lucas')
    expect(wrapper.find('AboutMovie').props().movieSummary.title).toEqual('A WONDEROUS DAY')
  })


})
