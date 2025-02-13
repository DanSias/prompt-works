/**
 * Settings Utility Functions
 *
 * Provides functions to manage user settings using localStorage.
 * Includes methods to toggle dark mode, set favorite LLM, manage display preferences, and reset all settings.
 * Safe for Server-Side Rendering (SSR) environments.
 */

interface AppSettings {
  darkMode: boolean;
  favoriteLLM: string;
  displayMode: "compact" | "detailed";
  defaultCategory?: string;
  defaultWorkflow?: string;
}

// Retrieve settings from localStorage
export const getSettings = (): AppSettings => {
  if (typeof window === "undefined")
    return { darkMode: false, favoriteLLM: "ChatGPT", displayMode: "detailed" };
  const settings = localStorage.getItem("appSettings");
  return settings
    ? JSON.parse(settings)
    : { darkMode: false, favoriteLLM: "ChatGPT", displayMode: "detailed" };
};

// Save settings to localStorage
export const saveSettings = (settings: AppSettings) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("appSettings", JSON.stringify(settings));
};

// Toggle dark mode
export const toggleDarkMode = () => {
  const settings = getSettings();
  const updatedSettings: AppSettings = {
    ...settings,
    darkMode: !settings.darkMode,
  };
  saveSettings(updatedSettings);
  return updatedSettings.darkMode;
};

// Set favorite LLM
export const setFavoriteLLM = (llm: string) => {
  const settings = getSettings();
  const updatedSettings: AppSettings = { ...settings, favoriteLLM: llm };
  saveSettings(updatedSettings);
};

// Toggle between compact and detailed display modes
export const toggleDisplayMode = () => {
  const settings = getSettings();
  const newMode: "compact" | "detailed" =
    settings.displayMode === "compact" ? "detailed" : "compact";
  const updatedSettings: AppSettings = { ...settings, displayMode: newMode };
  saveSettings(updatedSettings);
  return newMode;
};

// Reset all settings and favorites
export const resetAppData = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("appSettings");
  localStorage.removeItem("favorites");
};
