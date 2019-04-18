import {
  ADD_HASHTAG,
} from '../actions';

const INITIAL_STATE = {
  hashtag: [
    'Friend',
    'Work',
    'Love',
  ],
  stories: [
    {
      id: '111',
      createDate: new Date(2019, 0, 4),
      title: 'My love story',
      content: `Don't they know it's the end of the world? It ended when you said goodbye`,
      image: '',
    },
    {
      id: '112',
      createDate: new Date(2019, 0, 4),
      title: 'My love story',
      content: `Don't they know it's the end of the world? It ended when you said goodbye`,
      image: '',
    },
    {
      id: '113',
      createDate: new Date(2019, 0, 4),
      title: 'My love story',
      content: `Don't they know it's the end of the world? It ended when you said goodbye`,
      image: '',
    }
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