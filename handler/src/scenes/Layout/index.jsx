import React, { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "components/Layout/Navbar";
import Sidebar from "components/Layout/Sidebar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(isNonMobile);
  const theme = useTheme();

  return (
    <Box
      style={{ backgroundColor: theme.palette.primary[600] }}
      display="flex"
      flexDirection={isNonMobile ? "row" : "column"}
      width="100%"
      height="100%"
    >
      {isNonMobile || isSidebarOpen ? (
        <Sidebar
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      ) : null}
      <Box flexGrow={1} overflow="auto">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box padding={isNonMobile ? 3 : 1}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
