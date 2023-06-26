import { Route, Routes, Outlet } from "react-router-dom";
import { Container, Typography, Box, useTheme } from "@mui/material";
import OverallStatsInsertion from "scenes/OverallStats/OverallStatsInsertion";
import OverallStatsSearch from "scenes/OverallStats/OverallStatsSearch";
import OverallStatsDeletion from "scenes/OverallStats/OverallStatsDeletion";

function OverallStats() {
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
          Overall Stats
        </Typography>
        <Routes>
          <Route
            path="/"
            element={<Typography sx={{color: 'white'}}>Please select an Operation from the navbar.</Typography>}
          />
          <Route path="insertion" element={<OverallStatsInsertion />} />
          <Route path="search" element={<OverallStatsSearch />} />
          <Route path="deletion" element={<OverallStatsDeletion />} />
        </Routes>
        <Outlet />
      </Box>
    </Container>
  );
}

export default OverallStats;
