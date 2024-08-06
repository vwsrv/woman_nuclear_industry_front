import classes from './styles.module.scss';
import cn from 'classnames';
import { territoryAssociationProps } from './types';
import { useCallback, useEffect, useRef } from 'react';
import marker from '@/shared/images/icons/marker-icon.svg';

export const TerritoryAssociation: React.FC<territoryAssociationProps> = ({
  title,
  subtitle,
  image,
  regions
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Определите границы вашей карты
  const mapBounds = {
    minLat: 10, // минимальная широта
    maxLat: 60, // максимальная широта
    minLng: 10, // минимальная долгота
    maxLng: 60 // максимальная долгота
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const img = new window.Image();
        img.src = image.src;
        img.onload = () => {
          // Установка размеров буфера рисования
          canvas.width = canvas.offsetWidth;
          canvas.height = canvas.offsetHeight;

          // Отрисуем карту
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          // Отрисуем маркеры
          regions.forEach(region => {
            const markerImg = new window.Image();
            markerImg.src = marker.src;
            markerImg.onload = () => {
              // Преобразуем координаты широты и долготы в координаты x и y на изображении
              const x =
                ((region.coordinats.lng - mapBounds.minLng) /
                  (mapBounds.maxLng - mapBounds.minLng)) *
                canvas.width;
              const y =
                (1 -
                  (region.coordinats.lat - mapBounds.minLat) /
                    (mapBounds.maxLat - mapBounds.minLat)) *
                canvas.height;
              console.log(`Region: ${region.regionName}, x: ${x}, y: ${y}`);
              const markerWidth = 32;
              const markerHeight = 48;
              ctx.drawImage(
                markerImg,
                x - markerWidth / 2,
                y - markerHeight,
                markerWidth,
                markerHeight
              ); // Размеры маркера можно изменить
            };
          });
        };
      }
    }
  }, [image, regions]);

  return (
    <section className={cn(classes.territoryAssociation)}>
      <h2 className={cn(classes.territoryAssociationTitle)}>{title}</h2>
      <p className={cn(classes.territoryAssociationSubtitle)}>{subtitle}</p>
      <div className={cn(classes.territoryAssociationCanvasContainer)}>
        <canvas
          ref={canvasRef}
          className={cn(classes.territoryAssociationCanvas)}
        />
      </div>
    </section>
  );
};
