import { Workflow } from "@/types/workflow";
import { marketingWorkflows } from "@/data/workflows/marketing-content";
import { customerCommunicationWorkflows } from "@/data/workflows/customer-communication";
import { dataAnalysisWorkflows } from "@/data/workflows/data-analysis";
import { hrTasksWorkflows } from "@/data/workflows/hr-tasks";
import { projectManagementWorkflows } from "@/data/workflows/project-management";
import { productDevelopmentWorkflows } from "@/data/workflows/product-development";
import { customerSupportWorkflows } from "@/data/workflows/customer-support";
import { salesOutreachWorkflows } from "@/data/workflows/sales-outreach";
import { trainingDocsWorkflows } from "@/data/workflows/training-docs";
import { productivityToolsWorkflows } from "@/data/workflows/productivity-tools";
import { financialAnalysisWorkflows } from "./financial-analysis";
import { businessStrategyWorkflows } from "./business-strategy";

export const categoryWorkflowsMap: Record<string, Workflow[]> = {
  "marketing-content": marketingWorkflows,
  "customer-communication": customerCommunicationWorkflows,
  "data-analysis": dataAnalysisWorkflows,
  "hr-recruitment": hrTasksWorkflows,
  "project-management": projectManagementWorkflows,
  "product-development": productDevelopmentWorkflows,
  "customer-support": customerSupportWorkflows,
  "sales-outreach": salesOutreachWorkflows,
  "training-docs": trainingDocsWorkflows,
  "productivity-tools": productivityToolsWorkflows,
  "financial-analysis": financialAnalysisWorkflows,
  "business-strategy": businessStrategyWorkflows,
};
