import { Workflow } from "@/types/workflow";
import { marketingWorkflows } from "@/data/workflows/marketing-content";
import { customerCommunicationWorkflows } from "@/data/workflows/customer-communication";
// Import additional category workflows here as you expand

export const categoryWorkflowsMap: Record<string, Workflow[]> = {
  "marketing-content": marketingWorkflows,
  "customer-communication": customerCommunicationWorkflows, // Add this line
  // Add other categories here when needed
};
