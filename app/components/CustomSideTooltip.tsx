import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { NotebookPen } from "lucide-react";
import React from "react";

interface Props {
  content: string;
  active?: boolean;
  children: React.ReactNode;
}

const CustomSideTooltip = ({ content, active = false, children }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-lg size-12 p-2 ${active ? "bg-muted" : ""}`}
          >
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomSideTooltip;
