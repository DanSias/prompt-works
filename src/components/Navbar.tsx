"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { Heart, Settings, User } from "lucide-react";
import NavbarLogo from "./NavbarLogo";
import SlideOverPanel from "@/components/SlideOverPanel";
import SettingsContent from "./SettingsContent";
import FavoritesContent from "./FavoritesContent";
import Modal from "@/components/Modal";
import OnboardingForm from "./OnboardingForm";

/**
 * Header Component
 *
 * Displays the PromptWorks logo, a truly centered search bar, and icons for favorites, settings, and profile.
 */
export default function Header() {
  const [isFavoritesOpen, setFavoritesOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false); // New state for profile modal

  return (
    <header className="sticky top-0 flex items-center justify-between p-4 px-8 bg-zinc-800 text-white shadow-md h-16">
      {/* Logo and Title */}
      <div>
        <NavbarLogo />
      </div>

      {/* Centered Search Bar */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-lg">
        <SearchBar />
      </div>

      {/* Icons for Favorites, Settings, and Profile */}
      <div className="flex items-center space-x-4">
        <Heart
          className="w-6 h-6 cursor-pointer hover:text-red-400"
          onClick={() => setFavoritesOpen(true)}
        />
        <Settings
          className="w-6 h-6 cursor-pointer hover:text-blue-400"
          onClick={() => setSettingsOpen(true)}
        />
        <User
          className="w-6 h-6 cursor-pointer hover:text-green-400"
          onClick={() => setProfileOpen(true)} // Open Profile Modal
        />
      </div>

      {/* Favorites Slide-Over */}
      <SlideOverPanel
        isOpen={isFavoritesOpen}
        onClose={() => setFavoritesOpen(false)}
        title="Favorites">
        <div>
          <FavoritesContent />
        </div>
      </SlideOverPanel>

      {/* Settings Slide-Over */}
      <SlideOverPanel
        isOpen={isSettingsOpen}
        onClose={() => setSettingsOpen(false)}
        title="Settings">
        <div>
          <SettingsContent />
        </div>
      </SlideOverPanel>

      {/* Profile Modal for Onboarding Form */}
      <Modal
        isOpen={isProfileOpen}
        onClose={() => setProfileOpen(false)}
        title="Your Profile">
        <OnboardingForm />
      </Modal>
    </header>
  );
}
