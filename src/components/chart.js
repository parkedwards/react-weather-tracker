import React from 'react';
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';


function average(array) {
  return Math.floor(array.reduce((a, b) => {
    return a + b;
  }) / array.length);
}

const Chart = ({ data, color, units }) => {
  return (
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(data)} {units}</div>
    </div>

  );
};


export default Chart;