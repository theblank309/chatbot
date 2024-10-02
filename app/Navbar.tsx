import { Box, Flex } from "@radix-ui/themes";
import CustomAvatar from "./components/CustomAvatar";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <Flex align="center" justify="end" direction="row" className="h-[4rem]">
      <Flex direction="row" align="center" gapX="5">
        <Menu className="size-6" />
        <CustomAvatar />
      </Flex>
    </Flex>
  );
};

export default Navbar;
