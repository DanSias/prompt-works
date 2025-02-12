// src/app/categories/layout.tsx

"use client";

// import Sidebar from "@/components/Sidebar";
import { Toaster } from "react-hot-toast";

/**
 * Categories Layout
 *
 * This layout wraps all pages under `/categories` with the Sidebar component.
 * It ensures consistent navigation for both category and workflow pages.
 *
 * Directory Structure:
 * - src/app/categories/layout.tsx  -> Layout for all category-related pages
 * - src/app/categories/[slug]/page.tsx  -> Category overview page
 * - src/app/categories/[slug]/[workflowId]/page.tsx  -> Workflow input page
 */

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
        <Toaster position="top-right" />
      </main>
    </div>
  );
}
