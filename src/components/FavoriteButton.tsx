"use client";

import { useState, useEffect } from "react";
import { addFavorite, removeFavorite, isFavorite } from "@/utils/favorites";
import { Heart } from "lucide-react";
import { Workflow } from "@/types/workflow";

interface FavoriteButtonProps {
  workflow: Workflow;
  size?: number;
}

export default function FavoriteButton({
  workflow,
  size = 32,
}: FavoriteButtonProps) {
  const [favorited, setFavorited] = useState(false);

  const onToggle = () => {
    if (favorited) {
      removeFavorite(workflow.id);
    } else {
      addFavorite({ ...workflow, categorySlug: workflow.categorySlug || "" });
    }
    setFavorited(!favorited);
  };

  useEffect(() => {
    if (workflow?.id) {
      setFavorited(isFavorite(workflow.id));
    }
  }, [workflow?.id]);

  return (
    <div className="relative inline-block">
      <button
        onClick={onToggle}
        className="relative flex items-center gap-2 text-gray-700 dark:text-gray-300 group">
        {/* Heart Icon */}
        <Heart
          className={`mt-1 transition-colors ${
            favorited ? "text-red-500 fill-red-500" : "text-gray-400"
          }`}
          style={{ width: size, height: size }}
        />

        {/* Tooltip (now inside button, only shows when hovering over icon) */}
        <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {favorited ? "Remove Favorite" : "Add to Favorites"}
        </span>
      </button>
    </div>
  );
}
