"use client";

import {
  Check,
  Code,
  MessageSquare,
  FileQuestion,
  UserIcon,
  Zap,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const tools = [
  {
    label: "Quiz Generation",
    icon: FileQuestion,
    color: "text-violet-500",
    bgColor: "bg-violet-700/10",
   },
  {
    label: "Doubts Solving",
    icon: MessageSquare,
    color: "text-red-500",
    bgColor: "bg-red-700/10",
  },  
  {
    label: "Coding Assistant",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },
  {
    label: "Interview PrepAI",
    icon : UserIcon,
    iconColor : "text-yellow-500",
    bgColor : "bg-yellow-700/10"
  },
];

export const ProModal = () => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1 text-3xl text-purple-600">
              INCREASE LIMIT
            </div>
            <p>Since we are using a paid ChatGPT API,</p>
            <p>Request for more <span className="text-purple-600">FREE</span> generations </p>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <Check className="text-primary w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
            Request More
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
