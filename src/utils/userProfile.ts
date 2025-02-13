/**
 * Utility functions for managing user profile settings in localStorage.
 */

const USER_PROFILE_KEY = "userDetails";

export function saveUserProfile(profile: Record<string, string>) {
  if (typeof window !== "undefined") {
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
  }
}

export function getUserProfile(): Record<string, string> | null {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(USER_PROFILE_KEY);
    return data ? JSON.parse(data) : null;
  }
  return null;
}

export function clearUserProfile() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(USER_PROFILE_KEY);
  }
}
