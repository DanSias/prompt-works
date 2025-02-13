import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import { Workflow } from "@/types/workflow";

export default function WorkflowCards({
  workflows,
  categorySlug,
}: {
  workflows: Workflow[];
  categorySlug: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {workflows.map((workflow) => (
        <div
          key={workflow.id}
          className="bg-white p-4 border rounded-xl shadow hover:shadow-lg transition cursor-pointer relative z-10">
          {/* Top row: Title & Favorite Button */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-semibold">
              <Link
                href={`/categories/${categorySlug}/${workflow.id}`}
                className="hover:underline">
                {workflow.title}
              </Link>
            </h2>
            <FavoriteButton workflow={workflow} size={24} />
          </div>

          {/* Description */}
          <Link
            href={`/categories/${categorySlug}/${workflow.id}`}
            className="block text-gray-600 hover:text-gray-800 transition">
            {workflow.description}
          </Link>

          {/* Additional Details Row */}
          <div className="mt-3 flex justify-between items-center text-sm text-gray-500">
            <span>{workflow.estimatedTime}</span>
            <span
              className={`font-medium ${
                workflow.difficultyLevel === "Beginner"
                  ? "text-green-600"
                  : workflow.difficultyLevel === "Intermediate"
                  ? "text-orange-600"
                  : "text-red-600"
              }`}>
              {workflow.difficultyLevel}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
