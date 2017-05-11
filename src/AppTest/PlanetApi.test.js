import React                from 'react';
import ReactDOM             from 'react-dom';
import App                  from '../App';
import { mount, shallow }   from 'enzyme'
import fetchMock            from 'fetch-mock'
import fakeData             from '../helperApi/App-test-helper.js'
import fakePlanets          from '../helperApi/fakePlanets.js'



describe('Planet API Test', () => {

  let testP = new Promise( (resolve, reject) => {
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


  it('can change its state when clicking on other buttons', async () => {

    fetchMock.get('http://swapi.co/api/planets/?format=json', {
      status: 200,
      body: fakePlanets
    })

    const wrapper = mount(<App />)
    await testP

    wrapper.update()

    const button = wrapper.find('#planet-btn')

    expect(wrapper.state().activeButton).toEqual('')
    expect(wrapper.state().category).toEqual( [] )

    wrapper.setState({category: fakePlanets})

    button.simulate('click')
    await testP

    wrapper.update()

    expect(wrapper.state().activeButton).toEqual('planets')
// console.log(wrapper.state())
    })

})
