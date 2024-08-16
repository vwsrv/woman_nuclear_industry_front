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

  const mapBounds = {
    minLat: 10,
    maxLat: 60,
    minLng: 10,
    maxLng: 60
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const img = new window.Image();
        img.src = image.src;
        img.onload = () => {
          canvas.width = canvas.offsetWidth;
          canvas.height = canvas.offsetHeight;

          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          regions.forEach(region => {
            const markerImg = new window.Image();
            markerImg.src = marker.src;
            markerImg.onload = () => {
              const x =
                ((region.coordinats.lng - mapBounds.minLng) /
                  (mapBounds.maxLng - mapBounds.minLng)) *
                canvas.width;
              const y =
                (1 -
                  (region.coordinats.lat - mapBounds.minLat) /
                    (mapBounds.maxLat - mapBounds.minLat)) *
                canvas.height;
              const markerWidth = 32;
              const markerHeight = 48;
              ctx.drawImage(
                markerImg,
                x - markerWidth / 2,
                y - markerHeight,
                markerWidth,
                markerHeight
              );
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
