import { Link, useLocation } from "react-router-dom";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

function Navbar() {
  const theme = useTheme();
  const location = useLocation();
  let currentPath = location.pathname.split("/")[1];
  currentPath = currentPath === "" ? "overallStats" : currentPath;

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.primary[600] }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, color: theme.palette.secondary.main }}
        >
          Navbar
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", width: "50%" }}>
          <Link
            to={`/${currentPath}/insertion`}
            style={{
              textDecoration: "none",
              color: theme.palette.primary.main,
            }}
          >
            <Typography
              variant="body1"
              sx={{ marginRight: 2, color: theme.palette.secondary.main }}
            >
              Insertion
            </Typography>
          </Link>
          <Link
            to={`/${currentPath}/search`}
            style={{
              textDecoration: "none",
              color: theme.palette.primary.main,
            }}
          >
            <Typography
              variant="body1"
              sx={{ marginRight: 2, color: theme.palette.secondary.main }}
            >
              Search
            </Typography>
          </Link>
          <Link
            to={`/${currentPath}/deletion`}
            style={{
              textDecoration: "none",
              color: theme.palette.secondary.main,
            }}
          >
            <Typography
              variant="body1"
              sx={{ marginRight: 2, color: theme.palette.secondary.main }}
            >
              Deletion
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
