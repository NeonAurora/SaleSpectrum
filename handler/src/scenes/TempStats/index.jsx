import { Route, Routes, Outlet } from "react-router-dom";
import { Container, Typography, Box, useTheme } from "@mui/material";
import TempStatsInsertion from "scenes/TempStats/TempStatsInsertion";
import TempStatsSearch from "scenes/TempStats/TempStatsSearch";
import TempStatsDeletion from "scenes/TempStats/TempStatsDeletion";

function TempStats() {
  const theme = useTheme();
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "2rem",
          borderRadius: "0.55rem",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: "1rem",
            color: theme.palette.secondary.main,
          }}
        >
          Temp Stats
        </Typography>
        <Routes>
          <Route
            path="/"
            element={<Typography sx={{color: 'white'}}>Please select an Operation from the navbar.</Typography>}
          />
          <Route path="insertion" element={<TempStatsInsertion />} />
          <Route path="search" element={<TempStatsSearch />} />
          <Route path="deletion" element={<TempStatsDeletion />} />
        </Routes>
        <Outlet />
      </Box>
    </Container>
  );
}

export default TempStats;
