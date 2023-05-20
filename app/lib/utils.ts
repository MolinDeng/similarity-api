import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// py-2 px-2 -> p-2
export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}
