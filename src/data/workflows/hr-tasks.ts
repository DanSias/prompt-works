import { Workflow } from "@/types/workflow";

/**
 * HR & Recruitment Workflows
 *
 * Provides AI-driven workflows for handling HR tasks, employee management,
 * and recruitment processes.
 */

export const hrTasksWorkflows: Workflow[] = [
  {
    id: "job-description",
    title: "Write a Job Description",
    description:
      "Generate a well-structured job description for a specific role.",
    fields: [
      {
        label: "Job Title",
        placeholder: "e.g., Software Engineer",
        name: "job_title",
        required: true,
        type: "text",
      },
      {
        label: "Key Responsibilities",
        placeholder: "List major duties and responsibilities",
        name: "responsibilities",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create a job description for {job_title} including responsibilities: {responsibilities}.",
    categorySlug: "hr-tasks",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "interview-questions",
    title: "Generate Interview Questions",
    description:
      "Create a list of tailored interview questions for a specific job role.",
    fields: [
      {
        label: "Job Role",
        placeholder: "e.g., Data Scientist",
        name: "role",
        required: true,
        type: "text",
      },
      {
        label: "Skills to Assess",
        placeholder: "e.g., Python, Machine Learning, Data Analysis",
        name: "skills",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate interview questions for a {role} position covering {skills}.",
    categorySlug: "hr-tasks",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "offer-letter",
    title: "Draft an Offer Letter",
    description: "Generate a professional job offer letter for a candidate.",
    fields: [
      {
        label: "Candidate Name",
        placeholder: "e.g., John Doe",
        name: "candidate",
        required: true,
        type: "text",
      },
      {
        label: "Job Title",
        placeholder: "e.g., Marketing Manager",
        name: "job_title",
        required: true,
        type: "text",
      },
    ],
    examplePrompt:
      "Draft an offer letter for {candidate} for the position of {job_title}.",
    categorySlug: "hr-tasks",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "performance-review",
    title: "Write a Performance Review",
    description: "Generate a structured performance review for an employee.",
    fields: [
      {
        label: "Employee Name",
        placeholder: "e.g., Jane Smith",
        name: "employee",
        required: true,
        type: "text",
      },
      {
        label: "Key Strengths & Areas for Improvement",
        placeholder: "List observations about performance",
        name: "feedback",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Write a performance review for {employee} including {feedback}.",
    categorySlug: "hr-tasks",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "exit-interview",
    title: "Create an Exit Interview Questionnaire",
    description:
      "Generate structured exit interview questions for departing employees.",
    fields: [
      {
        label: "Reason for Exit Interview",
        placeholder: "e.g., Voluntary Resignation, Layoff",
        name: "reason",
        required: true,
        type: "text",
      },
    ],
    examplePrompt:
      "Create an exit interview questionnaire for an employee leaving due to {reason}.",
    categorySlug: "hr-tasks",
    estimatedTime: "3 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "resume-job-match",
    title: "Compare Resume to Job Description",
    description:
      "Analyze an applicant's resume against a job description to assess fit.",
    fields: [
      {
        label: "Resume Content",
        placeholder: "Paste the candidate's resume here",
        name: "resume",
        required: true,
        type: "textarea",
      },
      {
        label: "Job Description",
        placeholder: "Paste the job description here",
        name: "job_description",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Compare the following resume to the job description and provide an analysis: {resume} vs {job_description}.",
    categorySlug: "hr-tasks",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "employee-handbook",
    title: "Draft an Employee Handbook",
    description:
      "Generate a structured employee handbook for company policies and culture.",
    fields: [
      {
        label: "Company Name",
        placeholder: "e.g., ABC Tech Solutions",
        name: "company",
        required: true,
        type: "text",
      },
      {
        label: "Key Policies to Include",
        placeholder:
          "List policies such as benefits, remote work, code of conduct",
        name: "policies",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate an employee handbook for {company} covering {policies}.",
    categorySlug: "hr-tasks",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "job-posting",
    title: "Write a Job Posting",
    description: "Generate an engaging job posting to attract top talent.",
    fields: [
      {
        label: "Job Title",
        placeholder: "e.g., Full Stack Developer",
        name: "job_title",
        required: true,
        type: "text",
      },
      {
        label: "Key Responsibilities",
        placeholder: "List major duties and expectations",
        name: "responsibilities",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Write a job posting for {job_title} including responsibilities: {responsibilities}.",
    categorySlug: "hr-tasks",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "reference-check",
    title: "Conduct a Reference Check",
    description:
      "Generate structured questions for conducting reference checks on candidates.",
    fields: [
      {
        label: "Candidate Name",
        placeholder: "e.g., Sarah Johnson",
        name: "candidate",
        required: true,
        type: "text",
      },
      {
        label: "Role Applied For",
        placeholder: "e.g., Marketing Specialist",
        name: "role",
        required: true,
        type: "text",
      },
    ],
    examplePrompt:
      "Generate a reference check questionnaire for {candidate} applying for {role}.",
    categorySlug: "hr-tasks",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "diversity-hiring-guide",
    title: "Create a Diversity Hiring Guide",
    description:
      "Generate a structured guide for improving diversity in hiring practices.",
    fields: [
      {
        label: "Industry or Company Type",
        placeholder: "e.g., Tech Startup, Healthcare",
        name: "industry",
        required: true,
        type: "text",
      },
      {
        label: "Diversity Goals",
        placeholder:
          "List key objectives such as inclusive hiring practices, bias reduction",
        name: "goals",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create a diversity hiring guide for {industry} with goals including {goals}.",
    categorySlug: "hr-tasks",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
];
