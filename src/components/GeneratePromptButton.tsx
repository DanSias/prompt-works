"use client";

/**
 * GeneratePromptButton Component
 *
 * - Provides buttons to copy generated prompts and open them in different LLM interfaces.
 * - Displays a toast notification if required fields are not filled.
 * - Fixes dropdown behavior and capitalizes LLM names properly.
 */

import { useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { toast } from "react-hot-toast";

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
    const prompt = generatePrompt();
    if (!prompt) {
      toast.error(
        "Please fill in all required fields before generating a prompt."
      );
      return;
    }
    navigator.clipboard.writeText(prompt);
    toast.success("Prompt copied to clipboard!");
    setIsDropdownOpen(false);
  };

  const openLLM = (llm: keyof typeof LLM_LINKS) => {
    const prompt = generatePrompt();
    if (!prompt) {
      toast.error(
        "Please fill in all required fields before generating a prompt."
      );
      return;
    }
    navigator.clipboard.writeText(prompt);
    window.open(LLM_LINKS[llm], "_blank");
    toast.success(`Prompt copied & opened in ${llm}!`);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-flex rounded-lg shadow">
      {/* Copy Prompt Button */}
      <button
        onClick={handleCopy}
        className="px-4 py-2 bg-blue-600 text-white rounded-l-lg hover:bg-blue-700 transition">
        Generate & Copy
      </button>

      {/* Dropdown Menu */}
      <Menu as="div" className="relative">
        <Menu.Button
          className="px-3 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition flex items-center h-full"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <ChevronDown className="w-5 h-5" />
        </Menu.Button>

        {isDropdownOpen && (
          <Menu.Items className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg overflow-hidden z-50">
            {Object.keys(LLM_LINKS).map((llm) => (
              <Menu.Item key={llm}>
                {({ active }) => (
                  <button
                    onClick={() => openLLM(llm as keyof typeof LLM_LINKS)}
                    className={`w-full px-4 py-2 text-left text-gray-800 ${
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
