"use client";

import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { Workflow, WorkflowField } from "@/types/workflow";
import Breadcrumbs from "@/components/Breadcrumbs";
import FavoriteButton from "./FavoriteButton";
import GeneratePromptButton from "./GeneratePromptButton";

/**
 * WorkflowForm Component
 *
 * Renders dynamic input fields for a workflow, manages form state, validation,
 * and provides an option to favorite/unfavorite the workflow.
 */

export default function WorkflowForm({ workflow }: { workflow: Workflow }) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (value: string, fieldName: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const generatePrompt = (): string | null => {
    const newErrors: Record<string, string> = {};

    workflow.fields.forEach((field: WorkflowField) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return null;
    }

    // Clear errors if validation passes
    setErrors({});

    let prompt = workflow.examplePrompt || "";
    workflow.fields.forEach((field) => {
      prompt = prompt.replace(`{${field.name}}`, formData[field.name] || "");
    });

    return prompt;
  };

  return (
    <div className="space-y-4 mb-6">
      <div className="mb-4">
        <Breadcrumbs />
      </div>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">{workflow.title}</h1>
        <FavoriteButton workflow={workflow} size={32} />
      </div>
      <p className="text-gray-600 mb-8">{workflow.description}</p>

      {/* Estimated Time & Difficulty */}
      <div className="flex items-center gap-4 text-sm text-gray-500">
        {workflow.estimatedTime && (
          <span className="px-2 py-1 bg-gray-200 rounded-md">
            ⏳ {workflow.estimatedTime}
          </span>
        )}
        {workflow.difficultyLevel && (
          <span className="px-2 py-1 bg-gray-200 rounded-md">
            ⚡ {workflow.difficultyLevel}
          </span>
        )}
      </div>
      <hr className="text-zinc-300" />

      {/* Dynamic Form Inputs */}
      {workflow.fields.map((field) => (
        <div key={field.name}>
          <label className="block font-medium mb-1">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          {field.type === "select" ? (
            <CreatableSelect
              options={field.options?.map((option: string) => ({
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

      {/* Generate Prompt Button */}
      <div className="flex justify-end mt-6">
        <GeneratePromptButton generatePrompt={generatePrompt} />
      </div>
    </div>
  );
}
