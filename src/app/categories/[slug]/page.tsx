import { categories } from "@/data/categories";
import { categoryWorkflowsMap } from "@/data/workflows";
import Link from "next/link";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((cat) => cat.slug === params.slug);
  const workflows = categoryWorkflowsMap[params.slug];

  if (!category || !workflows) {
    return <p className="p-8 text-xl text-red-600">Category not found.</p>;
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">{category.title}</h1>
      <p className="text-gray-600 mb-8 text-center">{category.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {workflows.map((workflow) => (
          <Link
            key={workflow.id}
            href={`/categories/${params.slug}/${workflow.id}`}
            className="p-4 border rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">{workflow.title}</h2>
            <p className="text-gray-600">{workflow.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
