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
 * Now includes a popover for descriptions using Tailwind group with z-index fix.
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
    <div className="flex flex-col h-full space-y-4 relative">
      {favorites.length === 0 ? (
        <p className="text-gray-500 text-sm">No favorites added yet.</p>
      ) : (
        <ul className="mt-2 space-y-2 relative">
          {favorites.map((fav) => (
            <li
              key={fav.id}
              className="group flex justify-between items-center bg-gray-100 p-2 rounded-lg relative overflow-visible">
              <div className="relative">
                <Link
                  href={`/categories/${fav.categorySlug}/${fav.id}`}
                  className="text-blue-600 hover:underline">
                  {fav.title}
                </Link>
                <div className="absolute left-0 mt-1 w-64 p-2 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-lg">
                  {fav.description}
                </div>
              </div>
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
