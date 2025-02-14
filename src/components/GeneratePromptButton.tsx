"use client";

/**
 * GeneratePromptButton Component
 *
 * - Uses generateCombinedPrompt to include user profile details in prompts.
 * - Provides buttons to copy prompts or open them in different LLM interfaces.
 */

import { useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { toast } from "react-hot-toast";
import { generateCombinedPrompt } from "@/utils/generateCombinedPrompt";

const LLM_LINKS = {
  ChatGPT: "https://chat.openai.com/",
  Claude: "https://claude.ai/",
  Gemini: "https://gemini.google.com/",
  DeepSeek: "https://deepseek.com/",
};

export default function GeneratePromptButton({
  generatePrompt,
}: {
  generatePrompt: () => string | null;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCopy = () => {
    const basePrompt = generatePrompt();
    if (!basePrompt) {
      toast.error(
        "Please fill in all required fields before generating a prompt."
      );
      return;
    }
    const combinedPrompt = generateCombinedPrompt(basePrompt);
    navigator.clipboard.writeText(combinedPrompt);
    toast.success("Prompt copied to clipboard!");
    setIsDropdownOpen(false);
  };

  const openLLM = (llm: keyof typeof LLM_LINKS) => {
    const basePrompt = generatePrompt();
    if (!basePrompt) {
      toast.error(
        "Please fill in all required fields before generating a prompt."
      );
      return;
    }
    const combinedPrompt = generateCombinedPrompt(basePrompt);
    navigator.clipboard.writeText(combinedPrompt);
    window.open(LLM_LINKS[llm], "_blank");
    toast.success(`Prompt copied & opened in ${llm}!`);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-flex rounded-lg shadow">
      <button
        onClick={handleCopy}
        className="px-4 py-2 bg-blue-600 text-white rounded-l-lg hover:bg-blue-700 transition">
        Generate & Copy
      </button>
      <Menu as="div" className="relative">
        <Menu.Button
          className="px-3 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition flex items-center h-full"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <ChevronDown className="w-5 h-5" />
        </Menu.Button>
        {isDropdownOpen && (
          <Menu.Items className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg z-50">
            {Object.keys(LLM_LINKS).map((llm) => (
              <Menu.Item key={llm}>
                {({ active }) => (
                  <button
                    onClick={() => openLLM(llm as keyof typeof LLM_LINKS)}
                    className={`w-full px-4 py-2 text-left ${
                      active ? "bg-gray-200" : ""
                    }`}>
                    Open {llm}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        )}
      </Menu>
    </div>
  );
}
