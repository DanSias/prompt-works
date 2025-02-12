// src/data/workflows/customer-communication.ts

import { Workflow } from "@/types/workflow";

export const customerCommunicationWorkflows: Workflow[] = [
  {
    id: "automated-support-response",
    title: "Automated Customer Support Responses",
    description:
      "Generate quick, accurate replies for common customer inquiries.",
    fields: [
      {
        label: "Customer Inquiry",
        placeholder: "e.g., How do I reset my password?",
        name: "inquiry",
        required: true,
        type: "textarea",
      },
      {
        label: "Product/Service",
        placeholder: "e.g., PromptWorks AI Tool",
        name: "product",
        required: true,
        type: "text",
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Write a clear and helpful response to the customer inquiry: '{inquiry}' about {product}.",
    categorySlug: "customer-communication",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "personalized-follow-up",
    title: "Personalized Customer Follow-Up Emails",
    description:
      "Craft tailored follow-up emails based on customer interactions.",
    fields: [
      {
        label: "Customer Name",
        placeholder: "e.g., John Doe",
        name: "customerName",
        required: true,
        type: "text",
      },
      {
        label: "Interaction Summary",
        placeholder: "e.g., Discussed product features and pricing.",
        name: "interaction",
        required: true,
        type: "textarea",
      },
      {
        label: "Next Steps",
        placeholder: "e.g., Schedule a demo",
        name: "nextSteps",
        type: "text",
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Write a personalized follow-up email to {customerName} summarizing the interaction: {interaction}. Include the next steps: {nextSteps}.",
    categorySlug: "customer-communication",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "live-chat-script",
    title: "Live Chat Script for Sales/Support",
    description:
      "Create AI-driven live chat scripts that guide conversations towards resolutions or sales.",
    fields: [
      {
        label: "Chat Purpose",
        placeholder: "e.g., Answer product questions and guide to purchase",
        name: "purpose",
        required: true,
        type: "text",
      },
      {
        label: "Common Customer Questions",
        placeholder: "List common questions customers may ask",
        name: "questions",
        type: "textarea",
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Generate a live chat script for {purpose}. Include responses for these common questions: {questions}.",
    categorySlug: "customer-communication",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "complaint-resolution",
    title: "Complaint Resolution Messaging",
    description:
      "Generate professional and empathetic responses to customer complaints.",
    fields: [
      {
        label: "Customer Complaint",
        placeholder: "e.g., The product arrived damaged.",
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
    allowCustomFields: true,
    examplePrompt:
      "Write a professional and empathetic response to the customer complaint: {complaint}. Include the resolution: {resolution}.",
    categorySlug: "customer-communication",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "feedback-request-email",
    title: "Customer Feedback Request Emails",
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
        placeholder: "e.g., PromptWorks AI Tool",
        name: "product",
        required: true,
        type: "text",
      },
      {
        label: "Feedback Purpose",
        placeholder: "e.g., Improve future versions, gather testimonials",
        name: "purpose",
        type: "textarea",
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Write a feedback request email to {customerName} who recently used {product}. Explain that the feedback will help with {purpose}.",
    categorySlug: "customer-communication",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "order-confirmation",
    title: "Order Confirmation & Shipping Updates",
    description:
      "Create clear and concise order confirmations and shipping update messages.",
    fields: [
      {
        label: "Customer Name",
        placeholder: "e.g., Alex Johnson",
        name: "customerName",
        required: true,
        type: "text",
      },
      {
        label: "Order Details",
        placeholder: "e.g., Order #1234, PromptWorks AI Tool",
        name: "orderDetails",
        required: true,
        type: "textarea",
      },
      {
        label: "Shipping Status",
        placeholder: "e.g., Shipped, In Transit, Delivered",
        name: "shippingStatus",
        type: "text",
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Write an order confirmation and shipping update for {customerName}. Include order details: {orderDetails} and the current shipping status: {shippingStatus}.",
    categorySlug: "customer-communication",
    estimatedTime: "2 mins",
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
        placeholder: "e.g., Monthly Plan for PromptWorks AI Tool",
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
    allowCustomFields: true,
    examplePrompt:
      "Write a {action} notice for {customerName}. Include the subscription details: {subscriptionDetails}.",
    categorySlug: "customer-communication",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "onboarding-welcome",
    title: "Onboarding Welcome Messages",
    description:
      "Generate welcoming and informative onboarding emails for new customers.",
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
        placeholder: "e.g., PromptWorks AI Tool",
        name: "product",
        required: true,
        type: "text",
      },
      {
        label: "Next Steps",
        placeholder: "e.g., Set up your profile, Start a project",
        name: "nextSteps",
        type: "textarea",
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Write a warm onboarding welcome message for {customerName} who just signed up for {product}. Include next steps: {nextSteps}.",
    categorySlug: "customer-communication",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "faq-generation",
    title: "FAQ Generation for Support Portals",
    description:
      "Automatically create a set of frequently asked questions and answers for your product or service.",
    fields: [
      {
        label: "Product/Service",
        placeholder: "e.g., PromptWorks AI Tool",
        name: "product",
        required: true,
        type: "text",
      },
      {
        label: "Key Features",
        placeholder: "e.g., AI Prompt Generation, Workflow Automation",
        name: "features",
        type: "textarea",
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Generate an FAQ section for {product}. Focus on these key features: {features}.",
    categorySlug: "customer-communication",
    estimatedTime: "3 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "customer-survey-questions",
    title: "Customer Survey Question Creation",
    description:
      "Develop targeted survey questions to gather meaningful customer insights.",
    fields: [
      {
        label: "Survey Purpose",
        placeholder: "e.g., Improve Product Features, Customer Satisfaction",
        name: "purpose",
        required: true,
        type: "textarea",
      },
      {
        label: "Target Audience",
        placeholder: "e.g., Existing Customers, New Users",
        name: "audience",
        type: "text",
      },
    ],
    allowCustomFields: true,
    examplePrompt:
      "Create a set of customer survey questions aimed at {purpose}. Tailor the questions for {audience}.",
    categorySlug: "customer-communication",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
];
