import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Box, Flex } from "@radix-ui/themes";
import { CornerDownLeft, Paperclip } from "lucide-react";
import React from "react";

const ChatInterface = () => {
  return (
    <Flex
      className="h-full rounded-xl bg-muted/20 p-4 border border-border"
      position="relative"
      direction="column"
    >
      <Box className="flex-1"></Box>
      <form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
        <Textarea
          id="message"
          placeholder="Type your message here..."
          className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
        />
        <Flex align="center" p="3" pt="0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Paperclip className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Attach File</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button type="submit" size="sm" className="ml-auto gap-1.5">
            Send Message
            <CornerDownLeft className="size-3.5" />
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default ChatInterface;
