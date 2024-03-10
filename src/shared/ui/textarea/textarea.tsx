'use client';

import { useRef, useEffect } from 'react';
import { typeTextareaProps } from '@/shared/ui/textarea/types';
import classes from './styles.module.scss';
import cn from 'classnames';

export const Textarea: React.FC<typeTextareaProps> = ({
  className,
  label,
  value,
  setValue,
  focus,
  setFocus
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const autoResize = (): void => {
    if (textareaRef.current) {
      textareaRef.current.rows = 1;
      const scrollHeight = textareaRef.current.scrollHeight;
      const height = textareaRef.current.offsetHeight;
      const row = Math.ceil(scrollHeight / height);
      textareaRef.current.rows = row;
    }
  };

  const handleFocus = (): void => {
    setFocus(true);
  };

  const handleBlur = (): void => {
    if (!value || value === '') {
      setFocus(false);
    }
  };

  useEffect(() => {
    autoResize();
  }, []);

  useEffect(() => {
    const handleResize = (): void => autoResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={cn(
        className,
        classes.textareaWrapper,
        {
          [classes.onValue]: value
        },
        {
          [classes.onFocus]: focus || value !== ''
        }
      )}
      onClick={() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
        }
      }}
    >
      <label
        className={cn(className, classes.textareaLabel, {
          [classes.onFocus]: focus || value !== ''
        })}
        htmlFor="textarea"
      >
        {label}
      </label>
      <textarea
        ref={textareaRef}
        className={cn(className, classes.textarea, {
          [classes.moreTwoRows]:
            (textareaRef.current && textareaRef.current.rows >= 2) ||
            value !== ''
        })}
        id="textarea"
        value={value}
        autoComplete="off"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={e => {
          setValue(e.target.value);
          autoResize();
        }}
      />
    </div>
  );
};
