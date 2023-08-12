import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getOptimizedImageUrl(url: string, x: number, y: number) {
  return `https://res.cloudinary.com/demo/image/fetch/w_${x},f_${y}/${url}`;
}
