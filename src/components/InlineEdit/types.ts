/**
 * InlineEdit component props.
 */
interface Props {
  /**
   * Editable controlled text
   */
  text: string;
  /**
   * onChange function for updating controlled input
   */
  onSetText: (text: string) => void;
  /**
   * Native maxlength input property to limit number of characters
   */
  maxLength?: number;
}

/**
 * Props for styled components mutating when on edit mode
 */
export interface StyledEditableText {
  /**
   * Conditionally change css styles when on edit mode
   */
  isEditMode: boolean;
}

export default Props;
