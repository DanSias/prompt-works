// src/data/workflows/marketing-content.ts

import { Workflow } from "@/types/workflow";

export const marketingWorkflows: Workflow[] = [
  {
    id: "social-media-post",
    title: "Create a Social Media Post",
    description:
      "Generate engaging social media posts tailored for your audience and platform.",
    fields: [
      {
        label: "Product/Service",
        placeholder: "e.g., PromptWorks AI Tool",
        name: "product",
        required: true,
        type: "text",
      },
      {
        label: "Target Audience",
        placeholder: "e.g., Small Business Owners",
        name: "audience",
        required: true,
        type: "text",
      },
      {
        label: "Tone/Style",
        placeholder: "Select or add a tone",
        name: "tone",
        type: "select",
        options: ["Professional", "Playful", "Persuasive", "Friendly"],
      },
      {
        label: "Platform",
        placeholder: "Select or add a platform",
        name: "platform",
        type: "select",
        options: ["LinkedIn", "Twitter", "Instagram", "Facebook"],
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Write an engaging {platform} post promoting {product} to {audience}. Use a {tone} tone.",
    categorySlug: "marketing-content",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "email-campaign",
    title: "Draft an Email Campaign",
    description:
      "Create compelling emails to promote products, events, or updates.",
    fields: [
      {
        label: "Campaign Goal",
        placeholder: "e.g., Promote New Feature",
        name: "goal",
        required: true,
        type: "text",
      },
      {
        label: "Audience Segment",
        placeholder: "e.g., Existing Customers",
        name: "segment",
        required: true,
        type: "text",
      },
      {
        label: "Call to Action",
        placeholder: "e.g., Sign Up Now!",
        name: "cta",
        type: "text",
      },
      {
        label: "Tone/Style",
        placeholder: "Select or add a tone",
        name: "tone",
        type: "select",
        options: ["Persuasive", "Friendly", "Informative", "Formal"],
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Write an engaging email to {segment} with the goal to {goal}. Include a call to action: {cta}. Use a {tone} tone.",
    categorySlug: "marketing-content",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "ad-copy",
    title: "Generate Ad Copy for Google/Facebook Ads",
    description: "Create concise and effective ad copy for paid campaigns.",
    fields: [
      {
        label: "Product/Service",
        placeholder: "e.g., PromptWorks",
        name: "product",
        required: true,
        type: "text",
      },
      {
        label: "Unique Selling Point",
        placeholder: "e.g., Simplifies AI Prompt Creation",
        name: "usp",
        required: true,
        type: "textarea",
      },
      {
        label: "Target Audience",
        placeholder: "e.g., Freelancers",
        name: "audience",
        type: "text",
      },
      {
        label: "Platform",
        placeholder: "Select or add a platform",
        name: "platform",
        type: "select",
        options: ["Google", "Facebook", "Instagram"],
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Write an ad for {platform} promoting {product} to {audience}. Highlight the unique selling point: {usp}. Keep it concise and compelling.",
    categorySlug: "marketing-content",
    estimatedTime: "2 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "blog-outline",
    title: "Create a Blog Outline",
    description:
      "Generate structured outlines for blog posts targeting specific audiences.",
    fields: [
      {
        label: "Blog Topic",
        placeholder: "e.g., Using AI for Business Efficiency",
        name: "topic",
        required: true,
        type: "text",
      },
      {
        label: "Target Audience",
        placeholder: "e.g., Entrepreneurs",
        name: "audience",
        type: "text",
      },
      {
        label: "Key Points to Cover",
        placeholder: "List key points, separated by commas or line breaks",
        name: "points",
        type: "textarea",
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Outline a blog post on {topic} targeting {audience}. Ensure the following key points are covered: {points}.",
    categorySlug: "marketing-content",
    estimatedTime: "3 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "content-calendar",
    title: "Develop a Content Calendar",
    description:
      "Create a strategic content calendar for consistent and effective marketing.",
    fields: [
      {
        label: "Primary Goals",
        placeholder: "e.g., Increase Brand Awareness, Drive Traffic",
        name: "goals",
        required: true,
        type: "textarea",
      },
      {
        label: "Target Audience",
        placeholder: "e.g., Small Business Owners",
        name: "audience",
        type: "text",
      },
      {
        label: "Preferred Platforms",
        placeholder: "e.g., LinkedIn, Instagram",
        name: "platforms",
        type: "text",
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Develop a monthly content calendar focusing on {goals}. Tailor it for {audience} and include strategies for {platforms}.",
    categorySlug: "marketing-content",
    estimatedTime: "5 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "product-description",
    title: "Write a Product Description",
    description:
      "Create persuasive product descriptions for marketing materials or e-commerce listings.",
    fields: [
      {
        label: "Product Name",
        placeholder: "e.g., PromptWorks",
        name: "product",
        required: true,
        type: "text",
      },
      {
        label: "Features/Benefits",
        placeholder: "e.g., AI-powered prompt generation",
        name: "features",
        required: true,
        type: "textarea",
      },
      {
        label: "Target Audience",
        placeholder: "e.g., Busy Professionals",
        name: "audience",
        type: "text",
      },
      {
        label: "Tone/Style",
        placeholder: "Select or add a tone",
        name: "tone",
        type: "select",
        options: ["Persuasive", "Informative", "Friendly"],
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Write a {tone} product description for {product}. Highlight its features and benefits: {features}. Target the description toward {audience}.",
    categorySlug: "marketing-content",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "seo-keywords",
    title: "Generate SEO Keywords and Meta Descriptions",
    description:
      "Identify effective SEO keywords and write optimized meta descriptions.",
    fields: [
      {
        label: "Page/Content Topic",
        placeholder: "e.g., AI Tools for Business",
        name: "topic",
        required: true,
        type: "text",
      },
      {
        label: "Target Audience",
        placeholder: "e.g., Entrepreneurs, Small Businesses",
        name: "audience",
        type: "text",
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Generate a list of SEO keywords and a meta description for a page about {topic}. Focus on attracting {audience}.",
    categorySlug: "marketing-content",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "newsletter-subject-line",
    title: "Generate a Newsletter Subject Line",
    description:
      "Create attention-grabbing subject lines to improve email open rates.",
    fields: [
      {
        label: "Newsletter Topic",
        placeholder: "e.g., New AI Features",
        name: "topic",
        required: true,
        type: "text",
      },
      {
        label: "Audience Segment",
        placeholder: "e.g., Tech Enthusiasts",
        name: "audience",
        type: "text",
      },
      {
        label: "Tone/Style",
        placeholder: "Select or add a tone",
        name: "tone",
        type: "select",
        options: ["Catchy", "Informative", "Playful"],
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Generate a {tone} subject line for a newsletter about {topic}, targeting {audience}. Keep it under 10 words.",
    categorySlug: "marketing-content",
    estimatedTime: "1 min",
    difficultyLevel: "Beginner",
  },
  {
    id: "press-release",
    title: "Craft a Press Release",
    description:
      "Write professional press releases for product launches or company announcements.",
    fields: [
      {
        label: "Event/Announcement",
        placeholder: "e.g., Launch of PromptWorks",
        name: "event",
        required: true,
        type: "text",
      },
      {
        label: "Key Details",
        placeholder: "e.g., Release Date, Features",
        name: "details",
        required: true,
        type: "textarea",
      },
      {
        label: "Target Audience",
        placeholder: "e.g., Tech Journalists",
        name: "audience",
        type: "text",
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Write a press release announcing {event}. Include key details: {details}. Tailor it for {audience}. Use a formal, professional tone.",
    categorySlug: "marketing-content",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "landing-page-copy",
    title: "Write Landing Page Copy",
    description:
      "Create high-converting landing page copy that highlights key benefits and drives action.",
    fields: [
      {
        label: "Product/Service",
        placeholder: "e.g., PromptWorks AI Tool",
        name: "product",
        required: true,
        type: "text",
      },
      {
        label: "Target Audience",
        placeholder: "e.g., Small Business Owners",
        name: "audience",
        type: "text",
      },
      {
        label: "Call to Action",
        placeholder: "e.g., Get Started Now!",
        name: "cta",
        required: true,
        type: "text",
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Write landing page copy for {product} targeting {audience}. Include a compelling call to action: {cta}. Focus on benefits and user engagement.",
    categorySlug: "marketing-content",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
];
