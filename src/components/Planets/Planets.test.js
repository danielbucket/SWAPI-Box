import React from 'react';
import ReactDOM from 'react-dom';
import Planets from './Planets';
import {mount,shallow} from 'enzyme'

describe('Planets test',()=>{

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Planets
                          isFavorite = "favorite"
                          data= {{name:'Naboo',terrain:"grass",climate:"wet",population:10000 }}
    />, div);
  });



})
