// import { renderComponent , expect } from '../test_helper';
// import App from '../../src/components/app';

// describe('App' , () => {
//   let component;

//   beforeEach(() => {
//     component = renderComponent(App);
//   });

//   it('Some component is rendered', () => {
//     expect(component).to.exist;
//   });
// });

import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/app';

describe('Component: <App />', () => {
  const enzymeWrapper = shallow(<App />);

  test('A component should be rendered', () => {
    expect(enzymeWrapper.find('div')).toHaveLength(1);
  });

  test('Two nested chidlren component should be rendered', () => {
    expect(enzymeWrapper.find('div').children()).toHaveLength(2);
  })
})