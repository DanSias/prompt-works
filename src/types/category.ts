import { ElementType } from "react";
// src/types/category.ts
export interface Category {
  slug: string;
  title: string;
  description: string;
  icon?: string | ElementType;
}
