import { ADD_HASHTAG, EDIT_CONTENT } from '../actions';

const INITIAL_STATE = {
  hashtag: ['Friend', 'Work', 'Love', 'Life', 'Fun', 'Code'],
  stories: [
    {
      id: '111',
      createDate: new Date(2019, 0, 4),
      title: 'My love story',
      content: `Don't they know it's the end of the world? It ended when you said goodbye`,
      image: 'pink.png',
      hashtags: ['Love', 'Friend'],
    },
    {
      id: '112',
      createDate: new Date(2019, 10, 2),
      title: 'A lovely live',
      content: `Don't they know it's the end of the world? It ended when you said goodbye`,
      image: 'pink.png',
      hashtags: ['Fun'],
    },
    {
      id: '113',
      createDate: new Date(2018, 3, 1),
      title: 'Woking with human',
      content: `Don't they know it's the end of the world? It ended when you said goodbye`,
      image: 'pink.png',
      hashtags: ['Life'],
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_CONTENT:
      return {
        ...state,
        stories: state.stories.map(story => {
          if (story.id === action.payload.id) {
            return {
              ...story,
              content: action.payload.content,
            };
          }
          return story;
        }),
      };
    case ADD_HASHTAG:
      return {
        ...state,
        hashtag: [...state.hashtag, action.payload],
      };
    default:
      return state;
  }
};
