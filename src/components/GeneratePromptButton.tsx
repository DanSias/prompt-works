"use client";

import { useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { toast } from "react-hot-toast";

const LLM_LINKS = {
  chatgpt: "https://chat.openai.com/",
  claude: "https://claude.ai/",
  gemini: "https://gemini.google.com/",
  deepseek: "https://deepseek.com/",
};

export default function GeneratePromptButton({
  generatePrompt,
}: {
  generatePrompt: () => string | null;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCopy = () => {
    const prompt = generatePrompt();
    if (prompt) {
      navigator.clipboard.writeText(prompt);
      toast.success("Prompt copied to clipboard!");
    }
  };

  const openLLM = (llm: keyof typeof LLM_LINKS) => {
    const prompt = generatePrompt();
    if (prompt) {
      navigator.clipboard.writeText(prompt);
      window.open(LLM_LINKS[llm], "_blank");
      toast.success(
        `Prompt copied & opened in ${
          llm.charAt(0).toUpperCase() + llm.slice(1)
        }!`
      );
    }
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
            {Object.entries(LLM_LINKS).map(([key]) => (
              <Menu.Item key={key}>
                {({ active }) => (
                  <button
                    onClick={() => openLLM(key as keyof typeof LLM_LINKS)}
                    className={`w-full px-4 py-2 text-left text-gray-800 ${
                      active ? "bg-gray-200" : ""
                    }`}>
                    Open {key.charAt(0).toUpperCase() + key.slice(1)}
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
