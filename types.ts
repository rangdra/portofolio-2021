import { ComponentType } from "react";
import { IconType } from "react-icons";

export interface Skill {
  Icon: IconType | ComponentType<any>;
  name: string;
  level: string;
  bgColor?: string;
}

export type Category = "WEB" | "CMS" | "API" | "APP";

export interface Project {
  id: string | number;
  name: string;
  image_path: any;
  // optional gallery for the detail modal; falls back to image_path
  images?: string[];
  deployed_url: string | null;
  github_url: string | null;
  category: Category[];
  description: string;
  key_points: string[];
}

export interface Service {
  Icon: IconType | ComponentType<any>;
  title: string;
  about: string;
}
