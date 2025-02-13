import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoryCards() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {categories.map((category) => {
          if (!category.icon) {
            console.error(`Missing icon for category: ${category.slug}`);
            return null; // Skip rendering if icon is missing
          }
          const Icon = category.icon;
          return (
            <Link href={`/categories/${category.slug}`} key={category.slug}>
              <div
                key={category.slug}
                className="bg-white px-4 py-6 border rounded-xl shadow hover:shadow-lg transition">
                <div className="flex mb-2">
                  <Icon className="h-8 w-8 text-blue-500 mr-2" />
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
