import { Workflow } from "@/types/workflow";

/**
 * Data Analysis & Reporting Workflows
 *
 * Provides AI-driven workflows for analyzing, summarizing, and extracting insights from data.
 */

export const dataAnalysisWorkflows: Workflow[] = [
  {
    id: "summarize-report",
    title: "Summarize a Report",
    description: "Generate a concise summary of a lengthy report or dataset.",
    fields: [
      {
        label: "Report Content",
        placeholder: "Paste the report or key sections",
        name: "report",
        required: true,
        type: "textarea",
      },
      {
        label: "Summary Length",
        placeholder: "e.g., 3 bullet points, 1 paragraph",
        name: "length",
        type: "text",
      },
    ],
    examplePrompt:
      "Summarize the following report: {report} in {length} format.",
    categorySlug: "data-analysis",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "trend-analysis",
    title: "Identify Trends in Data",
    description: "Analyze data to detect key trends and patterns.",
    fields: [
      {
        label: "Dataset Information",
        placeholder: "Describe the dataset or paste relevant data",
        name: "dataset",
        required: true,
        type: "textarea",
      },
      {
        label: "Timeframe",
        placeholder: "e.g., Last 6 months",
        name: "timeframe",
        type: "text",
      },
    ],
    examplePrompt:
      "Analyze the following dataset: {dataset} and identify key trends over {timeframe}.",
    categorySlug: "data-analysis",
    estimatedTime: "3 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "extract-key-insights",
    title: "Extract Key Insights",
    description: "Find the most important takeaways from a dataset or report.",
    fields: [
      {
        label: "Data/Input",
        placeholder: "Provide raw data or detailed content",
        name: "data",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt: "Extract key insights from the following data: {data}.",
    categorySlug: "data-analysis",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "generate-visualization",
    title: "Generate Data Visualizations",
    description: "Describe data to get AI recommendations for graphs & charts.",
    fields: [
      {
        label: "Dataset Description",
        placeholder: "Describe the data you want visualized",
        name: "dataset",
        required: true,
        type: "textarea",
      },
      {
        label: "Preferred Chart Type",
        placeholder: "e.g., Bar chart, Pie chart, Line graph",
        name: "chart_type",
        type: "text",
      },
    ],
    examplePrompt:
      "Suggest the best visualization for the following dataset: {dataset}. Preferred chart type: {chart_type}.",
    categorySlug: "data-analysis",
    estimatedTime: "3 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "data-cleaning",
    title: "Data Cleaning Suggestions",
    description: "Identify and recommend fixes for inconsistencies in data.",
    fields: [
      {
        label: "Raw Data",
        placeholder: "Paste or describe the dataset",
        name: "raw_data",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Suggest ways to clean and normalize the following data: {raw_data}.",
    categorySlug: "data-analysis",
    estimatedTime: "3 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "predictive-modeling",
    title: "Basic Predictive Modeling",
    description: "Generate AI-driven predictions based on past data trends.",
    fields: [
      {
        label: "Historical Data",
        placeholder: "Provide past data for prediction",
        name: "historical_data",
        required: true,
        type: "textarea",
      },
      {
        label: "Prediction Goal",
        placeholder: "e.g., Sales forecast, Market demand",
        name: "goal",
        type: "text",
      },
    ],
    examplePrompt:
      "Using {historical_data}, predict {goal} for the next period.",
    categorySlug: "data-analysis",
    estimatedTime: "4 mins",
    difficultyLevel: "Advanced",
  },
  {
    id: "competitor-benchmarking",
    title: "Competitor Benchmarking",
    description: "Analyze competitor data and compare it to your business.",
    fields: [
      {
        label: "Your Business Data",
        placeholder: "Describe or provide key metrics",
        name: "business_data",
        required: true,
        type: "textarea",
      },
      {
        label: "Competitor Data",
        placeholder: "Describe key competitor data",
        name: "competitor_data",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Compare the following data: {business_data} vs. {competitor_data}. Identify key differences and strengths.",
    categorySlug: "data-analysis",
    estimatedTime: "4 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "sentiment-analysis",
    title: "Perform Sentiment Analysis",
    description:
      "Analyze text data to determine overall sentiment (positive, neutral, negative).",
    fields: [
      {
        label: "Text Data",
        placeholder:
          "Paste customer reviews, survey responses, or social media comments",
        name: "text_data",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Analyze the sentiment of the following text: {text_data} and classify it as positive, neutral, or negative.",
    categorySlug: "data-analysis",
    estimatedTime: "2 mins",
    difficultyLevel: "Beginner",
  },
  {
    id: "correlation-analysis",
    title: "Find Correlations in Data",
    description:
      "Identify relationships and correlations between different data variables.",
    fields: [
      {
        label: "Dataset Variables",
        placeholder: "Describe or provide key variables to analyze",
        name: "variables",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Analyze the correlation between {variables} and determine significant relationships.",
    categorySlug: "data-analysis",
    estimatedTime: "3 mins",
    difficultyLevel: "Intermediate",
  },
  {
    id: "anomaly-detection",
    title: "Detect Anomalies in Data",
    description: "Identify outliers and unusual patterns in datasets.",
    fields: [
      {
        label: "Dataset Information",
        placeholder: "Describe the dataset and key metrics",
        name: "dataset_info",
        required: true,
        type: "textarea",
      },
    ],
    examplePrompt:
      "Detect anomalies in the following dataset: {dataset_info} and explain possible causes.",
    categorySlug: "data-analysis",
    estimatedTime: "3 mins",
    difficultyLevel: "Advanced",
  },
];
