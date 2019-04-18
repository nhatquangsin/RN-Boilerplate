export const ADD_HASHTAG = 'add hash tag';

export function addHashtag(hashtag) {
  return {
    type: ADD_HASHTAG,
    payload: hashtag,
  }
}