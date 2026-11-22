import type { Category } from "./types";

export const LIST_LIMIT = 8;

export const categoryLabel = (category: Category) => (category === "APP" ? "MOBILE" : category);

// Each cover has a thumbnail and a preview alongside the full image.
export const projectCover = (src: string, width: 192 | 768) => src.replace(/\.webp$/, `-${width}.webp`);
