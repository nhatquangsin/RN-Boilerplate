export const ADD_HASHTAG = 'add hash tag';
export const CHANGE_THEME = 'change theme';
export const EDIT_CONTENT = 'edit content';

export function addHashtag(id, hashtag) {
  return {
    type: ADD_HASHTAG,
    payload: { id, hashtag },
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

export function editContent(id, content) {
  return {
    type: EDIT_CONTENT,
    payload: {
      id,
      content,
    },
  };
}
