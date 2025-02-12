// app/page.tsx

import CategoryCards from "@/components/categories/CategoryCards";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="text-4xl font-bold my-12 text-center">
        Welcome to PromptWorks!
      </h1>
      <p className="text-lg text-center max-w-4xl mx-auto">
        Empower your business with AI-driven prompts for marketing, customer
        support, data analysis, and more. Get started by exploring our
        categories tailored to your needs.
      </p>
      <div>
        <SearchBar />
      </div>
      <div className="max-w-6xl mx-auto mt-24">
        <CategoryCards />
      </div>
    </main>
  );
}
