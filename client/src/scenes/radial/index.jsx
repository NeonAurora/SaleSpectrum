import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
import RadialChart from "components/RadialChart";

const Radial = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="40px" height="75vh">
        <RadialChart />
      </Box>
    </Box>
  );
};

export default Radial;
