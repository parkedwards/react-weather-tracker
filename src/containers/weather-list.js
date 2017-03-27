import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';


class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name; // for DRY
    const { lon, lat } = cityData.city.coord;

    function dataArr(attr) {
      if (attr === 'temp') {
        return cityData.list.map(slot => {
          return slot.main[attr] * (9 / 5) - 459.67;
        });
      } // for K -> F conversion in temperatures

      return cityData.list.map(slot => {
        return slot.main[attr];
      });
    } // return an array based on the input attribute

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={dataArr('temp')} color="orange" units="°F" /></td>
        <td><Chart data={dataArr('pressure')} color="green" units="hPa" /></td>
        <td><Chart data={dataArr('humidity')} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>

      </table>

    );
  }
}

function mapStateToProps({ weather }) {
  // using object destructuring to pull off 'weather' from the state object
  return { weather };
  // then again to reduce { weather: weather } => { weather }
}

export default connect(mapStateToProps)(WeatherList);