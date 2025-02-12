export interface Workflow {
  id: string; // Unique identifier for the workflow
  title: string; // Display title of the workflow
  description: string; // Brief description of what the workflow does
  fields: {
    label: string; // Label displayed in the form
    placeholder: string; // Placeholder text inside the input
    name: string; // Key used for storing user input
    required?: boolean; // Whether the field is mandatory
    type?: "text" | "textarea" | "select"; // Specifies the input type
    options?: string[]; // For select fields, list of predefined options
  }[];
  allowCustomFields?: boolean; // Enable users to add custom fields if needed
  examplePrompt?: string; // Template for generating the final prompt
  categorySlug?: string; // Links workflow to its parent category
  estimatedTime?: string; // Approximate time to complete the workflow
  difficultyLevel?: "Beginner" | "Intermediate" | "Advanced"; // Indicates complexity
}
