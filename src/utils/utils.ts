import { ColorMap } from "@CONSTANT/ColorMap";
import { DateEnity } from "@store/type";
import { format } from "date-fns";

export const getColor = (initial: string) => {
  if (!initial) return ColorMap["A"];
  return ColorMap[initial.toUpperCase()];
};

export const createAttachmentImgSrc = (file: File) => {
  return URL.createObjectURL(file);
};

export const formatDate = (date: DateEnity) => {
  // if start and end date is empty return empty string;
  if (!date.start && !date.end) return "";

  // if start date is empty return end date;
  if (!date.start) return format(new Date(date.end), "MMM dd");

  // if end date is empty return start date;
  if (!date.end) return format(new Date(date.start), "MMM dd");

  // if both start and end date are present and are same return start date;
  if (date.start === date.end) return format(new Date(date.start), "MMM dd");

  // if both start and end date are present and are different return both;
  return `${format(new Date(date.start), "MMM dd")} - ${format(new Date(date.end), "MMM dd")}`;
};
