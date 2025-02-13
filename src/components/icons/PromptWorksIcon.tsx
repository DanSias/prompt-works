import React from "react";

/**
 * PromptWorksIcon Component
 *
 * A scalable, Tailwind-styled SVG icon representing AI productivity and workflows.
 * Can be reused across the app and customized via className props.
 */

const PromptWorksIcon = ({
  className = "w-6 h-6 text-blue-600",
}: {
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`fill-current ${className}`}>
      <path d="M17.895 3.553A1 1 0 0 0 17 3H7c-.379 0-.725.214-.895.553l-4 8a1 1 0 0 0 0 .895l4 8c.17.338.516.552.895.552h10c.379 0 .725-.214.895-.553l4-8a1 1 0 0 0 0-.895zM19.382 11h-7.764l-3-6h7.764zM4.118 12L7 6.236L9.882 12L7 17.764zm12.264 7H8.618l3-6h7.764z" />
    </svg>
  );
};

export default PromptWorksIcon;
