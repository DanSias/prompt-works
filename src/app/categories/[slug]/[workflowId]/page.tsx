"use client";

import Link from "next/link";
import { categories } from "@/data/categories";
import { categoryWorkflowsMap } from "@/data/workflows";
import WorkflowForm from "@/components/WorkflowForm";

export default function WorkflowPage({
  params,
}: {
  params: { slug: string; workflowId: string };
}) {
  const category = categories.find((cat) => cat.slug === params.slug);
  const workflows = categoryWorkflowsMap[params.slug];
  const workflow = workflows?.find((w) => w.id === params.workflowId);

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
    <div className="p-8 max-w-5xl mx-auto bg-white rounded-lg">
      {/* Render Workflow Form */}
      <WorkflowForm workflow={workflow} />
    </div>
  );
}
