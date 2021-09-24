export interface Skill {
  Icon: any;
  name: string;
  level: string;
  bgColor?: string;
}

export type Category =
  | 'react'
  | 'nextjs'
  | 'landing page'
  | 'mern'
  | 'typescript';

export interface Project {
  id: number;
  name: string;
  image_path: any;
  deployed_url: string;
  github_url: string;
  category: Category[];
  description: string;
  key_points: string[];
}

export interface Service {
  Icon: any; //TODO fix any
  title: string;
  about: string;
}
