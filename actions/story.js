export const ADD_HASHTAG = 'add hash tag';
export const CHANGE_THEME = 'change theme';

export function addHashtag(hashtag) {
  return {
    type: ADD_HASHTAG,
    payload: hashtag,
  };
}

export function changeTheme(user, theme) {
  return {
    type: CHANGE_THEME,
    payload: {
      user,
      theme,
    },
  };
}
