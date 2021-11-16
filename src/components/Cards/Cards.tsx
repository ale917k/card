import { FC, useState, useEffect, Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";

import Card from "components/Card";
import Modal from "components/Modal";

import Post from "models/posts";

import { fetchPostsStart } from "redux/posts/actions";
import { FetchPostsStartAction } from "redux/posts/types";
import { selectPosts } from "redux/posts/selectors";

import Wrapper from "./styles";

type PropsFromRedux = ConnectedProps<typeof connector>;

/**
 * List of post cards.
 */
const Cards: FC<PropsFromRedux> = ({ posts, fetchPosts }) => {
  const [previewModal, setPreviewModal] = useState<Post | null>(null);

  useEffect(() => {
    // Fetch posts if none stored
    if (!posts?.length) {
      fetchPosts();
    }
  }, [posts, fetchPosts]);

  /**
   * Trigger popup with card to preview.
   *
   * @param post - Edited post information to display on preview
   */
  const showPreview = (post: Post) => {
    setPreviewModal(post);
  };

  /**
   * Close popup with preview card.
   */
  const closePreview = () => {
    setPreviewModal(null);
  };

  return (
    <>
      <Wrapper>
        {posts?.map(({ id, title, description, media, createdBy, updatedBy }) => (
          <Card
            key={id}
            id={id}
            title={title}
            description={description}
            media={media}
            createdBy={createdBy}
            updatedBy={updatedBy}
            showPreview={showPreview}
          />
        ))}
      </Wrapper>

      <Modal id="card-preview" showModal={!!previewModal} closeModal={closePreview}>
        {previewModal && (
          <Card
            key={previewModal.id}
            id={previewModal.id}
            title={previewModal.title}
            description={previewModal.description}
            media={previewModal.media}
            createdBy={previewModal.createdBy}
            updatedBy={previewModal.updatedBy}
          />
        )}
      </Modal>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
});

const mapDispatchToProps = (dispatch: Dispatch<FetchPostsStartAction>) => ({
  fetchPosts: () => dispatch(fetchPostsStart()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Cards);
