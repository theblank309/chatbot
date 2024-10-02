import { Box, Grid } from "@radix-ui/themes";
import React from "react";
import Navbar from "./Navbar";
import ChatInterface from "./ChatInterface";

const Main = () => {
  return (
    <Grid columns="1" rows="4.5rem 1fr" height="100%">
      <Navbar />
      {/* <Box className="bg-blue-200"></Box> */}
      <ChatInterface />
    </Grid>
  );
};

export default Main;
