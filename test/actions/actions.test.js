import { FETCH_WEATHER, fetchWeather } from '../../src/actions';

describe('Actions', () => {
  test('should create an action object to fetch weather data', () => {
    const city = 'Los Angeles';
    const expectedAction = {
      type: FETCH_WEATHER,
      payload: {}
    };
    expect(fetchWeather(city).type).toEqual(expectedAction.type);
  });
});