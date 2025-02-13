import { Category } from "@/types/category";
import {
  Briefcase,
  DollarSign,
  ShoppingCart,
  Megaphone,
  MessageCircle,
  UserPlus,
  ClipboardList,
  BarChart2,
  FileText,
  Settings,
} from "lucide-react";

export const categories: Category[] = [
  {
    slug: "business-strategy",
    title: "Strategic Planning & Decision Making",
    icon: Briefcase,
    description:
      "Gain a competitive edge with AI-assisted business analysis, risk assessment, and market research for smarter decision-making.",
  },
  {
    slug: "financial-analysis",
    title: "Financial Planning & Analysis",
    icon: DollarSign,
    description:
      "Optimize financial decision-making with AI-driven forecasting, budgeting, and investment analysis.",
  },
  {
    slug: "sales-outreach",
    title: "Sales Optimization & Lead Nurturing",
    icon: ShoppingCart,
    description:
      "Boost sales performance with AI-powered outreach, lead qualification, and follow-up messaging that converts prospects into customers.",
  },
  {
    slug: "marketing-content",
    title: "Marketing & Content Strategy",
    icon: Megaphone,
    description:
      "Create compelling marketing materials, social media content, and email campaigns that captivate your audience and drive conversions.",
  },
  {
    slug: "customer-communication",
    title: "Customer Engagement & Support",
    icon: MessageCircle,
    description:
      "Deliver seamless customer interactions with AI-powered responses, complaint resolution, and personalized follow-ups.",
  },
  {
    slug: "hr-recruitment",
    title: "HR & Talent Acquisition",
    icon: UserPlus,
    description:
      "Streamline hiring and employee management with AI-generated job descriptions, interview questions, and performance evaluations.",
  },
  {
    slug: "project-management",
    title: "Project Planning & Execution",
    icon: ClipboardList,
    description:
      "Optimize project workflows with AI-generated task lists, meeting agendas, and risk assessments to keep teams aligned and productive.",
  },
  {
    slug: "data-analysis",
    title: "Data Insights & Reporting",
    icon: BarChart2,
    description:
      "Transform raw data into actionable insights with AI-powered analysis, trend forecasting, and automated reporting.",
  },
  {
    slug: "training-docs",
    title: "Training & Knowledge Management",
    icon: FileText,
    description:
      "Create structured learning materials, user manuals, and knowledge bases to improve onboarding and skill development.",
  },
  {
    slug: "productivity-tools",
    title: "Workflow Automation & Productivity ",
    icon: Settings,
    description:
      "Eliminate inefficiencies with AI-driven task automation, smart scheduling, and workflow optimization.",
  },
];
