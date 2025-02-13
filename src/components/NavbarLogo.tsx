import Link from "next/link";
import PromptWorksIcon from "@/components/icons/PromptWorksIcon";

export default function NavbarLogo() {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2 group">
        {/* Icon rotates when hovering over either the icon or text */}
        <PromptWorksIcon className="w-6 h-6 text-blue-400 transition-transform duration-300 group-hover:rotate-90" />
        <span className="text-xl font-semibold">PromptWorks</span>
      </div>
    </Link>
  );
}
