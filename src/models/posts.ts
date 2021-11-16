import { ThumbnailType } from "components/Thumbnail";

/**
 * Media to display on posts.
 */
export interface PostMedia {
  /**
   * Type of media to use (e.g. 'image' or 'video')
   */
  type: ThumbnailType;
  /**
   * Source file
   */
  src: string;
}

/**
 * Post data entity.
 */
interface Post {
  /**
   * Unique resource identifier
   */
  id: string;
  /**
   * Main title
   */
  title: string;
  /**
   * Body content
   */
  description: string;
  /**
   * Asset to display on main page
   */
  media: PostMedia;
  /**
   * Stringified creation date
   */
  createdBy: string;
  /**
   * Stringified last update date, if any
   */
  updatedBy: string | null;
}

export default Post;
