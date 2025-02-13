"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveUserProfile, getUserProfile } from "@/utils/userProfile";
import { industries, tones, aiGoals } from "@/data/userOptions";
import CreatableSelect from "react-select/creatable";

/**
 * OnboardingForm Component
 *
 * Guides new users through a quick setup to personalize AI-generated prompts.
 * Stores user details in localStorage for future use.
 */
export default function OnboardingForm() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    businessIndustry: "",
    role: "",
    preferredTone: "",
    aiGoal: "",
  });

  useEffect(() => {
    const storedData = getUserProfile();
    if (storedData) {
      setUserData((prev) => ({
        businessIndustry: storedData.businessIndustry || prev.businessIndustry,
        role: storedData.role || prev.role,
        preferredTone: storedData.preferredTone || prev.preferredTone,
        aiGoal: storedData.aiGoal || prev.aiGoal,
      }));
    }
  }, []);

  const handleChange = (name: string, value: string) => {
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveUserProfile(userData);
    router.push("/categories"); // Redirect to main app
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">
        Personalize Your AI Experience
      </h1>
      <p className="text-gray-600 mb-6">
        Tell us a bit about yourself to enhance your AI-generated prompts.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Industry</span>
          <CreatableSelect
            options={industries.map((industry) => ({
              label: industry,
              value: industry,
            }))}
            value={
              userData.businessIndustry
                ? {
                    label: userData.businessIndustry,
                    value: userData.businessIndustry,
                  }
                : null
            }
            onChange={(selectedOption) =>
              handleChange("businessIndustry", selectedOption?.value || "")
            }
            className="w-full mt-1"
            isClearable
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Your Role</span>
          <input
            type="text"
            name="role"
            value={userData.role}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="e.g., Marketing Manager"
            className="w-full mt-1 p-2 border rounded"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Preferred Tone</span>
          <CreatableSelect
            options={tones.map((tone) => ({ label: tone, value: tone }))}
            value={
              userData.preferredTone
                ? {
                    label: userData.preferredTone,
                    value: userData.preferredTone,
                  }
                : null
            }
            onChange={(selectedOption) =>
              handleChange("preferredTone", selectedOption?.value || "")
            }
            className="w-full mt-1"
            isClearable
          />
        </label>

        <label className="block">
          <span className="text-gray-700">AI Goal</span>
          <CreatableSelect
            options={aiGoals.map((goal) => ({ label: goal, value: goal }))}
            value={
              userData.aiGoal
                ? { label: userData.aiGoal, value: userData.aiGoal }
                : null
            }
            onChange={(selectedOption) =>
              handleChange("aiGoal", selectedOption?.value || "")
            }
            className="w-full mt-1"
            isClearable
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Save & Continue
        </button>
      </form>
    </div>
  );
}
