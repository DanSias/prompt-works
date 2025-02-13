// app/page.tsx

import CategoryCards from "@/components/categories/CategoryCards";

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1 className="text-4xl font-bold my-12 text-center">
        Turn Ideas Into Action with AI-Powered Prompts
      </h1>
      <p className="text-lg text-center max-w-4xl mx-auto">
        Simplify marketing, customer support, data analysis, and more with our
        easy-to-use workflows. <br />
        Dive into categories designed to meet your business goals.
      </p>

      <div className="max-w-6xl mx-auto mt-24 min-h-screen">
        <CategoryCards />
      </div>
    </main>
  );
}
