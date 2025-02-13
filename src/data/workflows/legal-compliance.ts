import { Workflow } from "@/types/workflow";

/**
 * Legal & Compliance Workflows
 *
 * Provides AI-driven workflows for drafting contracts, compliance documentation,
 * and legal policies.
 */

export const legalComplianceWorkflows: Workflow[] = [
  {
    id: "nda-template",
    title: "Generate a Non-Disclosure Agreement (NDA)",
    description:
      "Create a customizable NDA template to protect confidential information.",
    fields: [
      {
        label: "Disclosing Party Name",
        placeholder: "e.g., ABC Corporation",
        name: "disclosing_party",
        required: true,
        type: "text",
      },
      {
        label: "Receiving Party Name",
        placeholder: "e.g., John Doe",
        name: "receiving_party",
        required: true,
        type: "text",
      },
    ],
    examplePrompt:
      "Generate an NDA agreement between {disclosing_party} and {receiving_party}.",
    categorySlug: "legal-compliance",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "terms-of-service",
    title: "Draft Terms of Service",
    description:
      "Generate a legally compliant Terms of Service document for a website or app.",
    fields: [
      {
        label: "Business Name",
        placeholder: "e.g., Tech Startup Inc.",
        name: "business_name",
        required: true,
        type: "text",
      },
      {
        label: "Scope of Services",
        placeholder: "Describe the services offered",
        name: "scope",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Draft Terms of Service for {business_name} covering {scope}.",
    categorySlug: "legal-compliance",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "privacy-policy",
    title: "Generate a Privacy Policy",
    description:
      "Create a legally compliant Privacy Policy for user data protection.",
    fields: [
      {
        label: "Business Name",
        placeholder: "e.g., Data Solutions LLC",
        name: "business_name",
        required: true,
        type: "text",
      },
      {
        label: "Data Collected",
        placeholder: "List data types collected (e.g., emails, phone numbers)",
        name: "data_collected",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate a Privacy Policy for {business_name} outlining data collection: {data_collected}.",
    categorySlug: "legal-compliance",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "contract-template",
    title: "Draft a Contract Template",
    description:
      "Create a structured contract template for business agreements.",
    fields: [
      {
        label: "Contracting Parties",
        placeholder: "List the involved parties",
        name: "parties",
        required: true,
        type: "textarea",
      },
      {
        label: "Agreement Scope",
        placeholder: "Describe the purpose and scope of the agreement",
        name: "scope",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate a contract template for {parties} covering {scope}.",
    categorySlug: "legal-compliance",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "compliance-checklist",
    title: "Create a Compliance Checklist",
    description:
      "Generate a compliance checklist to ensure regulatory adherence.",
    fields: [
      {
        label: "Industry Regulations",
        placeholder: "List relevant laws and regulations",
        name: "regulations",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Generate a compliance checklist covering the following regulations: {regulations}.",
    categorySlug: "legal-compliance",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "contract-review",
    title: "Review a Legal Contract",
    description: "Analyze a contract for key terms, risks, and obligations.",
    fields: [
      {
        label: "Contract Text",
        placeholder: "Paste the contract content here",
        name: "contract_text",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Analyze the following contract for risks and obligations: {contract_text}.",
    categorySlug: "legal-compliance",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "legal-term-research",
    title: "Research Legal Terms by Jurisdiction",
    description:
      "Get an overview of legal terms and concepts in a specific jurisdiction.",
    fields: [
      {
        label: "Legal Term",
        placeholder: "e.g., Intellectual Property Rights",
        name: "legal_term",
        required: true,
        type: "text",
      },
      {
        label: "Jurisdiction",
        placeholder: "e.g., United States, EU, Canada",
        name: "jurisdiction",
        required: true,
        type: "text",
      },
    ],
    examplePrompt: "Provide an overview of {legal_term} in {jurisdiction}.",
    categorySlug: "legal-compliance",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "liability-assessment",
    title: "Assess Legal Liabilities for a Business",
    description:
      "Evaluate potential legal risks and liabilities for a business operation.",
    fields: [
      {
        label: "Business Type",
        placeholder: "e.g., SaaS Startup, Consulting Firm",
        name: "business_type",
        required: true,
        type: "text",
      },
      {
        label: "Key Business Activities",
        placeholder: "Describe core operations of the business",
        name: "activities",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Assess the legal liabilities for a {business_type} engaged in {activities}.",
    categorySlug: "legal-compliance",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "gdpr-checklist",
    title: "Generate a GDPR Compliance Checklist",
    description:
      "Ensure your business aligns with General Data Protection Regulation (GDPR) requirements.",
    fields: [
      {
        label: "Business Name",
        placeholder: "e.g., Data Security Solutions",
        name: "business_name",
        required: true,
        type: "text",
      },
    ],
    examplePrompt: "Generate a GDPR compliance checklist for {business_name}.",
    categorySlug: "legal-compliance",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "intellectual-property-checklist",
    title: "Create an Intellectual Property Protection Checklist",
    description:
      "Ensure your business protects its intellectual property (IP) effectively.",
    fields: [
      {
        label: "Business Name",
        placeholder: "e.g., ABC Innovations",
        name: "business_name",
        required: true,
        type: "text",
      },
    ],
    examplePrompt:
      "Generate an intellectual property protection checklist for {business_name}.",
    categorySlug: "legal-compliance",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
];
