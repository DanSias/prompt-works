// app/page.tsx

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to PromptWorks!
      </h1>
      <p className="text-lg text-center mb-6 max-w-xl">
        Empower your business with AI-driven prompts for marketing, customer
        support, data analysis, and more. Get started by exploring our
        categories tailored to your needs.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
        Explore Prompts
      </button>
    </main>
  );
}
