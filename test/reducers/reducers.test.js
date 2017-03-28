import reducer from '../../src/reducers/reducer_weather';
import { FETCH_WEATHER } from '../../src/actions';

describe('Weather reducer', () => {
  test('should return initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  });

  test('should fetch weather', () => {
    expect(
      reducer([], { type: FETCH_WEATHER, payload: { data: 11 } })
    ).toEqual([11]);
  });

  test('fetch should add onto existing state', () => {
    expect(
      reducer([11, 12, 13], { type: FETCH_WEATHER, payload: { data: 10 } })
    ).toEqual([10, 11, 12, 13]);
  });
})