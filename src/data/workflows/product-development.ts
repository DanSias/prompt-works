import { Workflow } from "@/types/workflow";

/**
 * Product Development Workflows
 *
 * Provides AI-driven workflows for brainstorming, roadmapping, and refining products.
 */

export const productDevelopmentWorkflows: Workflow[] = [
  {
    id: "product-idea-validation",
    title: "Validate a Product Idea",
    description: "Assess market demand and feasibility of a product idea.",
    fields: [
      {
        label: "Product Idea",
        placeholder: "Describe the product idea",
        name: "idea",
        required: true,
        type: "textarea",
      },
      {
        label: "Target Audience",
        placeholder: "Who is this product for?",
        name: "audience",
        required: true,
        type: "text",
      },
    ],
    examplePrompt:
      "Validate the following product idea: {idea}. The target audience is {audience}.",
    categorySlug: "product-development",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "feature-prioritization",
    title: "Prioritize Product Features",
    description: "Rank product features based on impact and feasibility.",
    fields: [
      {
        label: "Feature List",
        placeholder: "List product features",
        name: "features",
        required: true,
        type: "textarea",
      },
      {
        label: "Key Metrics",
        placeholder: "Define success metrics",
        name: "metrics",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Prioritize the following features {features} based on impact using {metrics}.",
    categorySlug: "product-development",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "competitor-analysis",
    title: "Perform a Competitor Analysis",
    description: "Compare your product against competitors in the market.",
    fields: [
      {
        label: "Competitors",
        placeholder: "List competitors",
        name: "competitors",
        required: true,
        type: "textarea",
      },
      {
        label: "Unique Selling Points",
        placeholder: "What differentiates your product?",
        name: "usp",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Analyze these competitors: {competitors} and compare them with {usp}.",
    categorySlug: "product-development",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "user-personas",
    title: "Define User Personas",
    description: "Create detailed user personas for your product.",
    fields: [
      {
        label: "Demographics",
        placeholder: "Age, occupation, location",
        name: "demographics",
        required: true,
        type: "textarea",
      },
      {
        label: "User Pain Points",
        placeholder: "List key problems users face",
        name: "pain_points",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate user personas based on {demographics} and {pain_points}.",
    categorySlug: "product-development",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "product-roadmap",
    title: "Create a Product Roadmap",
    description: "Develop a roadmap outlining product development milestones.",
    fields: [
      {
        label: "Major Milestones",
        placeholder: "List key development phases",
        name: "milestones",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate a product roadmap with the following milestones: {milestones}.",
    categorySlug: "product-development",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "sprint-planner",
    title: "Plan a Development Sprint",
    description:
      "Break down a major objective into actionable development tasks for a sprint.",
    fields: [
      {
        label: "Objective",
        placeholder: "Describe the overall goal of the sprint",
        name: "objective",
        required: true,
        type: "textarea",
      },
      {
        label: "Number of Tasks",
        placeholder: "How many tasks should be generated?",
        name: "task_count",
        required: true,
        type: "text",
      },
    ],
    examplePrompt:
      "Divide the objective {objective} into {task_count} actionable sprint tasks.",
    categorySlug: "product-development",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "usability-test-plan",
    title: "Create a Usability Test Plan",
    description:
      "Design a usability test to evaluate a product's user experience.",
    fields: [
      {
        label: "Test Objectives",
        placeholder: "What aspects of the product should be tested?",
        name: "test_objectives",
        required: true,
        type: "textarea",
      },
      {
        label: "Target Users",
        placeholder: "Describe the target test participants",
        name: "target_users",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create a usability test plan focusing on {test_objectives} for {target_users}.",
    categorySlug: "product-development",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "mvp-definition",
    title: "Define a Minimum Viable Product (MVP)",
    description:
      "Identify the essential features needed to launch a minimum viable product.",
    fields: [
      {
        label: "Product Name",
        placeholder: "e.g., AI-Powered Task Manager",
        name: "product_name",
        required: true,
        type: "text",
      },
      {
        label: "Key Features",
        placeholder: "List the essential features for launch",
        name: "key_features",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Define an MVP for {product_name} with key features: {key_features}.",
    categorySlug: "product-development",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "beta-feedback-form",
    title: "Generate a Beta Test Feedback Form",
    description:
      "Create a structured form to collect feedback from beta testers.",
    fields: [
      {
        label: "Product/Feature Being Tested",
        placeholder: "Describe what testers are evaluating",
        name: "test_subject",
        required: true,
        type: "textarea",
      },
      {
        label: "Key Feedback Areas",
        placeholder: "List the aspects testers should provide feedback on",
        name: "feedback_areas",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate a beta feedback form for {test_subject}, focusing on {feedback_areas}.",
    categorySlug: "product-development",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "release-notes-generator",
    title: "Write Release Notes for a Product Update",
    description:
      "Generate structured release notes summarizing new features and fixes.",
    fields: [
      {
        label: "Version Number",
        placeholder: "e.g., v1.2.0",
        name: "version_number",
        required: true,
        type: "text",
      },
      {
        label: "New Features & Fixes",
        placeholder: "List the main updates included in this release",
        name: "updates",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate release notes for {version_number}, covering these updates: {updates}.",
    categorySlug: "product-development",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
];
