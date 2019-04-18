import {
  ADD_HASHTAG,
} from '../actions';

const INITIAL_STATE = {
  hashtag: [
    'Friend',
    'Work',
    'Love',
  ]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_HASHTAG:
      return {
        ...state,
        hashtag: [
          ...state.hashtag,
          action.payload
        ]
      }
    default:
      return state;
  }
}