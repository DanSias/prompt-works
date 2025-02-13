"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getFavorites, removeFavorite } from "@/utils/favorites";
import { Trash } from "lucide-react";

/**
 * FavoritesContent Component
 *
 * Displays a list of user-favorited workflows inside the Favorites SlideOver.
 * Allows users to navigate to workflows or remove them from favorites.
 */

export default function FavoritesContent() {
  const [favorites, setFavorites] = useState(getFavorites());

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemoveFavorite = (workflowId: string) => {
    removeFavorite(workflowId);
    setFavorites(getFavorites());
  };

  return (
    <div className="flex flex-col h-full space-y-4">
      {favorites.length === 0 ? (
        <p className="text-gray-500 text-sm">No favorites added yet.</p>
      ) : (
        <ul className="mt-2 space-y-2">
          {favorites.map((fav) => (
            <li
              key={fav.id}
              className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
              <Link
                href={`/categories/${fav.categorySlug}/${fav.id}`}
                className="text-blue-600 dark:text-blue-400 hover:underline">
                {fav.title}
              </Link>
              <button
                onClick={() => handleRemoveFavorite(fav.id)}
                className="text-red-500 hover:text-red-700">
                <Trash className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
