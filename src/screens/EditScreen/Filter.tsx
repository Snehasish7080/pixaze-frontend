import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import {
  BlendColor,
  ColorMatrix,
  Group,
  LinearGradient,
  OpacityMatrix,
  RadialGradient,
  Rect,
  vec,
} from '@shopify/react-native-skia';
import {
  brightness,
  concatColorMatrices,
  contrast,
  grayscale,
  hueRotate,
  saturate,
  sepia,
} from 'react-native-image-filter-kit';

type FilterProps = {
  OVERLAY_WIDTH: number;
  IMAGE_HEIGHT: number;
};
export const Aden: React.FC<FilterProps> = ({IMAGE_HEIGHT, OVERLAY_WIDTH}) => {
  const {width} = useWindowDimensions();
  return (
    <>
      <ColorMatrix
        matrix={concatColorMatrices([saturate(0.85), brightness(1.2)])}
      />
      <Group blendMode="darken">
        <Rect
          x={width / 2 - OVERLAY_WIDTH / 2}
          y={0}
          width={OVERLAY_WIDTH}
          height={IMAGE_HEIGHT}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(OVERLAY_WIDTH * 2, 0)}
            colors={['rgba(66, 10, 14, 0.2)', 'transparent']}
          />
        </Rect>
      </Group>
    </>
  );
};

export const _1997: React.FC = () => {
  return (
    <>
      <BlendColor color={'rgba(243, 106, 188, 0.3)'} mode="screen" />
      <ColorMatrix
        matrix={concatColorMatrices([saturate(1.3), brightness(1.1)])}
      />
    </>
  );
};
export const Amaro: React.FC<FilterProps> = ({IMAGE_HEIGHT, OVERLAY_WIDTH}) => {
  const {width} = useWindowDimensions();

  return (
    <>
      <ColorMatrix
        matrix={concatColorMatrices([brightness(1.1), saturate(1.5)])}
      />
      <Group blendMode="screen">
        <Rect
          x={width / 2 - OVERLAY_WIDTH / 2}
          y={0}
          width={OVERLAY_WIDTH}
          height={IMAGE_HEIGHT}></Rect>
      </Group>
    </>
  );
};

export const Brannan: React.FC = () => {
  return (
    <>
      <BlendColor color={'rgba(161, 44, 199, 0.31)'} mode="lighten" />
      <ColorMatrix matrix={concatColorMatrices([sepia(0.5)])} />
    </>
  );
};

export const Brooklyn: React.FC<FilterProps> = ({
  IMAGE_HEIGHT,
  OVERLAY_WIDTH,
}) => {
  const {width} = useWindowDimensions();

  return (
    <>
      <ColorMatrix matrix={concatColorMatrices([brightness(1.1)])} />
      <Group blendMode="overlay">
        <Rect
          x={width / 2 - OVERLAY_WIDTH / 2}
          y={0}
          width={OVERLAY_WIDTH}
          height={IMAGE_HEIGHT}>
          <RadialGradient
            c={vec(OVERLAY_WIDTH / 2, OVERLAY_WIDTH / 2)}
            r={OVERLAY_WIDTH}
            colors={['rgba(168, 223, 193, 0.4)', '#c4b7c8']}
          />
        </Rect>
      </Group>
    </>
  );
};

export const Clarendon: React.FC = () => {
  return (
    <>
      <BlendColor color={'rgba(127, 187, 227, 0.5)'} mode="overlay" />
      <ColorMatrix matrix={concatColorMatrices([saturate(1.35)])} />
    </>
  );
};

export const Earlybird: React.FC<FilterProps> = ({
  IMAGE_HEIGHT,
  OVERLAY_WIDTH,
}) => {
  const {width} = useWindowDimensions();

  return (
    <>
      <ColorMatrix matrix={concatColorMatrices([sepia(0.2)])} />
      <Group blendMode="overlay">
        <Rect
          x={width / 2 - OVERLAY_WIDTH / 2}
          y={0}
          width={OVERLAY_WIDTH}
          height={IMAGE_HEIGHT}>
          <RadialGradient
            c={vec(OVERLAY_WIDTH / 2, OVERLAY_WIDTH / 2)}
            r={OVERLAY_WIDTH}
            colors={[
              'rgba(208, 186, 142,0.2)',
              'rgba(54, 3, 9,0.85)',
              '#1d0210',
            ]}
          />
        </Rect>
      </Group>
    </>
  );
};

export const Gingham: React.FC = () => {
  return (
    <>
      <BlendColor color={'lavender'} mode="softLight" />
      <ColorMatrix matrix={concatColorMatrices([brightness(1.05)])} />
    </>
  );
};

export const Hudson: React.FC<FilterProps> = ({
  IMAGE_HEIGHT,
  OVERLAY_WIDTH,
}) => {
  const {width} = useWindowDimensions();

  return (
    <>
      <ColorMatrix
        matrix={concatColorMatrices([brightness(1.2), saturate(1.1)])}
      />
      <Group blendMode="overlay">
        <Rect
          x={width / 2 - OVERLAY_WIDTH / 2}
          y={0}
          width={OVERLAY_WIDTH}
          height={IMAGE_HEIGHT}>
          <RadialGradient
            c={vec(OVERLAY_WIDTH / 2, OVERLAY_WIDTH / 2)}
            r={OVERLAY_WIDTH}
            colors={['rgba(166, 177, 255,0.5)', '#342134']}
          />
        </Rect>
      </Group>
    </>
  );
};

export const Inkwell: React.FC = () => {
  return (
    <>
      <ColorMatrix
        matrix={concatColorMatrices([
          sepia(0.3),
          brightness(1.1),
          grayscale(1),
        ])}
      />
    </>
  );
};
export const Kelvin: React.FC = () => {
  return (
    <>
      <BlendColor color={'#382c34'} mode="colorDodge" />
    </>
  );
};
export const Lark: React.FC = () => {
  return (
    <>
      <BlendColor color={'rgba(242, 242, 242, 0.8)'} mode="darken" />
      <BlendColor color={'#22253f'} mode="colorDodge" />
    </>
  );
};

export const Lofi: React.FC<FilterProps> = ({IMAGE_HEIGHT, OVERLAY_WIDTH}) => {
  const {width} = useWindowDimensions();

  return (
    <>
      <ColorMatrix
        matrix={concatColorMatrices([saturate(1.5), brightness(1.1)])}
      />
      <Group blendMode="multiply">
        <Rect
          x={width / 2 - OVERLAY_WIDTH / 2}
          y={0}
          width={OVERLAY_WIDTH}
          height={IMAGE_HEIGHT}>
          <RadialGradient
            c={vec(OVERLAY_WIDTH / 2, OVERLAY_WIDTH / 2)}
            r={OVERLAY_WIDTH}
            colors={['transparent', 'rgba(34, 34, 34,1.5)']}
          />
        </Rect>
      </Group>
    </>
  );
};

export const Maven: React.FC = () => {
  return (
    <>
      <BlendColor color={'rgba(3, 230, 26, 0.2)'} mode="hue" />
      <ColorMatrix
        matrix={concatColorMatrices([
          sepia(0.25),
          brightness(0.95),
          saturate(1.5),
        ])}
      />
    </>
  );
};

export const Mayfair: React.FC<FilterProps> = ({
  IMAGE_HEIGHT,
  OVERLAY_WIDTH,
}) => {
  const {width} = useWindowDimensions();

  return (
    <>
      <ColorMatrix matrix={concatColorMatrices([sepia(0.2)])} />
      <Group blendMode="overlay">
        <Rect
          x={width / 2 - OVERLAY_WIDTH / 2}
          y={0}
          width={OVERLAY_WIDTH}
          height={IMAGE_HEIGHT}>
          <RadialGradient
            c={vec(OVERLAY_WIDTH / 2, OVERLAY_WIDTH / 2)}
            r={OVERLAY_WIDTH / 4}
            colors={[
              'rgba(255, 255, 255, 0.8)',
              'rgba(255, 200, 200, 0.6)',
              'rgba(17, 17, 17,0.6)',
            ]}
          />
        </Rect>
      </Group>
    </>
  );
};

export const Moon: React.FC = () => {
  return (
    <>
      <BlendColor color={'#a0a0a0'} mode="softLight" />
      <BlendColor color={'#383838'} mode="lighten" />
      <ColorMatrix
        matrix={concatColorMatrices([grayscale(1), brightness(1.1)])}
      />
    </>
  );
};
export const Nashville: React.FC = () => {
  return (
    <>
      <BlendColor color={'rgba(0, 70, 150, 0.4)'} mode="lighten" />
      <BlendColor color={'rgba(247, 176, 153, 0.56)'} mode="darken" />
      <ColorMatrix
        matrix={concatColorMatrices([
          sepia(0.2),
          brightness(1.05),
          saturate(1.2),
        ])}
      />
    </>
  );
};

export const Perpetua: React.FC<FilterProps> = ({
  IMAGE_HEIGHT,
  OVERLAY_WIDTH,
}) => {
  const {width} = useWindowDimensions();
  return (
    <>
      <Group blendMode="softLight">
        <Rect
          x={width / 2 - OVERLAY_WIDTH / 2}
          y={0}
          width={OVERLAY_WIDTH}
          height={IMAGE_HEIGHT}>
          <LinearGradient
            start={vec(OVERLAY_WIDTH * 2, 0)}
            end={vec(OVERLAY_WIDTH * 2, OVERLAY_WIDTH * 2)}
            colors={['#005b9a', '#e6c13d']}
          />
        </Rect>
      </Group>
    </>
  );
};

export const Reyes: React.FC = () => {
  return (
    <>
      <BlendColor color={'#efcdad'} mode="softLight" />
      <ColorMatrix
        matrix={concatColorMatrices([
          sepia(0.22),
          brightness(1.1),
          saturate(0.75),
        ])}
      />
    </>
  );
};

export const Rise: React.FC<FilterProps> = ({IMAGE_HEIGHT, OVERLAY_WIDTH}) => {
  const {width} = useWindowDimensions();

  return (
    <>
      <ColorMatrix
        matrix={concatColorMatrices([
          brightness(1.05),
          sepia(0.2),
          saturate(0.9),
        ])}
      />
      <Group blendMode="overlay">
        <Rect
          x={width / 2 - OVERLAY_WIDTH / 2}
          y={0}
          width={OVERLAY_WIDTH}
          height={IMAGE_HEIGHT}>
          <RadialGradient
            c={vec(OVERLAY_WIDTH / 2, OVERLAY_WIDTH / 2)}
            r={OVERLAY_WIDTH}
            colors={['rgba(236, 205, 169, 0.15)', 'rgba(50, 30, 7, 0.4)']}
          />
        </Rect>
      </Group>
    </>
  );
};

export const Slumber: React.FC = () => {
  return (
    <>
      <BlendColor color={'rgba(125, 105, 24, 0.5)'} mode="softLight" />
      <BlendColor color={'rgba(69, 41, 12, 0.4)'} mode="lighten" />
      <ColorMatrix
        matrix={concatColorMatrices([saturate(0.66), brightness(1.05)])}
      />
    </>
  );
};

export const Stinson: React.FC = () => {
  return (
    <>
      <BlendColor color={'rgba(240, 149, 128, 0.2)'} mode="softLight" />
      <ColorMatrix
        matrix={concatColorMatrices([saturate(0.85), brightness(1.15)])}
      />
    </>
  );
};

export const Toaster: React.FC<FilterProps> = ({
  IMAGE_HEIGHT,
  OVERLAY_WIDTH,
}) => {
  const {width} = useWindowDimensions();

  return (
    <>
      <ColorMatrix matrix={concatColorMatrices([brightness(0.9)])} />
      <Group blendMode="screen">
        <Rect
          x={width / 2 - OVERLAY_WIDTH / 2}
          y={0}
          width={OVERLAY_WIDTH}
          height={IMAGE_HEIGHT}>
          <RadialGradient
            c={vec(OVERLAY_WIDTH / 2, OVERLAY_WIDTH / 2)}
            r={OVERLAY_WIDTH}
            colors={['#804e0f', '#3b003b']}
          />
        </Rect>
      </Group>
    </>
  );
};

export const Valencia: React.FC = () => {
  return (
    <>
      <BlendColor color={'#3a0339'} mode="exclusion" />
      <ColorMatrix
        matrix={concatColorMatrices([brightness(1.08), sepia(0.08)])}
      />
    </>
  );
};
export const Walden: React.FC = () => {
  return (
    <>
      <BlendColor color={'#0044cc'} mode="screen" />
      <ColorMatrix
        matrix={concatColorMatrices([brightness(1), sepia(0.3), saturate(1.6)])}
      />
    </>
  );
};
