import { ColorMap } from '@CONSTANT/ColorMap';

export const getColor = (initial: string) => {
  if (!initial) return ColorMap['A'];
  return ColorMap[initial.toUpperCase()];
};

export const createAttachmentImgSrc = (file: File) => {
  return URL.createObjectURL(file);
};
