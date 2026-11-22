export interface Skill {
  name: string;
  level: string;
  bgColor?: string;
}

export type Category = "WEB" | "CMS" | "API" | "APP";

export interface Project {
  id: string | number;
  name: string;
  image_path: string;
  // optional gallery for the detail modal; falls back to image_path
  images?: string[];
  deployed_url: string | null;
  github_url: string | null;
  category: Category[];
  description: string;
  key_points: string[];
}

export interface Service {
  title: string;
  about: string;
}
