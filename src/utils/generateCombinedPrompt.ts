/**
 * utils/generateProfilePrompt.ts
 *
 * Utility to generate user profile context for prompts using profile from localStorage.
 */
import { getUserProfile } from "@/utils/userProfile";

export function generateCombinedPrompt(basePrompt: string): string {
  const userProfile = getUserProfile() || {};
  const { businessIndustry, role, preferredTone, aiGoal } = userProfile;

  const profileParts: string[] = [];

  if (businessIndustry) {
    profileParts.push(`a professional in ${businessIndustry}`);
  }
  if (role) {
    profileParts.push(`working in the role of ${role}`);
  }
  if (preferredTone) {
    profileParts.push(`with a ${preferredTone} tone`);
  }
  if (aiGoal) {
    profileParts.push(`with a focus on achieving the goal of ${aiGoal}`);
  }

  const profileContext =
    profileParts.length > 0
      ? `Tailor the response to focus on the needs of ${profileParts.join(
          ", "
        )}.`
      : "";

  return `${basePrompt}\n\n---\n${profileContext}`.trim();
}
