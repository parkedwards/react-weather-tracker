import React from 'react';
import { shallow } from 'enzyme';
import Chart from '../../src/components/chart';

const setup = () => {
  const props = {
    data: [43, 52, 28, 95, 45, 66, 87],
    color: 'red',
    units: "F"
  }

  const enzymeWrapper = shallow(<Chart {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

describe('Component: <Chart />', () => {
  const { enzymeWrapper } = setup();
  
  test('A component should be rendered', () => {
    expect(enzymeWrapper.find('div')).toHaveLength(2);
    expect(enzymeWrapper.find('Sparklines')).toHaveLength(1);
    expect(enzymeWrapper.find('SparklinesLine')).toHaveLength(1);
    expect(enzymeWrapper.find('SparklinesReferenceLine')).toHaveLength(1);
  });

  test('Sparklines child should have predefined dimensions', () => {
    const SparklinesProps = enzymeWrapper.find('Sparklines').props();
    expect(SparklinesProps.svgHeight).toEqual(120);
    expect(SparklinesProps.svgWidth).toEqual(180);
  });

  test('Sparklines child should accept array data', () => {
    const { enzymeWrapper, props } = setup();
    const { data } = props;
    const SparklinesProps = enzymeWrapper.find('Sparklines').props();

    expect(SparklinesProps.data).toBeDefined();
    expect(SparklinesProps.data).toEqual(expect.arrayContaining(data));
  });

  test('Sparklines Line should accept color prop', () => {
    const { enzymeWrapper, props } = setup();
    const { color } = props;
    const LineProps = enzymeWrapper.find('SparklinesLine').props();

    expect(LineProps.color).toBeDefined();
    expect(LineProps.color).toEqual(color);
  });

  test('Sparklines Reference Line should compute an average', () => {
    const RefLineProps = enzymeWrapper.find('SparklinesReferenceLine').props();
    
    expect(RefLineProps.type).toBeDefined();
    expect(RefLineProps.type).toEqual('avg');
  });
});
