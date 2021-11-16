import { FC } from "react";

import { Props, ThumbnailSize, ThumbnailType } from "./types";
import { StyledImg, StyledVideo } from "./styles";

/**
 * Custom media component for loading and displaying image and video medias.
 */
const Thumbnail: FC<Props> = ({ type, src, description, size, width, height, className }) =>
  type === ThumbnailType.IMAGE ? (
    <StyledImg
      src={src}
      alt={description}
      size={size || ThumbnailSize.INHERIT}
      width={width || ""}
      height={height || ""}
      className={className || ""}
    />
  ) : (
    <StyledVideo
      size={size || ThumbnailSize.INHERIT}
      width={width || ""}
      height={height || ""}
      className={className || ""}
      autoPlay
      muted
      loop
    >
      <source src={src} type="video/mp4" />
    </StyledVideo>
  );

export default Thumbnail;
