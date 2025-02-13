import { Workflow } from "@/types/workflow";

/**
 * Project Management Workflows
 *
 * Provides AI-driven workflows to streamline project planning, task management,
 * and collaboration for efficient project execution.
 */

export const projectManagementWorkflows: Workflow[] = [
  {
    id: "task-breakdown",
    title: "Break Down a Large Task",
    description: "Divide a major objective into smaller, manageable tasks.",
    fields: [
      {
        label: "Objective",
        placeholder: "e.g., Launch a new website",
        name: "objective",
        required: true,
        type: "text",
      },
      {
        label: "Number of Tasks Needed",
        placeholder: "e.g., 5",
        name: "num_tasks",
        type: "text",
      },
    ],
    examplePrompt:
      "Break down the following objective into {num_tasks} tasks: {objective}.",
    categorySlug: "project-management",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "meeting-agenda",
    title: "Generate a Meeting Agenda",
    description: "Create a structured agenda for an upcoming meeting.",
    fields: [
      {
        label: "Meeting Purpose",
        placeholder: "e.g., Quarterly strategy review",
        name: "purpose",
        required: true,
        type: "text",
      },
      {
        label: "Key Discussion Points",
        placeholder: "List topics to be covered",
        name: "discussion_points",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate a meeting agenda for {purpose}, covering {discussion_points}.",
    categorySlug: "project-management",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "project-status-update",
    title: "Draft a Project Status Update",
    description:
      "Summarize progress, blockers, and next steps for a project update.",
    fields: [
      {
        label: "Project Name",
        placeholder: "e.g., AI Chatbot Development",
        name: "project_name",
        required: true,
        type: "text",
      },
      {
        label: "Current Progress",
        placeholder: "Summarize the latest developments",
        name: "progress",
        type: "textarea",
      },
      {
        label: "Blockers & Challenges",
        placeholder: "List any issues affecting progress",
        name: "blockers",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Write a status update for {project_name}. Progress: {progress}. Blockers: {blockers}.",
    categorySlug: "project-management",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "risk-assessment",
    title: "Conduct a Risk Assessment",
    description:
      "Identify potential risks and mitigation strategies for a project.",
    fields: [
      {
        label: "Project Name",
        placeholder: "e.g., AI Implementation",
        name: "project_name",
        required: true,
        type: "text",
      },
      {
        label: "Potential Risks",
        placeholder: "List possible risks",
        name: "risks",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Assess risks for {project_name}. Identified risks: {risks}.",
    categorySlug: "project-management",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "gantt-chart-plan",
    title: "Generate a Gantt Chart Plan",
    description: "Create a high-level project timeline based on key tasks.",
    fields: [
      {
        label: "Project Name",
        placeholder: "e.g., Website Redesign",
        name: "project_name",
        required: true,
        type: "text",
      },
      {
        label: "Key Milestones",
        placeholder: "List major milestones",
        name: "milestones",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create a Gantt chart plan for {project_name}, covering {milestones}.",
    categorySlug: "project-management",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "task-ranking",
    title: "Prioritize Project Tasks",
    description:
      "Rank project tasks by urgency and importance to improve execution.",
    fields: [
      {
        label: "Project Name",
        placeholder: "e.g., CRM Integration",
        name: "project_name",
        required: true,
        type: "text",
      },
      {
        label: "List of Tasks",
        placeholder: "List tasks that need prioritization",
        name: "tasks",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Prioritize the following tasks for {project_name}: {tasks}.",
    categorySlug: "project-management",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "stakeholder-communication-plan",
    title: "Create a Stakeholder Communication Plan",
    description: "Develop a strategy for keeping stakeholders informed.",
    fields: [
      {
        label: "Project Name",
        placeholder: "e.g., AI Model Deployment",
        name: "project_name",
        required: true,
        type: "text",
      },
      {
        label: "Key Stakeholders",
        placeholder: "List main stakeholders",
        name: "stakeholders",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create a communication plan for {project_name}, targeting {stakeholders}.",
    categorySlug: "project-management",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "post-mortem-report",
    title: "Draft a Project Post-Mortem Report",
    description: "Analyze a completed project’s successes and lessons learned.",
    fields: [
      {
        label: "Project Name",
        placeholder: "e.g., Mobile App Launch",
        name: "project_name",
        required: true,
        type: "text",
      },
      {
        label: "Successes & Challenges",
        placeholder: "Summarize key wins and obstacles",
        name: "summary",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Draft a post-mortem report for {project_name}. Summary: {summary}.",
    categorySlug: "project-management",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
];
