import { FC, useState, useEffect, useRef, useCallback } from "react";
import DOMPurify from "dompurify";

import useKeypress from "hooks/useKeyPress";
import useOnClickOutside from "hooks/useOnClickOutside";

import Props from "./types";
import { TextButton, GrowWrap, TextArea } from "./styles";

/**
 * Text element which can be clicked and inline-edited.
 */
const InlineEdit: FC<Props> = ({ text, onSetText, maxLength }) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const enter = useKeypress("Enter");
  const esc = useKeypress("Escape");

  // check to see if the user clicked outside of this component
  useOnClickOutside(wrapperRef, () => {
    if (isInputActive) {
      onSetText(inputValue);
      setIsInputActive(false);
    }
  });

  /**
   * If Enter is pressed, save the text and close the editor.
   */
  const onEnter = useCallback(() => {
    if (enter) {
      onSetText(inputValue);
      setIsInputActive(false);
    }
  }, [enter, inputValue, onSetText]);

  /**
   * if Escape is pressed, revert the text and close the editor.
   */
  const onEsc = useCallback(() => {
    if (esc) {
      setInputValue(text);
      setIsInputActive(false);
    }
  }, [esc, text]);

  useEffect(() => {
    // Focus the cursor in the input field on edit start
    if (isInputActive) {
      inputRef.current?.focus();
    }
  }, [isInputActive]);

  useEffect(() => {
    // Watch the Enter and Escape key presses and action accordingly
    if (isInputActive) {
      onEnter();
      onEsc();
    }
  }, [onEnter, onEsc, isInputActive]);

  /**
   * Handle input onChange by sanitizing value and updating controlled input state.
   */
  const handleInputChange = useCallback(
    (event) => {
      // sanitize input
      setInputValue(DOMPurify.sanitize(event.target.value));
    },
    [setInputValue]
  );

  /**
   * Change text element to editable input when clicked.
   */
  const handleSpanClick = useCallback(() => setIsInputActive(true), [setIsInputActive]);

  return (
    <span ref={wrapperRef}>
      <TextButton
        role="button"
        ref={textRef}
        onKeyPress={handleSpanClick}
        onClick={handleSpanClick}
        tabIndex={0}
        isEditMode={isInputActive}
      >
        {text}
      </TextButton>

      <GrowWrap isEditMode={isInputActive} data-replicated-value={inputValue}>
        <TextArea
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          maxLength={maxLength}
        />
      </GrowWrap>
    </span>
  );
};

export default InlineEdit;
