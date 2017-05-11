import React              from 'react';
import ReactDOM           from 'react-dom';
import App                from './App';
import { mount, shallow } from 'enzyme';
import fetchMock          from 'fetch-mock';
import mockMovieData      from './helperApi/MockMovieData'
import fakeData           from './App-test-helper.js'


describe('App test', () => {

  let testP = new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve("Success!");
        reject("GRRR")

      }, 2000)
      })

  beforeEach(()=>{
  fetchMock.get('http://swapi.co/api/films/?/format=json', {
    status: 200,
    body: fakeData
})
})

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  });
  //
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  // });

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

<<<<<<< HEAD
  it.only('can change its state', async () =>  {

    beforeEach( () => {
      fetchMock.get(mockMovieData, {
        status: 200,
        body: mockMovieData
      })
    })

    const wrapper = mount(<App />)
    const button = wrapper.find('.learn-more')
    console.log(button);

    const waitItOut = new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve('success')
      }, 2000)
    })

    expect(wrapper.state().defaultAboutMovie.title).toEqual(undefined)

    await waitItOut;
    wrapper.update()

    expect(typeof wrapper.state().defaultAboutMovie.title).toEqual("string")
    expect(typeof wrapper.state().defaultAboutMovie.opening_crawl).toEqual("string")

    expect(typeof wrapper.state().aboutMovie).toEqual("string")
    button.simulate('click')
    expect(typeof wrapper.state().aboutMovie).toEqual()

    await testP

     wrapper.update()

    expect(fetchMock.called()).toEqual(true)

  })

})
