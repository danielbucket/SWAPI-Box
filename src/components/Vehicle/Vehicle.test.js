import React from 'react';
import ReactDOM from 'react-dom';
import Vehicle from './Vehicle';
import {mount,shallow} from 'enzyme'

describe('Vehicle test',()=>{
  const wrapper =mount(<Vehicle
                        isFavorite = "favorite"
                        data= {{name:'tie-figher',
                        model:"T-5",vehicle_class:"figher",
                      passengers:["pilot"] }}
                        />)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Vehicle
                        isFavorite = "favorite"
                        data= {{name:'tie-figher',
                        model:"T-5",vehicle_class:"figher",
                        passengers:["pilot"] }}
                          />, div);
})

  it('should have a class',()=>{
    expect(wrapper.hasClass('favorite')).toEqual(true)
  })

  it('should have a class dependent on the prop isFavorite',()=>{
    expect(wrapper.hasClass('favorite')).toEqual(true)

    const newWrapper =mount(<Vehicle
                        isFavorite = "not-favorite"
                        data= {{name:'tie-figher',
                        model:"T-5",vehicle_class:"figher",
                        passengers:["pilot"] }}
                          />)
    expect(newWrapper.hasClass('not-favorite')).toEqual(true)
  })

  it('should contain elements',()=>{
    expect(wrapper.find('div').length).toEqual(6)

  })
  it('should regonize a click for favorites',()=>{
  const spy     = jest.fn()
  const wrapper = mount(<Vehicle
                      isFavorite = "not-favorite"
                      data= {{name:'tie-figher',
                      model:"T-5",vehicle_class:"figher",
                      passengers:["pilot"] }}
                      selectedFavorites = {spy}
            />)
          wrapper.simulate('click')
          expect(spy).toBeCalled()
  })


})
