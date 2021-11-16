import { FC, useState, Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import moment from "moment";

import { ThumbnailSize } from "components/Thumbnail";
import { TypographyVariants } from "components/Typography";
import InlineEdit from "components/InlineEdit";
import LikeButton from "components/LikeButton";
import Menu from "components/Menu";
import MenuItem from "components/MenuItem";

import Post from "models/posts";

import { editPostStart } from "redux/posts/actions";
import { EditPostStartAction } from "redux/posts/types";

import theme from "theme";

import Props from "./types";
import { Wrapper, Article, Cover, Content, Title, Subtitle, Description, Actions } from "./styles";

type PropsFromRedux = ConnectedProps<typeof connector>;

/**
 * Card component displaying post information.
 */
const Card: FC<Props & PropsFromRedux> = ({
  id,
  title,
  description,
  media,
  createdBy,
  updatedBy,
  showPreview,
  editPost,
}) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editedTitle, setEditedTitle] = useState<string>(title);
  const [editedDescription, setEditedDescription] = useState<string>(description);

  const lastEditTime = moment(updatedBy || createdBy).fromNow();

  /**
   * Set card on edit mode.
   */
  const triggerEditMode = () => {
    setIsEditMode(true);
  };

  /**
   * Open popup with preview of edited card.
   */
  const showPreviewPopup = () => {
    showPreview?.({
      id,
      title: editedTitle,
      description: editedDescription,
      media,
      createdBy,
      updatedBy: new Date().toJSON(),
    });
  };

  /**
   * Trigger request for editing post, reset fields and close edit mode.
   */
  const saveChanges = () => {
    editPost({
      id,
      title: editedTitle,
      description: editedDescription,
      media,
      createdBy,
      updatedBy: new Date().toJSON(),
    });
    setEditedTitle(title);
    setEditedDescription(description);
    setIsEditMode(false);
  };

  /**
   * Reset fields and close edit mode.
   */
  const discardChanges = () => {
    setEditedTitle(title);
    setEditedDescription(description);
    setIsEditMode(false);
  };

  return (
    <Wrapper>
      <Article isEditMode={isEditMode}>
        <Cover
          type={media.type}
          src={media.src}
          size={ThumbnailSize.COVER}
          height={theme.spacing(30)}
        />

        <Content>
          <Title variant={TypographyVariants.H4}>
            {isEditMode ? (
              <InlineEdit
                text={editedTitle}
                onSetText={(text) => setEditedTitle(text)}
                maxLength={100}
              />
            ) : (
              title
            )}
          </Title>

          <Subtitle>
            {updatedBy ? "Last edited" : "Created"} {lastEditTime}
          </Subtitle>

          <Description>
            {isEditMode ? (
              <InlineEdit
                text={editedDescription}
                onSetText={(text) => setEditedDescription(text)}
                maxLength={800}
              />
            ) : (
              description
            )}
          </Description>
        </Content>
      </Article>

      <Actions>
        <LikeButton postId={id} disabled={!showPreview} />

        {showPreview ? (
          <Menu>
            {isEditMode ? (
              <>
                <MenuItem onClick={showPreviewPopup}>Preview</MenuItem>
                <MenuItem onClick={saveChanges}>Save</MenuItem>
                <MenuItem onClick={discardChanges}>Discard</MenuItem>
              </>
            ) : (
              <MenuItem onClick={triggerEditMode}>Edit</MenuItem>
            )}
          </Menu>
        ) : (
          <Menu />
        )}
      </Actions>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<EditPostStartAction>) => ({
  editPost: (post: Post) => dispatch(editPostStart(post)),
});

const connector = connect(null, mapDispatchToProps);

export default connector(Card);
