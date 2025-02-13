// app/page.tsx

import CategoryCards from "@/components/categories/CategoryCards";

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1 className="text-4xl font-bold mt-12 text-center">
        From Concept to Creation with AI-Powered Support
      </h1>
      <p className="text-lg text-center mt-4 max-w-4xl mx-auto">
        Create custom AI workflows for your exact business needs. Get started in
        minutes with our pre-built templates.
      </p>

      <div className="max-w-6xl mx-auto mt-16 min-h-screen">
        <CategoryCards />
      </div>
    </main>
  );
}
