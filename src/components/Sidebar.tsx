"use client";

import Link from "next/link";
import { categories } from "@/data/categories";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-gray-800 text-white h-screen ${
        isOpen ? "w-1/5" : "w-16"
      } transition-width duration-300`}>
      <div className="flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold">
          {isOpen ? "PromptWorks" : "PW"}
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className="mt-4 space-y-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="block px-4 py-4 text-lg hover:bg-gray-700 rounded transition">
            {isOpen ? category.title : category.title.charAt(0)}
          </Link>
        ))}
      </nav>
    </div>
  );
}
