import { Workflow } from "@/types/workflow";

/**
 * Productivity & Organization Workflows
 *
 * Provides AI-driven workflows for improving productivity, task management,
 * meeting efficiency, and overall organization.
 */

export const productivityToolsWorkflows: Workflow[] = [
  {
    id: "meeting-summary",
    title: "Summarize a Meeting",
    description: "Generate a concise summary of a recorded or written meeting.",
    fields: [
      {
        label: "Meeting Notes or Transcript",
        placeholder: "Paste meeting transcript or key points",
        name: "notes",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Summarize the following meeting: {notes} into key takeaways.",
    categorySlug: "productivity-tools",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "task-prioritization",
    title: "Prioritize Tasks",
    description: "Sort and prioritize tasks based on urgency and importance.",
    fields: [
      {
        label: "Task List",
        placeholder: "List tasks separated by commas",
        name: "tasks",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Prioritize the following tasks based on urgency and importance: {tasks}.",
    categorySlug: "productivity-tools",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "daily-planner",
    title: "Create a Daily Planner",
    description:
      "Generate a structured daily schedule based on tasks and priorities.",
    fields: [
      {
        label: "Tasks for the Day",
        placeholder: "List tasks to complete today",
        name: "tasks",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create a structured daily planner for the following tasks: {tasks}.",
    categorySlug: "productivity-tools",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "brainstorming-ideas",
    title: "Generate Brainstorming Ideas",
    description:
      "Use AI to generate creative ideas for problem-solving or planning.",
    fields: [
      {
        label: "Topic or Problem",
        placeholder: "Describe the topic or challenge",
        name: "topic",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt: "Generate brainstorming ideas for {topic}.",
    categorySlug: "productivity-tools",
    estimatedTime: "3 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "email-response",
    title: "Draft an Email Response",
    description: "Generate a professional response to an email.",
    fields: [
      {
        label: "Email Content",
        placeholder: "Paste the email content",
        name: "email_content",
        required: true,
        type: "textarea",
      },
      {
        label: "Tone/Style",
        placeholder: "e.g., Formal, Friendly, Apologetic",
        name: "tone",
        type: "select",
        options: ["Formal", "Friendly", "Apologetic", "Concise"],
      },
    ],
    examplePrompt:
      "Draft a {tone} response to the following email: {email_content}.",
    categorySlug: "productivity-tools",
    estimatedTime: "3 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "weekly-planning",
    title: "Plan a Weekly Schedule",
    description:
      "Generate a structured weekly schedule based on priorities and deadlines.",
    fields: [
      {
        label: "Tasks and Deadlines",
        placeholder: "List important tasks and deadlines for the week",
        name: "tasks",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create a structured weekly plan for the following tasks: {tasks}.",
    categorySlug: "productivity-tools",
    estimatedTime: "3 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "habit-tracker",
    title: "Set Up a Habit Tracker",
    description:
      "Create a habit-tracking system to monitor progress and consistency.",
    fields: [
      {
        label: "Habits to Track",
        placeholder: "List habits to track daily or weekly",
        name: "habits",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate a habit tracking plan for the following habits: {habits}.",
    categorySlug: "productivity-tools",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "time-blocking",
    title: "Implement Time Blocking",
    description:
      "Create a time-blocking plan to optimize focus and productivity.",
    fields: [
      {
        label: "Tasks to Allocate Time For",
        placeholder: "List tasks to be scheduled with dedicated time slots",
        name: "tasks",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create a time-blocking plan for the following tasks: {tasks}.",
    categorySlug: "productivity-tools",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "delegation-plan",
    title: "Create a Task Delegation Plan",
    description: "Generate a plan for delegating tasks efficiently to a team.",
    fields: [
      {
        label: "Tasks to Delegate",
        placeholder: "List tasks that need to be assigned to team members",
        name: "tasks",
        required: true,
        type: "textarea",
      },
      {
        label: "Team Members",
        placeholder: "List team members available for delegation",
        name: "team_members",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create a delegation plan for the following tasks: {tasks} and assign them among {team_members}.",
    categorySlug: "productivity-tools",
    estimatedTime: "4 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "focus-techniques",
    title: "Recommend Focus Techniques",
    description: "Get AI-recommended focus techniques to enhance productivity.",
    fields: [
      {
        label: "Productivity Challenges",
        placeholder:
          "Describe productivity issues (e.g., distractions, procrastination)",
        name: "challenges",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Suggest focus techniques to overcome the following productivity challenges: {challenges}.",
    categorySlug: "productivity-tools",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
];
