import Post from "models/posts";

/**
 * Card component props.
 */
interface Props extends Post {
  /**
   * Trigger popup with card to preview.
   *
   * @param post - Edited post information to display on preview
   */
  showPreview?: (post: Post) => void;
}

export default Props;
