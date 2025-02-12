"use client";

import { categories } from "@/data/categories";
import { categoryWorkflowsMap } from "@/data/workflows";
import CreatableSelect from "react-select/creatable";
import { useState } from "react";
import { toast } from "react-hot-toast"; // Add react-hot-toast for notifications
import Breadcrumbs from "@/components/Breadcrumbs";

export default function WorkflowPage({
  params,
}: {
  params: { slug: string; workflowId: string };
}) {
  const category = categories.find((cat) => cat.slug === params.slug);
  const workflows = categoryWorkflowsMap[params.slug];
  const workflow = workflows?.find((w) => w.id === params.workflowId);

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!category || !workflow) {
    return <p className="p-8 text-xl text-red-600">Workflow not found.</p>;
  }

  const handleInputChange = (value: string, fieldName: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const generateAndCopyPrompt = () => {
    const newErrors: Record<string, string> = {};

    workflow.fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all required fields.");
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    let prompt = workflow.examplePrompt || "";
    workflow.fields.forEach((field) => {
      prompt = prompt.replace(`{${field.name}}`, formData[field.name] || "");
    });

    navigator.clipboard.writeText(prompt);
    toast.success(`Prompt for "${workflow.title}" copied to clipboard!`);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{workflow.title}</h1>
      <p className="text-gray-600 mb-6">{workflow.description}</p>

      <Breadcrumbs />

      {/* Dynamic Form Inputs */}
      <div className="space-y-4 mb-6">
        {workflow.fields.map((field) => (
          <div key={field.name}>
            <label className="block font-medium mb-1">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {field.type === "select" ? (
              <CreatableSelect
                options={field.options?.map((option) => ({
                  label: option,
                  value: option,
                }))}
                onChange={(selectedOption) =>
                  handleInputChange(selectedOption?.value || "", field.name)
                }
                placeholder={field.placeholder}
                isClearable
              />
            ) : field.type === "textarea" ? (
              <textarea
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={(e) => handleInputChange(e.target.value, field.name)}
                className="border p-2 w-full rounded h-32 resize-none"
              />
            ) : (
              <input
                type="text"
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={(e) => handleInputChange(e.target.value, field.name)}
                className="border p-2 w-full rounded"
              />
            )}
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={generateAndCopyPrompt}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Generate & Copy Prompt
      </button>
    </div>
  );
}
