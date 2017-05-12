import React                from 'react';
import ReactDOM             from 'react-dom';
import App                  from '../App';
import { mount, shallow }   from 'enzyme';
import fetchMock            from 'fetch-mock';
import fakeData             from '../helperApi/App-test-helper.js';
import fakePeople           from '../helperApi/fakePeople.js';
import fakePlanets          from '../helperApi/fakePlanets.js';



describe('Person API Test', () => {

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

    fetchMock.get('http://swapi.co/api/people/?format=json', {
      status: 200,
      body: fakePeople
    })

    const wrapper = mount(<App />)
    await testP

    const button = wrapper.find('#people-btn')

    expect(wrapper.state().activeButton).toEqual('')
    expect(wrapper.state().category).toEqual( [] )

    wrapper.setState({ category: fakePeople })
    wrapper.find('Person').setState({ homeworld   : 'Nabu',
                                      species     : 'horse',
                                      population  : 13
                                    })

    button.simulate('click')
    await testP


    expect(wrapper.state().activeButton).toEqual('people')
    expect(wrapper.state().category.results[0].name).toEqual("Luke Skywalker")
    })

})
