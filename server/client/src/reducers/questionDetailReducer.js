import { FETCH_QUESTION_DETAILS } from '../actions/actions';

const DEFAULT_STATE = {
  topics: []
}

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_QUESTION_DETAILS:
      if (action.payload) {
        let newState = Object.assign({}, state)
        // Add each question object to arr and push to state/store
        newState = action.payload.data
        return newState;
      }
      return state;
    default:
      return state;
  }
}
