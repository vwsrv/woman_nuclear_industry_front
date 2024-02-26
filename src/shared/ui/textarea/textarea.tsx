'use client';

import { useRef, useEffect } from 'react';
import { typeTextareaProps } from '@/shared/ui/textarea/types';
import classes from './styles.module.scss';
import cn from 'classnames';

export const Textarea: React.FC<typeTextareaProps> = ({
  className,
  label,
  value,
  setValue
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const autoResize = (): void => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
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
    <div className={cn(className, classes.textareaContainer)}>
      <label
        className={cn(className, classes.textareaLabel)}
        htmlFor="textarea"
      >
        {label}
        <span className={cn(className, classes.textareaStar)}> *</span>
      </label>
      <textarea
        ref={textareaRef}
        className={cn(className, classes.textarea)}
        id="textarea"
        value={value}
        autoComplete="off"
        onChange={(e) => {
          setValue(e.target.value);
          autoResize();
        }}
      />
    </div>
  );
};
