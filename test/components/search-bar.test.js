import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from '../../src/containers/search-bar';

describe('Component: <SearchBar />', () => {
  const wrapper = shallow(<SearchBar />);

  test('Should render outer div', () => {
    expect(wrapper.type()).toEqual('div');
  });

  test('should render form element', () => {
    const formProps = wrapper.find('form').props();
    expect(wrapper.find('form')).toHaveLength(1);
    expect(formProps.className).toEqual('input-group');
  });
});