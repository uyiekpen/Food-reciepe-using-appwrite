import { ClassValue, clsx } from "clsx";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...input: ClassValue[]): string {
  return twMerge(clsx(input));
}

export const carouselSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function truncateParagraph(paragraph: string, count: number): string {
  const words = paragraph.split(" ");
  const truncatedWords = words.slice(0, count);
  const truncatedParagraph = truncatedWords.join(" ");

  if (words.length > count) {
    return truncatedParagraph + "...";
  } else {
    return truncatedParagraph;
  }
}

export function isNumber(value: any): boolean {
  return typeof value === "number" && !isNaN(value);
}

export function capitalizeText(text: string): string {
  // Convert the first character of the text to uppercase and concatenate it with the rest of the text in lowercase
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function extractDateInfo(dateString: string): {
  day: number;
  month: string;
  year: number;
} {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  // Extracting month in the format JAN, FEB, etc.
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getUTCMonth()];

  return { day, month, year };
}

export function isNotNullOrEmpty(obj: any): boolean {
  if (obj === null || obj === undefined) {
    return false;
  }

  if (typeof obj === "string" || Array.isArray(obj)) {
    return obj.length > 0;
  }

  if (typeof obj === "object") {
    return Object.keys(obj).length > 0;
  }

  return true;
}

export const useOutsideClick = (callback: () => void) => {
  const innerRef = useRef<any>();
  const callbackRef = useRef<any>();
  // set current callback in ref, before second useEffect uses it
  useEffect(() => {
    // useEffect wrapper to be safe for concurrent mode
    callbackRef.current = callback;
  });
  function handleClick(e: any) {
    if (
      innerRef.current &&
      callbackRef.current &&
      !innerRef.current.contains(e.target)
    ) {
      callbackRef.current(e);
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    // read most recent callback and innerRef dom node from refs
  }, []); // no need for callback + innerRef dep
  return innerRef; // return ref; client can omit `useRef`
};

export const formatNewLine = (str: string) => {
  return str.replace(/\n/gi, "&nbsp; \n");
};

export function capitalizeWords(sentence: string): string {
  const conjunctions = ["and", "but", "or", "nor", "for", "yet", "so"];
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (!conjunctions.includes(words[i].toLowerCase())) {
      words[i] =
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }

  return words.join(" ");
}
