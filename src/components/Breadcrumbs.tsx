// src/components/Breadcrumbs.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/categories";
import { categoryWorkflowsMap } from "@/data/workflows";
import { Menu } from "@headlessui/react";
import { ChevronRight, ChevronDown } from "lucide-react";

/**
 * Breadcrumbs Component
 *
 * This component generates dynamic breadcrumb navigation based on the current route.
 * - Hovering over the **Category** shows a dropdown with all categories.
 * - Hovering over the **Workflow** shows a dropdown with all workflows in the selected category.
 *
 * Usage:
 * Place <Breadcrumbs /> at the top of category and workflow pages to enhance navigation.
 */

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);

  const currentCategorySlug = pathParts[1]; // categories/[slug]
  const currentWorkflowId = pathParts[2]; // categories/[slug]/[workflowId]

  const currentCategory = categories.find(
    (cat) =>
      cat.slug.trim().toLowerCase() ===
      currentCategorySlug?.trim().toLowerCase()
  );

  const workflows = currentCategory
    ? categoryWorkflowsMap[currentCategory.slug] || []
    : [];
  const currentWorkflow = workflows.find((w) => w.id === currentWorkflowId);

  console.log("Current Pathname:", pathname);
  console.log("Path Parts:", pathParts);
  console.log("Current Category Slug:", currentCategorySlug);
  console.log("Categories Available:", categories);

  return (
    <nav className="relative z-10 flex items-center text-sm text-gray-600 space-x-2">
      {/* Home Link */}
      <Link href="/" className="hover:underline text-blue-600">
        Home
      </Link>
      <ChevronRight className="w-4 h-4" />

      {/* Category Dropdown */}
      {currentCategory ? (
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex items-center hover:underline text-blue-600">
            {currentCategory.title}
            <ChevronDown className="ml-1 w-4 h-4" />
          </Menu.Button>

          <Menu.Items className="absolute mt-2 w-56 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            {categories.map((category) => (
              <Menu.Item key={category.slug}>
                {({ active }) => (
                  <Link
                    href={`/categories/${category.slug}`}
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-gray-100" : ""
                    } text-gray-900 hover:bg-gray-100`}>
                    {category.title}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      ) : (
        <span className="text-gray-400">Unknown Category</span>
      )}

      {currentWorkflow && <ChevronRight className="w-4 h-4" />}

      {/* Workflow Dropdown */}
      {currentWorkflow ? (
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex items-center hover:underline text-blue-600">
            {currentWorkflow.title}
            <ChevronDown className="ml-1 w-4 h-4" />
          </Menu.Button>

          <Menu.Items className="absolute mt-2 w-56 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            {workflows.map((workflow) => (
              <Menu.Item key={workflow.id}>
                {({ active }) => (
                  <Link
                    href={
                      currentCategory
                        ? `/categories/${currentCategory.slug}/${workflow.id}`
                        : "#"
                    }
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-gray-100" : ""
                    } text-gray-900 hover:bg-gray-100`}>
                    {workflow.title}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      ) : (
        <span className="text-gray-400">Unknown Workflow</span>
      )}
    </nav>
  );
}
