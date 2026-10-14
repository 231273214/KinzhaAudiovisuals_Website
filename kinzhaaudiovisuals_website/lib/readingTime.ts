const BASE_MS = 2500;     
const MS_PER_WORD = 220;  
const MIN_MS = 6000;     

export function readingTimeMs(...texts: string[]) {
  const words = texts.join(" ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(MIN_MS, BASE_MS + words * MS_PER_WORD);
}