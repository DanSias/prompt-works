import { Workflow } from "@/types/workflow";

/**
 * Financial Analysis Workflows
 *
 * Provides AI-driven workflows for financial forecasting, risk assessment,
 * and data-driven financial decision-making.
 */

export const financialAnalysisWorkflows: Workflow[] = [
  {
    id: "budget-plan",
    title: "Create a Budget Plan",
    description:
      "Generate a structured budget plan based on revenue and expenses.",
    fields: [
      {
        label: "Revenue Streams",
        placeholder:
          "List revenue sources (e.g., product sales, subscriptions)",
        name: "revenue",
        required: true,
        type: "textarea",
      },
      {
        label: "Fixed & Variable Costs",
        placeholder: "List expenses such as salaries, marketing, software",
        name: "expenses",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create a budget plan based on the following revenue: {revenue} and expenses: {expenses}.",
    categorySlug: "financial-analysis",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "cash-flow-analysis",
    title: "Perform a Cash Flow Analysis",
    description:
      "Analyze cash inflows and outflows to assess financial health.",
    fields: [
      {
        label: "Income Sources",
        placeholder: "List all income sources",
        name: "income",
        required: true,
        type: "textarea",
      },
      {
        label: "Expense Categories",
        placeholder: "List all major expenses",
        name: "expenses",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Perform a cash flow analysis based on income: {income} and expenses: {expenses}.",
    categorySlug: "financial-analysis",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "investment-risk",
    title: "Assess Investment Risk",
    description: "Evaluate the potential risks and rewards of an investment.",
    fields: [
      {
        label: "Investment Type",
        placeholder: "e.g., Stocks, Real Estate, Crypto",
        name: "investment_type",
        required: true,
        type: "text",
      },
      {
        label: "Risk Factors",
        placeholder: "List key risks such as market volatility, liquidity",
        name: "risks",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Assess the risks associated with {investment_type} considering factors: {risks}.",
    categorySlug: "financial-analysis",
    estimatedTime: "5 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "profitability-analysis",
    title: "Conduct a Profitability Analysis",
    description: "Analyze the profitability of a product or service.",
    fields: [
      {
        label: "Revenue Data",
        placeholder: "Enter revenue details",
        name: "revenue",
        required: true,
        type: "textarea",
      },
      {
        label: "Cost Structure",
        placeholder: "List fixed and variable costs",
        name: "costs",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Conduct a profitability analysis using revenue: {revenue} and costs: {costs}.",
    categorySlug: "financial-analysis",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "roi-calculation",
    title: "Calculate Return on Investment (ROI)",
    description: "Compute ROI to determine the efficiency of an investment.",
    fields: [
      {
        label: "Investment Amount",
        placeholder: "Enter initial investment amount",
        name: "investment",
        required: true,
        type: "text",
      },
      {
        label: "Return Generated",
        placeholder: "Enter total return from the investment",
        name: "return",
        required: true,
        type: "text",
      },
    ],
    examplePrompt:
      "Calculate the ROI for an investment of {investment} with a return of {return}.",
    categorySlug: "financial-analysis",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "invoice-template",
    title: "Generate an Invoice Template",
    description:
      "Create a structured invoice template with key financial details.",
    fields: [
      {
        label: "Business Name",
        placeholder: "Enter your business name",
        name: "business_name",
        required: true,
        type: "text",
      },
      {
        label: "Client Name",
        placeholder: "Enter client name",
        name: "client_name",
        type: "text",
      },
    ],
    examplePrompt:
      "Generate an invoice template for {business_name} billing {client_name}.",
    categorySlug: "financial-analysis",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "expense-tracker",
    title: "Set Up an Expense Tracker",
    description: "Generate a structured format for tracking expenses.",
    fields: [
      {
        label: "Expense Categories",
        placeholder:
          "List expense categories (e.g., travel, utilities, marketing)",
        name: "categories",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Create an expense tracker for the following categories: {categories}.",
    categorySlug: "financial-analysis",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "break-even-analysis",
    title: "Perform a Break-Even Analysis",
    description: "Calculate the break-even point for a business or project.",
    fields: [
      {
        label: "Fixed Costs",
        placeholder: "Enter total fixed costs",
        name: "fixed_costs",
        required: true,
        type: "text",
      },
      {
        label: "Variable Costs per Unit",
        placeholder: "Enter variable costs per unit",
        name: "variable_costs",
        required: true,
        type: "text",
      },
      {
        label: "Price per Unit",
        placeholder: "Enter the selling price per unit",
        name: "price_per_unit",
        required: true,
        type: "text",
      },
    ],
    examplePrompt:
      "Calculate the break-even point using fixed costs: {fixed_costs}, variable costs: {variable_costs}, and price per unit: {price_per_unit}.",
    categorySlug: "financial-analysis",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "payroll-calculator",
    title: "Generate a Payroll Calculation",
    description:
      "Create a payroll calculation for employees based on salary and deductions.",
    fields: [
      {
        label: "Employee Salary",
        placeholder: "Enter salary amount",
        name: "salary",
        required: true,
        type: "text",
      },
      {
        label: "Tax & Deductions",
        placeholder: "Enter estimated tax and deductions",
        name: "deductions",
        type: "text",
      },
    ],
    examplePrompt:
      "Calculate payroll for an employee with salary: {salary} and deductions: {deductions}.",
    categorySlug: "financial-analysis",
    estimatedTime: "3 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "pricing-strategy",
    title: "Develop a Pricing Strategy",
    description:
      "Analyze and recommend a pricing strategy for a product or service.",
    fields: [
      {
        label: "Product/Service Name",
        placeholder: "Enter product or service name",
        name: "product_name",
        required: true,
        type: "text",
      },
      {
        label: "Target Market",
        placeholder: "Define target customers and competitors",
        name: "target_market",
        type: "textarea",
      },
    ],
    examplePrompt:
      "Develop a pricing strategy for {product_name} targeting {target_market}.",
    categorySlug: "financial-analysis",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
];
