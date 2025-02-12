"use client";

import { useState, useMemo } from "react";
import { categories } from "@/data/categories";
import { categoryWorkflowsMap } from "@/data/workflows";
import { Category } from "@/types/category";
import { Workflow } from "@/types/workflow";
import Link from "next/link";
import { Search } from "lucide-react";

/**
 * SearchBar Component
 *
 * Allows users to search across all categories and workflows by title and description.
 * Displays dynamic search results with links to the relevant pages.
 */

export default function SearchBar() {
  const [query, setQuery] = useState("");

  // Define the type of filteredResults
  const filteredResults: {
    categories: Category[];
    workflows: (Workflow & { categorySlug: string })[];
  } = useMemo(() => {
    if (!query) return { categories: [], workflows: [] };

    const lowerQuery = query.toLowerCase();

    // Filter categories
    const matchingCategories = categories.filter(
      (category) =>
        category.title.toLowerCase().includes(lowerQuery) ||
        category.description.toLowerCase().includes(lowerQuery)
    );

    // Filter workflows across all categories
    const matchingWorkflows = Object.entries(categoryWorkflowsMap).flatMap(
      ([slug, workflows]) =>
        workflows
          .filter(
            (workflow) =>
              workflow.title.toLowerCase().includes(lowerQuery) ||
              workflow.description.toLowerCase().includes(lowerQuery)
          )
          .map((workflow) => ({
            ...workflow,
            categorySlug: slug,
          }))
    );

    return { categories: matchingCategories, workflows: matchingWorkflows };
  }, [query]);

  return (
    <div className="relative w-full max-w-lg mx-auto mt-4">
      <div className="flex items-center border rounded-lg p-2 bg-white shadow-sm">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search categories or workflows..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="ml-2 w-full outline-none text-sm"
        />
      </div>

      {/* Display search results */}
      {query &&
        (filteredResults.categories.length > 0 ||
          filteredResults.workflows.length > 0) && (
          <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
            {/* Display matching categories */}
            {filteredResults.categories.length > 0 && (
              <div className="p-2 border-b">
                <h3 className="text-gray-500 text-xs uppercase mb-1">
                  Categories
                </h3>
                {filteredResults.categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/categories/${category.slug}`}
                    className="block px-2 py-1 hover:bg-gray-100 text-sm text-gray-800">
                    {category.title}
                  </Link>
                ))}
              </div>
            )}

            {/* Display matching workflows */}
            {filteredResults.workflows.length > 0 && (
              <div className="p-2">
                <h3 className="text-gray-500 text-xs uppercase mb-1">
                  Workflows
                </h3>
                {filteredResults.workflows.map((workflow) => (
                  <Link
                    key={workflow.id}
                    href={`/categories/${workflow.categorySlug}/${workflow.id}`}
                    className="block px-2 py-1 hover:bg-gray-100 text-sm text-gray-800">
                    {workflow.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

      {/* Show message if no results found */}
      {query &&
        filteredResults.categories.length === 0 &&
        filteredResults.workflows.length === 0 && (
          <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg p-2 text-center text-gray-500 text-sm">
            No results found.
          </div>
        )}
    </div>
  );
}
