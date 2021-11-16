/**
 * Modal component props.
 */
interface Props {
  /**
   * Modal id used to uniquely identify element created through react portal
   */
  id: string;
  /**
   * Toggle modal visibility; Parsed as prop for animating on mount / unmount
   */
  showModal: boolean;
  /**
   * Trigger modal unmount
   */
  closeModal: () => void;
}

export default Props;
