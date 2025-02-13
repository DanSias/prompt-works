"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { categoryWorkflowsMap } from "@/data/workflows";
// import { Workflow } from "@/types/workflow";
import Link from "next/link";
import { Search } from "lucide-react";

/**
 * Enhanced SearchBar Component
 * - Removed category search
 * - Displays results in two lists: Title matches first, then description matches.
 * - Highlights search matches in titles.
 */
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredResults = useMemo(() => {
    if (!query) return { titleMatches: [], descriptionMatches: [] };
    const lowerQuery = query.toLowerCase();

    const workflows = Object.values(categoryWorkflowsMap)
      .flat()
      .map((workflow) => ({ ...workflow }));

    const titleMatches = workflows.filter((w) =>
      w.title.toLowerCase().includes(lowerQuery)
    );
    const descriptionMatches = workflows.filter(
      (w) =>
        !titleMatches.includes(w) &&
        w.description.toLowerCase().includes(lowerQuery)
    );

    return { titleMatches, descriptionMatches };
  }, [query]);

  const highlightMatch = (text: string) => {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<strong>$1</strong>");
  };

  return (
    <div className="relative w-full max-w-lg mx-auto z-50">
      <div className="flex items-center border rounded-lg p-2 bg-white shadow-sm">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search 100+ Workflows to Boost Your Productivity..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="ml-2 w-full outline-none text-sm text-gray-900 placeholder-gray-400"
        />
      </div>
      {query && (
        <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg max-h-48 overflow-y-auto z-50">
          {filteredResults.titleMatches.length > 0 && (
            <div className="p-2">
              <h3 className="text-gray-500 text-xs uppercase mb-1">
                Title Matches
              </h3>
              {filteredResults.titleMatches.map((workflow) => (
                <Link
                  key={workflow.id}
                  href={`/categories/${workflow.categorySlug}/${workflow.id}`}
                  className="block px-2 py-1 hover:bg-gray-100 text-sm text-gray-800"
                  dangerouslySetInnerHTML={{
                    __html: highlightMatch(workflow.title),
                  }}
                />
              ))}
            </div>
          )}
          {filteredResults.descriptionMatches.length > 0 && (
            <div className="p-2 border-t">
              <h3 className="text-gray-500 text-xs uppercase mb-1">
                Description Matches
              </h3>
              {filteredResults.descriptionMatches.map((workflow) => (
                <Link
                  key={workflow.id}
                  href={`/workflows/${workflow.id}`}
                  className="block px-2 py-1 hover:bg-gray-100 text-sm text-gray-800">
                  {workflow.title}
                </Link>
              ))}
            </div>
          )}
          {!filteredResults.titleMatches.length &&
            !filteredResults.descriptionMatches.length && (
              <div className="p-2 text-center text-gray-500 text-sm">
                No results found.
              </div>
            )}
        </div>
      )}
    </div>
  );
}
