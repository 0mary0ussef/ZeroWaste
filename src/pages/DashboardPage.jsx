import { Box, Paper } from "@mui/material"
import Navbar from "../components/Navbar"

function DashboardPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        {/* Sidebar */}
        <Box
          component="nav"
          sx={{
            width: { sm: 240 },
            flexShrink: { sm: 0 },
            display: { xs: "none", sm: "block" },
          }}
        >
          <Paper
            sx={{
              height: "calc(100vh - 64px)",
              position: "fixed",
              width: 240,
              borderRadius: 0,
              p: 2,
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.05)",
            }}
          >
            {/* Rest of the sidebar content remains the same */}
          </Paper>
        </Box>

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - 240px)` },
            ml: { sm: "240px" },
            bgcolor: "#ffffff",
          }}
        >
          {/* Rest of the main content remains the same */}
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardPage

