import { store } from "redux/store";

/**
 * Send asynchronous request to toggle like.
 *
 * @param postId - Post id in which to toggle the like
 * @returns List of updated likes
 */
const toggleLike = (postId: string): string[] => {
  const { likes } = store.getState().user.user || {};

  // TODO: On a real world scenario, here is where we would make our api call

  if (likes.includes(postId)) {
    const likeIndex = likes.indexOf(postId);
    likes.splice(likeIndex, 1);
  } else {
    likes.push(postId);
  }

  return likes;
};

export default toggleLike;
