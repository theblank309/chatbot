import { Box, Grid } from "@radix-ui/themes";
import SideSection from "./SideSection";

const Main = () => {
  return (
    <Grid
      columns="0.30fr 1fr"
      width="auto"
      rows="1"
      height="calc(100vh - 6.5rem)"
    >
      <SideSection />
      {/* <Box className="bg-green-300 "></Box> */}
    </Grid>
  );
};

export default Main;
