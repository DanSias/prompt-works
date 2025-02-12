"use client";

import Link from "next/link";
import { categories } from "@/data/categories";
import { Menu } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          PromptWorks
        </Link>

        <div className="space-x-4 flex items-center">
          {/* Dropdown Menu for Categories */}
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 bg-gray-700 text-sm font-medium rounded-md hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Categories
              <ChevronDown className="ml-2 h-5 w-5" />
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              {categories.map((category) => (
                <Menu.Item key={category.slug}>
                  {({ active }) => (
                    <Link
                      href={`/categories/${category.slug}`}
                      className={`${
                        active ? "bg-gray-100" : ""
                      } block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100`}>
                      {category.title}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
