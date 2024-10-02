import { Box, Grid } from "@radix-ui/themes";
import Side from "./Side";
import Navbar from "./Navbar";
import Main from "./Main";

export default function Home() {
  return (
    <Grid
      columns="0.35fr 1fr"
      className="font-[family-name:var(--font-geist-sans)] overflow-hidden h-dvh"
    >
      <Box>
        <Side />
      </Box>
      <Box height="calc(100dvh - 0.5rem)" className="mx-2 mr-4 pb-2">
        <Main />
      </Box>
    </Grid>
  );
}
