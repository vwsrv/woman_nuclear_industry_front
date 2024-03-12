import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import classes from './styles.module.scss';
import { mapProps } from './types';
import { LngLat } from '@yandex/ymaps3-types';
import Image from 'next/image';
import marker from '@/shared/images/icons/marker.svg';

const ymaps3Reactify = await ymaps3.import('@yandex/ymaps3-reactify');
const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);
const {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapControls,
  YMapMarker
} = reactify.module(ymaps3);
const { YMapZoomControl, YMapGeolocationControl } = reactify.module(
  await ymaps3.import('@yandex/ymaps3-controls@0.0.1')
);

export const Map: React.FC<mapProps> = ({ className, coordinats }) => {
  const location = {
    center: [coordinats.lng, coordinats.lat],
    zoom: 16
  };

  return (
    <YMap
      className={cn(className, classes.map)}
      location={location}
      mode="vector"
    >
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
      <YMapControls position="left">
        <YMapGeolocationControl />
      </YMapControls>
      <YMapControls position="right">
        <YMapZoomControl />
      </YMapControls>
      <YMapMarker
        coordinates={location.center as LngLat}
        draggable={false}
        zIndex={2}
      >
        <Image
          className={cn(className, classes.mapMarker)}
          src={marker}
          alt="Маркер"
        />
      </YMapMarker>
    </YMap>
  );
};
