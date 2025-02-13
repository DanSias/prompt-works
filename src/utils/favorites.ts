import { Workflow } from "@/types/workflow";

/**
 * Favorites Utility Functions
 *
 * Provides functions to manage favorite workflows using localStorage.
 * Includes methods to add, remove, retrieve, and check favorites.
 * Safe for Server-Side Rendering (SSR) environments.
 */

export const getFavorites = (): Workflow[] => {
  if (typeof window === "undefined") return [];
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

export const saveFavorites = (favorites: Workflow[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const addFavorite = (workflow: Workflow & { categorySlug: string }) => {
  if (typeof window === "undefined") return;
  const favorites = getFavorites();
  if (!favorites.find((fav) => fav.id === workflow.id)) {
    favorites.push(workflow);
    saveFavorites(favorites);
  }
};

export const removeFavorite = (workflowId: string) => {
  if (typeof window === "undefined") return;
  let favorites = getFavorites();
  favorites = favorites.filter((fav) => fav.id !== workflowId);
  saveFavorites(favorites);
};

export const isFavorite = (workflowId: string) => {
  if (typeof window === "undefined") return false;
  const favorites = getFavorites();
  return favorites.some((fav) => fav.id === workflowId);
};
