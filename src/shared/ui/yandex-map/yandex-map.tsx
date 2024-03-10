import { useRef } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { yandexMapProps } from './types';

export const YandexMap: React.FC<yandexMapProps> = ({ className }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  return <div ref={mapRef} className={cn(className, classes.yandexMap)}></div>;
};
