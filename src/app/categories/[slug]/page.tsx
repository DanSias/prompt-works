import { categories } from "@/data/categories";
import { categoryWorkflowsMap } from "@/data/workflows";
import WorkflowCards from "@/components/categories/WorkflowCards";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((cat) => cat.slug === params.slug);
  const workflows = categoryWorkflowsMap[params.slug];

  if (!category || !workflows) {
    return <p className="p-8 text-xl text-red-600">Category not found.</p>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">{category.title}</h1>
      <p className="text-gray-600 mb-8 text-center">{category.description}</p>

      <WorkflowCards workflows={workflows} categorySlug={params.slug} />
    </div>
  );
}
