import React                from 'react';
import ReactDOM             from 'react-dom';
import App                  from '../App';
import { mount, shallow }   from 'enzyme'
import fetchMock            from 'fetch-mock'
import fakeData             from '../helperApi/App-test-helper.js'
import fakeVehicle          from '../helperApi/fakeVehicle.js'



describe('Vehicle API Test', () => {

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

    fetchMock.get('http://swapi.co/api/vehicles/?format=json', {
      status: 200,
      body: fakeVehicle
    })

    const wrapper = mount(<App />)
    wrapper.update()

    //could we find the button in a more specific way?
    const button = wrapper.find('button').last()

    expect(wrapper.state().activeButton).toEqual('')
    expect(wrapper.state().category).toEqual( [] )

    button.simulate('click')
    await testP

    wrapper.update()

    expect(wrapper.state().activeButton).toEqual('vehicles')
    expect(wrapper.state().category[0].name).toEqual("Sand Crawler")
    expect(wrapper.find("Vehicle").length).toEqual(10)
    })

})
