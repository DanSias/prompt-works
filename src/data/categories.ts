// src/data/categories.ts
import {
  MessageCircle,
  Megaphone,
  BarChart2,
  UserPlus,
  ClipboardList,
  Briefcase,
} from "lucide-react";

export interface Category {
  slug: string;
  title: string;
  icon: React.ElementType; // This will hold the icon component
  description: string;
}

export const categories: Category[] = [
  {
    slug: "customer-communication",
    title: "Customer Communication & Support",
    icon: MessageCircle,
    description:
      "Craft professional responses for customer inquiries, complaints, and support tickets to enhance client relationships.",
  },
  {
    slug: "marketing-content",
    title: "Marketing & Content Creation",
    icon: Megaphone,
    description:
      "Generate engaging content for social media, blogs, and email campaigns to boost brand visibility and customer engagement.",
  },
  {
    slug: "data-analysis",
    title: "Data Analysis & Reporting",
    icon: BarChart2,
    description:
      "Simplify complex data reports and generate insights for informed business decisions.",
  },
  {
    slug: "hr-recruitment",
    title: "Human Resources & Recruitment",
    icon: UserPlus,
    description:
      "Create job descriptions, interview questions, and performance reviews to streamline HR processes.",
  },
  {
    slug: "project-management",
    title: "Project Management & Organization",
    icon: ClipboardList,
    description:
      "Manage projects efficiently with task lists, status updates, and meeting agendas.",
  },
  {
    slug: "business-strategy",
    title: "Business Strategy & Decision Support",
    icon: Briefcase,
    description:
      "Brainstorm strategic initiatives and assess risks with AI-driven decision-making support.",
  },
];
