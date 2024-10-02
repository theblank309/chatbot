import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const History = () => {
  return (
    <fieldset className="flex flex-col gap-6 rounded-lg border-2 pl-3 py-3 h-[100%]">
      <legend className="-ml-1 px-1 text-lg font-medium">History</legend>
      <ScrollArea className="h-[100%]">
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2 w-[95%]" />
          </>
        ))}
      </ScrollArea>
    </fieldset>
  );
};

export default History;
