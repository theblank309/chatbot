"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { Brain, FileSearch, NotebookPen, Settings } from "lucide-react";
import React from "react";
import { useState } from "react";
import History from "./_sidesections/History";
import { Separator } from "@/components/ui/separator";

const SideSection = () => {
  const [selectedSection, setSelectedSection] = useState(1);

  return (
    <Grid columns="4rem 1fr" width="auto" rows="1" className="h-[100%]">
      <Flex direction="column" px="1" gapY="4" className="border-r-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg size-12 p-2"
              >
                <NotebookPen className="size-10" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>History</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg size-12 p-2"
              >
                <Brain className="size-10" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Model Configs</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg size-12 p-2"
              >
                <FileSearch className="size-10" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>File Q&A</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg size-12 p-2"
              >
                <Settings className="size-10" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Setting</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Flex>

      <Box className="h-[100%] mx-4">
        <History />
      </Box>
    </Grid>
  );
};

export default SideSection;
