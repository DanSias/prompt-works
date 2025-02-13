// Category Page Component
// Displays workflows for a selected category using dynamic routing.
// Retrieves category details and workflows based on URL parameters.

"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { categories } from "@/data/categories";
import { categoryWorkflowsMap } from "@/data/workflows";
import WorkflowCards from "@/components/categories/WorkflowCards";

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;

  if (!slug) {
    return (
      <div className="p-8 mt-12 text-center bg-white rounded-lg shadow max-w-3xl mx-auto">
        <p className="text-2xl text-red-600 font-semibold">
          Category not found.
        </p>
        <p className="text-gray-600 mt-2">
          The category you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
          Return Home
        </Link>
      </div>
    );
  }

  const category = categories.find((cat) => cat.slug === slug);
  const workflows = categoryWorkflowsMap[slug] ?? [];

  if (!category) {
    return (
      <div className="p-8 mt-12 text-center bg-white rounded-lg shadow max-w-3xl mx-auto">
        <p className="text-2xl text-red-600 font-semibold">
          Category not found.
        </p>
        <p className="text-gray-600 mt-2">
          The category you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold my-4 text-center">{category.title}</h1>
      <p className="text-gray-600 mb-12 text-center">{category.description}</p>
      <WorkflowCards workflows={workflows} categorySlug={slug} />
    </div>
  );
}
