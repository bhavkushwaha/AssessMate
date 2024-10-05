"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  FileQuestion,
  User,
} from "lucide-react";

const tools = [
  {
    label: "Quiz Generation",
    icon: FileQuestion,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/quiz",
  },
  {
    label: "Doubts Solving",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Coding Assistant",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
  {
    label: "Interview PrepAI",
    icon: User,
    color: "text-yellow-700",
    bgColor: "bg-yellow-700/10",
    href: "/interview",
  },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4 pb-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          AssessMate
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Resolve your queries!
        </p>

        <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((tool) => (
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.href}
              className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>

              <ArrowRight className="w-5 h-5" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
