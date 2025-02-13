// Category Workflows Map
// This file maps workflow categories to their respective workflow lists.
// It serves as a central index for accessing workflows by category throughout the application.

import { Workflow } from "@/types/workflow";
import { businessStrategyWorkflows } from "./business-strategy";
import { customerExperienceWorkflows } from "./customer-experience";
import { dataAnalysisWorkflows } from "@/data/workflows/data-analysis";
import { financialAnalysisWorkflows } from "./financial-analysis";
import { hrTasksWorkflows } from "@/data/workflows/hr-tasks";
import { marketingWorkflows } from "@/data/workflows/marketing-content";
import { productDevelopmentWorkflows } from "@/data/workflows/product-development";
import { productivityToolsWorkflows } from "@/data/workflows/productivity-tools";
import { projectManagementWorkflows } from "@/data/workflows/project-management";
import { salesOutreachWorkflows } from "@/data/workflows/sales-outreach";
import { trainingDocsWorkflows } from "@/data/workflows/training-docs";

export const categoryWorkflowsMap: Record<string, Workflow[]> = {
  "business-strategy": businessStrategyWorkflows,
  "customer-experience": customerExperienceWorkflows,
  "data-analysis": dataAnalysisWorkflows,
  "financial-analysis": financialAnalysisWorkflows,
  "hr-recruitment": hrTasksWorkflows,
  "marketing-content": marketingWorkflows,
  "product-development": productDevelopmentWorkflows,
  "productivity-tools": productivityToolsWorkflows,
  "project-management": projectManagementWorkflows,
  "sales-outreach": salesOutreachWorkflows,
  "training-docs": trainingDocsWorkflows,
};
