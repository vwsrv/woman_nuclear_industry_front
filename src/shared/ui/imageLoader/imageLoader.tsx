'use client';

import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { typeImageLoaderProps } from '@/shared/ui/imageLoader/types';

export const ImageLoader: React.FC<typeImageLoaderProps> = props => {
  const { width = 153, height = 153, imageData = '/test-image-loader.png' } = props;
  
  const [selectedImage, setSelectedImage] = React.useState<string>(imageData);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (!evt.target.files) return;
    setSelectedImage(URL.createObjectURL(evt.target.files[0]));
  };

  return (
    <div className={cn(classes['image-loader'])} style={{ width, height }}>
      <Image
        fill={true}
        src={selectedImage}
        className={cn(classes['image-loader__photo'])}
        alt="картинка"
      />
      <label
        htmlFor="image-loader"
        className={cn(classes['image-loader__button'])}
      ></label>
      <input
        className={cn(classes['image-loader__input'])}
        type="file"
        accept=".png,.jpeg,.ico,.webp,.svg,.jpg"
        name="image-loader-input"
        id="image-loader"
        onChange={handleChange}
      />
    </div>
  );
};
