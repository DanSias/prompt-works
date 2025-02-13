"use client";

import { useState } from "react";
import {
  getSettings,
  toggleDarkMode,
  setFavoriteLLM,
  toggleDisplayMode,
  resetAppData,
} from "@/utils/settings";

/**
 * SettingsContent Component
 *
 * Displays user settings including dark mode toggle, favorite LLM selection,
 * display mode preferences, and reset app data functionality.
 */

export default function SettingsContent() {
  const [settings, setSettings] = useState(getSettings());

  const handleDarkModeToggle = () => {
    const darkMode = toggleDarkMode();
    setSettings((prev) => ({ ...prev, darkMode }));
  };

  const handleDisplayModeToggle = () => {
    const displayMode = toggleDisplayMode();
    setSettings((prev) => ({ ...prev, displayMode }));
  };

  const handleLLMChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFavoriteLLM(event.target.value);
    setSettings((prev) => ({ ...prev, favoriteLLM: event.target.value }));
  };

  const handleReset = () => {
    resetAppData();
    setSettings(getSettings());
  };

  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex-grow space-y-4">
        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
          <button
            onClick={handleDarkModeToggle}
            className={`px-3 py-1 rounded ${
              settings.darkMode
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}>
            {settings.darkMode ? "On" : "Off"}
          </button>
        </div>

        {/* Display Mode Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">Display Mode</span>
          <button
            onClick={handleDisplayModeToggle}
            className={`px-3 py-1 rounded ${
              settings.displayMode === "compact"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}>
            {settings.displayMode === "compact" ? "Compact" : "Detailed"}
          </button>
        </div>

        {/* Favorite LLM Selector */}
        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">Favorite LLM</span>
          <select
            value={settings.favoriteLLM}
            onChange={handleLLMChange}
            className="border rounded px-2 py-1 bg-white dark:bg-gray-800 dark:text-gray-300">
            <option value="ChatGPT">ChatGPT</option>
            <option value="Claude">Claude</option>
            <option value="Gemini">Gemini</option>
            <option value="DeepSeek">DeepSeek</option>
          </select>
        </div>
      </div>

      {/* Reset Data Button at the Bottom */}
      <div className="mt-auto flex items-center justify-between">
        <span className="text-gray-700 dark:text-gray-300">Reset App Data</span>
        <button
          onClick={handleReset}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
          Reset
        </button>
      </div>
    </div>
  );
}
