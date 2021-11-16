/**
 * LikeButton component props.
 */
interface Props {
  /**
   * Post id used to uniquely identify liked post.
   */
  postId: string;
  /**
   * Disable onClick event if true
   */
  disabled?: boolean;
}

export default Props;
