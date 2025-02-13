"use client";

/**
 * Workflow Page Component
 *
 * This component renders a specific workflow page based on the category and workflow ID from the URL parameters.
 * - Uses `useParams()` to retrieve dynamic route parameters.
 * - Fetches the corresponding workflow and category from predefined data.
 * - Displays a `WorkflowForm` component if the workflow exists.
 * - Shows a fallback message with a home link if the workflow is not found.
 */

import Link from "next/link";
import { useParams } from "next/navigation";
import { categories } from "@/data/categories";
import { categoryWorkflowsMap } from "@/data/workflows";
import WorkflowForm from "@/components/WorkflowForm";

export default function WorkflowPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const workflowId = params?.workflowId as string;

  const category = categories.find((cat) => cat.slug === slug);
  const workflows = category ? categoryWorkflowsMap[slug] ?? [] : [];
  const workflow = workflows.find((w) => w.id === workflowId);

  if (!category || !workflow) {
    return (
      <div className="p-8 max-w-2xl mx-auto bg-white rounded-lg">
        <p className="p-8 text-3xl text-red-600 text-center">
          Workflow not found.
        </p>
        <Link href="/" className="text-center text-blue-500">
          PromptWorks Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Render Workflow Form */}
      <WorkflowForm workflow={workflow} />
    </div>
  );
}
