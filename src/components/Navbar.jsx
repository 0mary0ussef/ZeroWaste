"use client"

import { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material"
import { Link as RouterLink, useLocation } from "react-router-dom"
import RecyclingIcon from "@mui/icons-material/Recycling"
import MenuIcon from "@mui/icons-material/Menu"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Marketplace", path: "/marketplace" },
  { name: "Community", path: "/community" },
  { name: "Recycling Tips", path: "/recycling-tips" },
  { name: "Contact", path: "/contact" },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
        <RecyclingIcon sx={{ mr: 1, color: "primary.main" }} />
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "primary.main",
            textDecoration: "none",
            fontSize: "1.3rem",
          }}
        >
          ZeroWaste
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              sx={{
                textAlign: "center",
                bgcolor: isActive(item.path) ? "primary.light" : "transparent",
                color: isActive(item.path) ? "primary.main" : "inherit",
                fontSize: "1rem",
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/login" sx={{ textAlign: "center", fontSize: "1rem" }}>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={RouterLink}
            to="/signup"
            sx={{ textAlign: "center", bgcolor: "primary.main", color: "white", my: 1, mx: 2, fontSize: "1rem" }}
          >
            <ListItemText primary="Sign Up" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "white", color: "text.primary", boxShadow: "0px 2px 4px rgba(0,0,0,0.05)" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <RecyclingIcon sx={{ mr: 1, color: "primary.main", fontSize: "1.8rem" }} />
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "primary.main",
                textDecoration: "none",
                fontSize: "1.3rem",
                ":hover": {
                  color: "primary.dark",
                },
              }}
            >
              ZeroWaste
            </Typography>
          </Box>

          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center", gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: isActive(item.path) ? "primary.main" : "text.primary",
                  fontWeight: 600,
                  fontSize: "1rem",
                  position: "relative",
                  "&::after": isActive(item.path)
                    ? {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "60%",
                        height: 3,
                        bgcolor: "primary.main",
                        borderRadius: 1.5,
                      }
                    : {},
                  "&:hover": {
                    bgcolor: "transparent",
                    color: "primary.main",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Auth buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: 2 }}>
            <Button
              component={RouterLink}
              to="/login"
              variant="outlined"
              color="primary"
              sx={{
                fontWeight: 600,
                mr: 1.5,
                px: 2.5,
                py: 0.8,
                fontSize: "0.95rem",
                borderWidth: 2,
                "&:hover": {
                  borderWidth: 2,
                  backgroundColor: "rgba(65, 171, 93, 0.04)",
                },
              }}
            >
              Login
            </Button>
            <Button
              component={RouterLink}
              to="/signup"
              variant="contained"
              color="primary"
              sx={{
                fontWeight: 600,
                px: 2.5,
                py: 0.8,
                fontSize: "0.95rem",
                boxShadow: "0 4px 10px rgba(65, 171, 93, 0.3)",
                "&:hover": {
                  boxShadow: "0 6px 12px rgba(65, 171, 93, 0.4)",
                  backgroundColor: "#3a9a54",
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  )
}

export default Navbar

