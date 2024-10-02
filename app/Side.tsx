import { Box, Flex, Grid } from "@radix-ui/themes";
import React from "react";
import Sidebar from "./Sidebar";
import History from "./_sidesections/History";

const Side = () => {
  return (
    <Grid columns="5rem 1fr" className="h-dvh">
      <Box className="ml-3 mt-2">
        <Sidebar />
      </Box>
      <Flex
        className="mx-3 pb-4"
        height="calc(93vh - 0.5rem)"
        direction="column"
        style={{ alignSelf: "end" }}
      >
        <History />
      </Flex>
    </Grid>
  );
};

export default Side;
