import { FC, Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";

import Button, { ButtonVariants } from "components/Button";

import { toggleLikeStart } from "redux/user/actions";
import { selectLikes } from "redux/user/selectors";
import { ToggleLikeStartAction } from "redux/user/types";

import Props from "./types";
import StyledStarSvg from "./styles";

type ReduxProps = ConnectedProps<typeof connector>;

/**
 * Button used to toggle like on posts.
 */
const LikeButton: FC<Props & ReduxProps> = ({ postId, disabled, likes, toggleLike }) => (
  <Button
    variant={ButtonVariants.TERTIARY}
    icon
    onClick={() => {
      if (!disabled) {
        toggleLike(postId);
      }
    }}
  >
    <StyledStarSvg $active={likes.includes(postId)} />
  </Button>
);

const mapStateToProps = createStructuredSelector({
  likes: selectLikes,
});

const mapDispatchToProps = (dispatch: Dispatch<ToggleLikeStartAction>) => ({
  toggleLike: (postId: string) => dispatch(toggleLikeStart(postId)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(LikeButton);
