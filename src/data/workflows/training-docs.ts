import { Workflow } from "@/types/workflow";

/**
 * Training & Documentation Workflows
 *
 * Provides AI-driven workflows for creating training materials, onboarding guides,
 * and knowledge base articles.
 */

export const trainingDocsWorkflows: Workflow[] = [
  {
    id: "onboarding-guide",
    title: "Create an Onboarding Guide",
    description: "Generate a structured onboarding guide for new employees.",
    fields: [
      {
        label: "Role or Department",
        placeholder: "e.g., Sales, Engineering",
        name: "role",
        required: true,
        type: "text",
      },
      {
        label: "Key Topics to Cover",
        placeholder: "List topics such as company policies, tools, processes",
        name: "topics",
        type: "textarea",
      },
    ],
    examplePrompt: "Create an onboarding guide for {role} covering {topics}.",
    categorySlug: "training-docs",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "sop-document",
    title: "Generate a Standard Operating Procedure (SOP)",
    description: "Create a step-by-step SOP for a specific business process.",
    fields: [
      {
        label: "Process Name",
        placeholder: "e.g., Customer Support Ticket Handling",
        name: "process",
        required: true,
        type: "text",
      },
      {
        label: "Key Steps",
        placeholder: "List key steps involved in the process",
        name: "steps",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate an SOP for {process} including the following steps: {steps}.",
    categorySlug: "training-docs",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "faq-document",
    title: "Create a Frequently Asked Questions (FAQ) Document",
    description:
      "Generate an FAQ document for a product, service, or internal process.",
    fields: [
      {
        label: "Topic of FAQ",
        placeholder: "e.g., Employee Benefits, Software Troubleshooting",
        name: "topic",
        required: true,
        type: "text",
      },
      {
        label: "Common Questions",
        placeholder: "List key questions that should be included",
        name: "questions",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create an FAQ document for {topic} covering these questions: {questions}.",
    categorySlug: "training-docs",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "tutorial-script",
    title: "Generate a Training Tutorial Script",
    description: "Create a script for a training video or live presentation.",
    fields: [
      {
        label: "Training Topic",
        placeholder: "e.g., How to Use CRM Software",
        name: "topic",
        required: true,
        type: "text",
      },
      {
        label: "Key Learning Objectives",
        placeholder: "List key takeaways trainees should learn",
        name: "objectives",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate a training script for {topic} covering {objectives}.",
    categorySlug: "training-docs",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "policy-documentation",
    title: "Draft a Policy Document",
    description:
      "Generate a formal policy document outlining company rules and guidelines.",
    fields: [
      {
        label: "Policy Name",
        placeholder: "e.g., Remote Work Policy",
        name: "policy_name",
        required: true,
        type: "text",
      },
      {
        label: "Key Policy Details",
        placeholder: "Outline the major rules, scope, and expectations",
        name: "details",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Draft a policy document for {policy_name} covering {details}.",
    categorySlug: "training-docs",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "knowledge-base-article",
    title: "Create a Knowledge Base Article",
    description:
      "Generate a structured knowledge base article for internal or external users.",
    fields: [
      {
        label: "Article Topic",
        placeholder: "e.g., How to Reset Your Password",
        name: "topic",
        required: true,
        type: "text",
      },
      {
        label: "Key Sections",
        placeholder:
          "List sections such as Introduction, Steps, Troubleshooting",
        name: "sections",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create a knowledge base article for {topic} covering {sections}.",
    categorySlug: "training-docs",
    estimatedTime: "3 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "compliance-training",
    title: "Generate Compliance Training Material",
    description: "Create structured compliance training content for employees.",
    fields: [
      {
        label: "Compliance Topic",
        placeholder: "e.g., Data Privacy Regulations",
        name: "topic",
        required: true,
        type: "text",
      },
      {
        label: "Key Compliance Points",
        placeholder: "List essential compliance guidelines",
        name: "points",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate compliance training material for {topic} covering {points}.",
    categorySlug: "training-docs",
    estimatedTime: "4 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "best-practices-guide",
    title: "Create a Best Practices Guide",
    description:
      "Generate a guide outlining best practices for a specific area.",
    fields: [
      {
        label: "Guide Topic",
        placeholder: "e.g., Remote Team Management",
        name: "topic",
        required: true,
        type: "text",
      },
      {
        label: "Best Practices",
        placeholder: "List best practices and key strategies",
        name: "practices",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create a best practices guide for {topic} covering {practices}.",
    categorySlug: "training-docs",
    estimatedTime: "3 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "interactive-quiz",
    title: "Generate an Interactive Training Quiz",
    description: "Create a multiple-choice quiz for training assessments.",
    fields: [
      {
        label: "Quiz Topic",
        placeholder: "e.g., Cybersecurity Basics",
        name: "topic",
        required: true,
        type: "text",
      },
      {
        label: "Key Questions",
        placeholder: "List quiz questions with multiple-choice answers",
        name: "questions",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate an interactive quiz for {topic} with questions: {questions}.",
    categorySlug: "training-docs",
    estimatedTime: "4 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "checklist-document",
    title: "Create a Process Checklist",
    description:
      "Generate a checklist for completing a specific business or training process.",
    fields: [
      {
        label: "Process Name",
        placeholder: "e.g., New Hire Onboarding Steps",
        name: "process",
        required: true,
        type: "text",
      },
      {
        label: "Checklist Items",
        placeholder: "List steps to complete the process",
        name: "items",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create a checklist for {process} with the following items: {items}.",
    categorySlug: "training-docs",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
];
