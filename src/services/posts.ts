import Post from "models/posts";

/**
 * Send asynchronous request to fetch list of posts.
 *
 * @returns List of posts
 */
export const fetchPosts = async (): Promise<Post[] | Error> => {
  try {
    // TODO: On a real world scenario, mocked data will need to be replaced with proper api
    const response = await fetch("/data/mockedPosts.json");
    const posts = await response.json();

    return posts;
  } catch (err) {
    throw new Error((err as Error).toString());
  }
};

/**
 * Send asynchronous request to edit post.
 *
 * @param post - Post to update
 * @returns Updated post
 */
export const editPost = async (post: Post): Promise<Post | Error> => {
  try {
    // TODO: On a real world scenario, here is where we would make our api call
    // Body { post: Post } - Response { result: Boolean }
    const response = true;

    if (!response) {
      throw new Error();
    }
    return post;
  } catch (err) {
    throw new Error((err as Error).toString());
  }
};

export default fetchPosts;
