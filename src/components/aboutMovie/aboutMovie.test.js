import React              from 'react';
import ReactDOM           from 'react-dom';
import AboutMovie         from './AboutMovie';
import { mount, shallow } from 'enzyme';

describe('aboutMovie test', () => {

  it('should not crash when rendered', () => {
      const div = document.createElement('div');
      ReactDOM.render(<AboutMovie movieSummary={ ["s","t","a","r"] }
      />, div);
  })

  it('should have a class',()=>{
    const wrapper = mount(<AboutMovie movieSummary={ ["s","t","a","r"] }
    />)
    expect(wrapper.hasClass('about-movie-container')).toEqual(true)
  })

  it('contains elements', () => {
    const wrapper = mount(<AboutMovie movieSummary={ ["s","t","a","r"] }
    />)
    expect(wrapper.find('div').length).toEqual(3)
    expect(wrapper.find('button').length).toEqual(1)
    expect(wrapper.find('h4').length).toEqual(2)
    expect(wrapper.find('p').length).toEqual(1)
  })

  it('should have a button that can be clicked',() => {
    const spy = jest.fn();
    const wrapper = mount(<AboutMovie selectCategory={ spy }
                                        movieSummary={ ["s","t","a","r"] }
                                      />)
    const btn = wrapper.find('button')
    let fBtn = wrapper.find('button').first()
    fBtn.simulate('click')
    expect(spy).toBeCalled()
  })

})
