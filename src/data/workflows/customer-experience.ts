import { Workflow } from "@/types/workflow";

/**
 * Customer Experience Workflows
 *
 * Provides AI-driven workflows for handling customer service interactions, FAQs,
 * and ticket resolution.
 */

export const customerExperienceWorkflows: Workflow[] = [
  {
    id: "support-response",
    title: "Draft a Customer Support Response",
    description:
      "Generate a professional and helpful response to customer inquiries.",
    fields: [
      {
        label: "Customer Inquiry",
        placeholder: "Enter the customer's question or complaint",
        name: "inquiry",
        required: true,
        type: "textarea",
      },
      {
        label: "Tone/Style",
        placeholder: "Select a tone",
        name: "tone",
        type: "select",
        options: ["Professional", "Empathetic", "Concise", "Friendly"],
      },
    ],
    examplePrompt:
      "Draft a {tone} response to the following customer inquiry: {inquiry}.",
    categorySlug: "customer-support",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "faq-creator",
    title: "Generate an FAQ Section",
    description:
      "Create a Frequently Asked Questions (FAQ) section based on common customer inquiries.",
    fields: [
      {
        label: "Product/Service Name",
        placeholder: "Enter the name of the product/service",
        name: "product_name",
        required: true,
        type: "text",
      },
      {
        label: "Common Questions",
        placeholder: "List common questions customers ask",
        name: "questions",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate an FAQ section for {product_name} covering the following questions: {questions}.",
    categorySlug: "customer-support",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "ticket-ranking",
    title: "Prioritize Support Tickets",
    description: "Rank customer support tickets based on urgency and impact.",
    fields: [
      {
        label: "Ticket Details",
        placeholder: "Describe the support issue",
        name: "ticket_details",
        required: true,
        type: "textarea",
      },
      {
        label: "Impact Level",
        placeholder: "Select the impact level",
        name: "impact_level",
        type: "select",
        options: ["Low", "Medium", "High", "Critical"],
      },
    ],
    examplePrompt:
      "Prioritize this support ticket based on the following details: {ticket_details}. Impact level: {impact_level}.",
    categorySlug: "customer-support",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "customer-survey",
    title: "Create a Customer Satisfaction Survey",
    description:
      "Generate a structured customer satisfaction survey to gather feedback.",
    fields: [
      {
        label: "Survey Purpose",
        placeholder: "Describe the goal of the survey",
        name: "purpose",
        required: true,
        type: "textarea",
      },
      {
        label: "Question Focus Areas",
        placeholder: "List key topics for questions",
        name: "focus_areas",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate a customer satisfaction survey for {purpose}, focusing on {focus_areas}.",
    categorySlug: "customer-support",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "refund-policy",
    title: "Draft a Refund Policy",
    description:
      "Create a clear and professional refund policy for your business.",
    fields: [
      {
        label: "Business Name",
        placeholder: "Enter the business name",
        name: "business_name",
        required: true,
        type: "text",
      },
      {
        label: "Refund Conditions",
        placeholder: "Describe when a refund is applicable",
        name: "conditions",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Draft a refund policy for {business_name} with the following conditions: {conditions}.",
    categorySlug: "customer-support",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "chat-support-script",
    title: "Live Chat Script for Support Agents",
    description:
      "Create AI-driven live chat scripts that guide conversations toward resolutions.",
    fields: [
      {
        label: "Chat Purpose",
        placeholder: "e.g., Resolve billing issues",
        name: "purpose",
        required: true,
        type: "text",
      },
      {
        label: "Common Customer Questions",
        placeholder: "List frequent questions customers ask",
        name: "questions",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate a live chat script for {purpose}, including responses for: {questions}.",
    categorySlug: "customer-support",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "customer-feedback-request",
    title: "Customer Feedback Request Email",
    description:
      "Draft engaging emails to encourage customer feedback and reviews.",
    fields: [
      {
        label: "Customer Name",
        placeholder: "e.g., Jane Smith",
        name: "customerName",
        required: true,
        type: "text",
      },
      {
        label: "Product/Service Used",
        placeholder: "e.g., AI Chatbot",
        name: "product",
        required: true,
        type: "text",
      },
    ],
    examplePrompt:
      "Write a feedback request email to {customerName} about {product}.",
    categorySlug: "customer-support",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "complaint-resolution",
    title: "Complaint Resolution Messaging",
    description:
      "Generate professional and empathetic responses to customer complaints.",
    fields: [
      {
        label: "Customer Complaint",
        placeholder: "e.g., Product arrived damaged",
        name: "complaint",
        required: true,
        type: "textarea",
      },
      {
        label: "Resolution Offered",
        placeholder: "e.g., Replacement or refund",
        name: "resolution",
        type: "text",
      },
    ],
    examplePrompt:
      "Write a professional response to {complaint}, offering {resolution}.",
    categorySlug: "customer-support",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "onboarding-welcome-message",
    title: "Onboarding Welcome Message",
    description:
      "Generate warm and informative onboarding emails for new customers.",
    fields: [
      {
        label: "Customer Name",
        placeholder: "e.g., Michael Brown",
        name: "customerName",
        required: true,
        type: "text",
      },
      {
        label: "Product/Service",
        placeholder: "e.g., AI-powered CRM",
        name: "product",
        required: true,
        type: "text",
      },
    ],
    examplePrompt:
      "Write an onboarding message for {customerName} about {product}.",
    categorySlug: "customer-support",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "subscription-renewal",
    title: "Subscription Renewal or Cancellation Notices",
    description:
      "Write persuasive emails for subscription renewals or polite cancellation confirmations.",
    fields: [
      {
        label: "Customer Name",
        placeholder: "e.g., Sarah Lee",
        name: "customerName",
        required: true,
        type: "text",
      },
      {
        label: "Subscription Details",
        placeholder: "e.g., Monthly Plan for AI Chatbot",
        name: "subscriptionDetails",
        required: true,
        type: "textarea",
      },
      {
        label: "Action (Renew/Cancel)",
        placeholder: "e.g., Renew, Cancel",
        name: "action",
        type: "text",
      },
    ],
    examplePrompt:
      "Write a {action} notice for {customerName} regarding {subscriptionDetails}.",
    categorySlug: "customer-support",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
];
