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
    if (textareaRef.current && textareaRef.current.value && textareaRef.current.value !== '') {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    } else {
      if (textareaRef.current) {
        textareaRef.current.style.height = '';
        textareaRef.current.scrollTop = 0;
      }
    }
  };

  const handleFocus = (): void => {
    if (textareaRef.current && textareaRef.current.value && textareaRef.current.value !== '') {
      textareaRef.current.scrollTop = (textareaRef.current.scrollHeight - textareaRef.current.clientHeight) / 2;
    }
  }

  useEffect(() => {
    autoResize();
  }, []);

  useEffect(() => {
    const handleResize = (): void => autoResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={cn(className, classes.textareaContainer, { [classes.noValue]: !value })}>
      <label
        className={cn(className, classes.textareaLabel, { [classes.onValue]: value })}
        htmlFor="textarea"
      >
        {label}
        <span className={cn(className, classes.textareaStar)}> *</span>
      </label>
      <textarea
        ref={textareaRef}
        className={cn(className, classes.textarea, { [classes.onValue]: value })}
        id="textarea"
        value={value}
        autoComplete="off"
        onFocus={handleFocus}
        onChange={e => {
          setValue(e.target.value);
          autoResize();
        }}
      />
    </div>
  );
};
