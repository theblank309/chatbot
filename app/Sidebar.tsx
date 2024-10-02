import { Box, Flex } from "@radix-ui/themes";
import {
  Brain,
  FileSearch,
  NotebookPen,
  Settings,
  Sparkles,
} from "lucide-react";
import CustomSideTooltip from "./components/CustomSideTooltip";

const Sidebar = () => {
  return (
    <Box height="100%" className="border-r-2">
      <Box className="mb-10">
        <Sparkles className="size-14 bg-muted p-2 border-2 border-border rounded-lg" />
      </Box>

      <Flex
        direction="column"
        className="ml-1 h-auto"
        justify="between"
        height="84%"
      >
        <Flex direction="column" gapY="3">
          <CustomSideTooltip content="History" active={true}>
            <NotebookPen className="size-7" />
          </CustomSideTooltip>

          <CustomSideTooltip content="Model Configs">
            <Brain className="size-7" />
          </CustomSideTooltip>

          <CustomSideTooltip content="File Q&A">
            <FileSearch className="size-7" />
          </CustomSideTooltip>
        </Flex>

        <Box>
          <CustomSideTooltip content="Settings">
            <Settings className="size-7" />
          </CustomSideTooltip>
        </Box>
      </Flex>
    </Box>
  );
};

export default Sidebar;
