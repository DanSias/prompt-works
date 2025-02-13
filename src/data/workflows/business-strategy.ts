import { Workflow } from "@/types/workflow";

/**
 * Business Strategy Workflows
 *
 * Provides AI-powered workflows to support strategic decision-making,
 * market analysis, and competitive research.
 */

export const businessStrategyWorkflows: Workflow[] = [
  {
    id: "swot-analysis",
    title: "Conduct a SWOT Analysis",
    description:
      "Identify strengths, weaknesses, opportunities, and threats for a business or project.",
    fields: [
      {
        label: "Business Name",
        placeholder: "e.g., PromptWorks AI",
        name: "business_name",
        required: true,
        type: "text",
      },
      {
        label: "Industry",
        placeholder: "e.g., AI Software",
        name: "industry",
        type: "text",
      },
    ],
    examplePrompt:
      "Perform a SWOT analysis for {business_name} in the {industry} industry.",
    categorySlug: "business-strategy",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "competitor-analysis",
    title: "Competitor Analysis",
    description:
      "Analyze key competitors, their strengths, and market positioning.",
    fields: [
      {
        label: "Competitor Name(s)",
        placeholder: "e.g., Jasper AI, Copy.ai",
        name: "competitors",
        required: true,
        type: "textarea",
      },
      {
        label: "Comparison Criteria",
        placeholder: "e.g., Pricing, Features, Market Share",
        name: "criteria",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Analyze competitors: {competitors}. Focus on these criteria: {criteria}.",
    categorySlug: "business-strategy",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "market-research",
    title: "Market Research Insights",
    description: "Gather key insights about a target market or industry.",
    fields: [
      {
        label: "Market/Industry",
        placeholder: "e.g., SaaS tools for startups",
        name: "market",
        required: true,
        type: "text",
      },
      {
        label: "Research Focus",
        placeholder: "e.g., Customer needs, emerging trends",
        name: "focus",
        type: "textarea",
      },
    ],
    examplePrompt: "Conduct market research for {market}. Focus on: {focus}.",
    categorySlug: "business-strategy",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "business-name-brainstorming",
    title: "Brainstorm a Business Name",
    description:
      "Generate creative and relevant business name ideas based on industry and brand values.",
    fields: [
      {
        label: "Industry",
        placeholder: "e.g., AI Software",
        name: "industry",
        required: true,
        type: "text",
      },
      {
        label: "Brand Values",
        placeholder: "e.g., Innovation, Reliability, Affordability",
        name: "values",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Suggest unique business names for an {industry} company that values {values}.",
    categorySlug: "business-strategy",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "expert-interview",
    title: "AI Expert Interview",
    description:
      "Get strategic insights by having the AI interview you about your top business priority.",
    fields: [
      {
        label: "Top Business Priority",
        placeholder: "e.g., Scaling operations, improving retention",
        name: "priority",
        required: true,
        type: "text",
      },
    ],
    examplePrompt:
      "Conduct an expert-style interview to develop a strategy for {priority}.",
    categorySlug: "business-strategy",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "executive-strategy-session",
    title: "Executive Strategy Discussion Guide",
    description:
      "Generate key discussion points for a high-level executive strategy session.",
    fields: [
      {
        label: "Company Goals",
        placeholder: "e.g., Expand market share, increase revenue",
        name: "goals",
        required: true,
        type: "textarea",
      },
      {
        label: "Challenges",
        placeholder: "e.g., Market competition, customer churn",
        name: "challenges",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create a discussion guide for an executive strategy session focusing on {goals} and addressing {challenges}.",
    categorySlug: "business-strategy",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "growth-roadmap",
    title: "Develop a Business Growth Roadmap",
    description: "Outline key steps for business expansion and scaling.",
    fields: [
      {
        label: "Business Stage",
        placeholder: "e.g., Startup, Scaling, Mature Business",
        name: "stage",
        required: true,
        type: "text",
      },
      {
        label: "Growth Goals",
        placeholder: "e.g., Increase user base, improve profitability",
        name: "goals",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create a business growth roadmap for a {stage} company with the following goals: {goals}.",
    categorySlug: "business-strategy",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "investment-pitch",
    title: "Craft an Investor Pitch",
    description:
      "Generate a structured pitch for attracting investors and funding.",
    fields: [
      {
        label: "Business Name",
        placeholder: "e.g., PromptWorks AI",
        name: "business_name",
        required: true,
        type: "text",
      },
      {
        label: "Key Differentiators",
        placeholder: "e.g., Unique technology, market fit, competitive edge",
        name: "differentiators",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create an investor pitch for {business_name} highlighting {differentiators}.",
    categorySlug: "business-strategy",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "crisis-management-plan",
    title: "Develop a Crisis Management Plan",
    description:
      "Prepare a structured plan to handle potential business crises effectively.",
    fields: [
      {
        label: "Business Name",
        placeholder: "e.g., PromptWorks AI",
        name: "business_name",
        required: true,
        type: "text",
      },
      {
        label: "Potential Crisis Scenarios",
        placeholder: "e.g., Data breach, PR disaster, supply chain failure",
        name: "crises",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Develop a crisis management plan for {business_name} addressing {crises}.",
    categorySlug: "business-strategy",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "business-model-canvas",
    title: "Generate a Business Model Canvas",
    description:
      "Create a structured business model canvas to outline key components of a business plan.",
    fields: [
      {
        label: "Business Name",
        placeholder: "e.g., PromptWorks AI",
        name: "business_name",
        required: true,
        type: "text",
      },
      {
        label: "Key Revenue Streams",
        placeholder: "e.g., Subscription fees, affiliate marketing",
        name: "revenue_streams",
        type: "textarea",
      },
      {
        label: "Target Customer Segments",
        placeholder: "e.g., Startups, SaaS companies, marketers",
        name: "customer_segments",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create a business model canvas for {business_name}. Include revenue streams: {revenue_streams} and target customer segments: {customer_segments}.",
    categorySlug: "business-strategy",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
];
