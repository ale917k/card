export const enum ThumbnailType {
  IMAGE = "image",
  VIDEO = "video",
}

export const enum ThumbnailSize {
  COVER = "cover",
  CONTAIN = "contain",
  INHERIT = "inherit",
}

/**
 * Thumbnail component props.
 */
export interface Props {
  /**
   * Type for handling different media format
   */
  type: ThumbnailType;
  /**
   * Source file to display
   */
  src: string;
  /**
   * How the media should stretch in relation to its parent
   */
  size?: ThumbnailSize;
  /**
   * Description of media displayed used for accessibility
   */
  description?: string;
  /**
   * Custom width to apply
   */
  width?: number | string;
  /**
   * Custom height to apply
   */
  height?: number | string;
  /**
   * Custom className(s) to enable ability of styling component from parent
   */
  className?: string;
}

/**
 * Thumbnail props used for styling media asset
 */
export type StyledMediaProps = Omit<Props, "type" | "src">;
