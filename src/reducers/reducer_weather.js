
import { FETCH_WEATHER } from '../actions/index.js'

// make your state an array []
// because the weather view will contain multiple city searches

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]; // concatenate using es6's spread
  }
  return state;
}

