import {Skia} from '@shopify/react-native-skia';

export const heartIcon = (width?: number, height?: number) =>
  Skia.SVG.MakeFromString(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${
      width ? width : 22
    }" height="${height ? height : 20}" viewBox="0 0 22 20" fill="none">
  <path d="M6 1.08325C3.239 1.08325 1 3.29925 1 6.03325C1 8.24025 1.875 13.4783 10.488 18.7733C10.6423 18.8671 10.8194 18.9168 11 18.9168C11.1806 18.9168 11.3577 18.8671 11.512 18.7733C20.125 13.4783 21 8.24025 21 6.03325C21 3.29925 18.761 1.08325 16 1.08325C13.239 1.08325 11 4.08325 11 4.08325C11 4.08325 8.761 1.08325 6 1.08325Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  )!;

export const heartFilledIcon = (width?: number, height?: number) =>
  Skia.SVG.MakeFromString(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${
      width ? width : 22
    }" height="${height ? height : 20}" viewBox="0 0 23 20" fill="none">
  <path d="M6 0C2.9629 0 0.5 2.48521 0.5 5.55134C0.5 8.02646 1.4625 13.9008 10.9368 19.839C11.1065 19.9443 11.3013 20 11.5 20C11.6987 20 11.8935 19.9443 12.0632 19.839C21.5375 13.9008 22.5 8.02646 22.5 5.55134C22.5 2.48521 20.0371 0 17 0C13.9629 0 11.5 3.36445 11.5 3.36445C11.5 3.36445 9.0371 0 6 0Z" fill="red"/>
  </svg>`,
  )!;

export const shareIcon = (width?: number, height?: number) =>
  Skia.SVG.MakeFromString(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${
      width ? width : 16
    }" height="${height ? height : 17}" viewBox="0 0 16 17" fill="none">
    <path d="M8 0.916748V10.5001" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 0.916748L11.75 5.08341" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.24984 5.08333L7.99984 0.916659" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.33325 8.8335V13.0002C1.33325 14.3809 2.45254 15.5002 3.83325 15.5002H12.1666C13.5473 15.5002 14.6666 14.3809 14.6666 13.0002V8.8335" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  )!;

export const commentIcon = (width?: number, height?: number) =>
  Skia.SVG.MakeFromString(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${
      width ? width : 16
    }" height="${height ? height : 16}" viewBox="0 0 16 16" fill="none">
  <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  )!;
