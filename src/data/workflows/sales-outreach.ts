import { Workflow } from "@/types/workflow";

/**
 * Sales Outreach & Engagement Workflows
 *
 * Provides AI-driven workflows for sales teams to improve communication,
 * follow-ups, and lead generation.
 */

export const salesOutreachWorkflows: Workflow[] = [
  {
    id: "cold-email",
    title: "Generate a Cold Email",
    description: "Create a compelling cold email to reach new prospects.",
    fields: [
      {
        label: "Recipient Industry",
        placeholder: "e.g., Tech Startups, Healthcare",
        name: "industry",
        required: true,
        type: "text",
      },
      {
        label: "Value Proposition",
        placeholder: "e.g., Automate your workflows with AI",
        name: "value",
        required: true,
        type: "textarea",
      },
      {
        label: "Call to Action",
        placeholder: "e.g., Book a call, Learn more",
        name: "cta",
        type: "text",
      },
    ],
    examplePrompt:
      "Write a cold email for {industry} highlighting {value} and including a CTA: {cta}.",
    categorySlug: "sales-outreach",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "linkedin-outreach",
    title: "Craft a LinkedIn Outreach Message",
    description:
      "Generate a professional LinkedIn message to connect with prospects.",
    fields: [
      {
        label: "Recipient Role",
        placeholder: "e.g., CTO, Sales Director",
        name: "role",
        required: true,
        type: "text",
      },
      {
        label: "Personalization Detail",
        placeholder: "e.g., Mention a recent article or mutual connection",
        name: "personalization",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Write a LinkedIn outreach message for {role}, personalized with {personalization}.",
    categorySlug: "sales-outreach",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "sales-follow-up",
    title: "Write a Sales Follow-Up Email",
    description:
      "Generate a professional follow-up email after an initial outreach.",
    fields: [
      {
        label: "Context of Initial Contact",
        placeholder: "e.g., Previous email, Meeting at a conference",
        name: "context",
        required: true,
        type: "textarea",
      },
      {
        label: "Next Steps",
        placeholder: "e.g., Schedule a demo, Request feedback",
        name: "next_steps",
        type: "text",
      },
    ],
    examplePrompt:
      "Write a follow-up email based on {context}, suggesting {next_steps} as the next step.",
    categorySlug: "sales-outreach",
    estimatedTime: "3 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "objection-handling",
    title: "Handle Common Sales Objections",
    description: "Get AI-generated responses to common sales objections.",
    fields: [
      {
        label: "Objection Given by Prospect",
        placeholder: "e.g., Too expensive, Not the right time",
        name: "objection",
        required: true,
        type: "text",
      },
    ],
    examplePrompt:
      "Provide a professional response to the sales objection: {objection}.",
    categorySlug: "sales-outreach",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "proposal-drafting",
    title: "Draft a Sales Proposal",
    description:
      "Generate a structured sales proposal tailored to a prospect's needs.",
    fields: [
      {
        label: "Client Name",
        placeholder: "e.g., Acme Corp",
        name: "client",
        required: true,
        type: "text",
      },
      {
        label: "Solution Offered",
        placeholder: "e.g., AI-powered customer support chatbot",
        name: "solution",
        required: true,
        type: "textarea",
      },
      {
        label: "Pricing Details",
        placeholder: "e.g., Monthly subscription or one-time fee",
        name: "pricing",
        type: "text",
      },
    ],
    examplePrompt:
      "Draft a sales proposal for {client} offering {solution} with pricing details: {pricing}.",
    categorySlug: "sales-outreach",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "meeting-prep",
    title: "Prepare for a Sales Meeting",
    description:
      "Generate key talking points and research insights before a sales call.",
    fields: [
      {
        label: "Client Name",
        placeholder: "e.g., Acme Corp",
        name: "client",
        required: true,
        type: "text",
      },
      {
        label: "Key Objectives",
        placeholder: "e.g., Showcase product benefits, Close a deal",
        name: "objectives",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Prepare key discussion points for a sales meeting with {client} focused on {objectives}.",
    categorySlug: "sales-outreach",
    estimatedTime: "3 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "sales-script",
    title: "Generate a Sales Call Script",
    description:
      "Create a structured script for a sales call to improve conversion rates.",
    fields: [
      {
        label: "Product/Service",
        placeholder: "e.g., AI-powered CRM",
        name: "product",
        required: true,
        type: "text",
      },
      {
        label: "Target Audience",
        placeholder: "e.g., Small business owners",
        name: "audience",
        type: "text",
      },
    ],
    examplePrompt:
      "Write a sales call script for {product} targeting {audience}.",
    categorySlug: "sales-outreach",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "lead-nurturing",
    title: "Lead Nurturing Email Sequence",
    description:
      "Generate a series of emails to engage and convert potential leads.",
    fields: [
      {
        label: "Lead Type",
        placeholder: "e.g., Interested but hesitant",
        name: "lead_type",
        required: true,
        type: "text",
      },
      {
        label: "Desired Outcome",
        placeholder: "e.g., Book a demo, Subscribe to newsletter",
        name: "outcome",
        type: "text",
      },
    ],
    examplePrompt:
      "Generate a lead nurturing email sequence for {lead_type} leads to achieve {outcome}.",
    categorySlug: "sales-outreach",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "pricing-negotiation",
    title: "Assist with Pricing Negotiation",
    description:
      "Get AI recommendations for negotiating a sales deal effectively.",
    fields: [
      {
        label: "Original Offer",
        placeholder: "e.g., $500 per month",
        name: "offer",
        required: true,
        type: "text",
      },
      {
        label: "Prospect's Counteroffer",
        placeholder: "e.g., Asking for a 20% discount",
        name: "counteroffer",
        type: "text",
      },
    ],
    examplePrompt:
      "Suggest a negotiation strategy for an offer of {offer} considering a counteroffer of {counteroffer}.",
    categorySlug: "sales-outreach",
    estimatedTime: "3 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "case-study",
    title: "Generate a Sales Case Study",
    description:
      "Create a compelling case study showcasing success with a client.",
    fields: [
      {
        label: "Client Name",
        placeholder: "e.g., Acme Corp",
        name: "client",
        required: true,
        type: "text",
      },
      {
        label: "Challenges Faced",
        placeholder: "e.g., Inefficient lead tracking",
        name: "challenges",
        required: true,
        type: "textarea",
      },
      {
        label: "Solution Provided",
        placeholder: "e.g., AI-driven automation tool",
        name: "solution",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate a case study about {client} highlighting {challenges} and how {solution} solved them.",
    categorySlug: "sales-outreach",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
];
