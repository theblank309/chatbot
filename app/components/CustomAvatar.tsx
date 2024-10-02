import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Box } from "@radix-ui/themes";

const CustomAvatar = () => {
  return (
    <Box>
      <Avatar className="size-12 border-2 border-border rounded-lg bg-muted">
        <AvatarFallback className="text-lg">SM</AvatarFallback>
      </Avatar>
    </Box>
  );
};

export default CustomAvatar;
