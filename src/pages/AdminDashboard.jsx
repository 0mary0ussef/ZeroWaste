"use client";

import { useState } from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Grid,
  Card,
  CardContent,
  Avatar,
  Badge,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RecyclingIcon from "@mui/icons-material/Recycling";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CategoryIcon from "@mui/icons-material/Category";
import FeedbackIcon from "@mui/icons-material/Feedback";
import EventIcon from "@mui/icons-material/Event";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240;
const collapsedDrawerWidth = 65;

// Mock data for dashboard
const recentOrders = [
  {
    id: "#ORD-5331",
    customer: "Emma Johnson",
    date: "2023-06-10",
    status: "Completed",
    total: "$120.00",
  },
  {
    id: "#ORD-5330",
    customer: "David Chen",
    date: "2023-06-09",
    status: "Processing",
    total: "$85.50",
  },
  {
    id: "#ORD-5329",
    customer: "Sarah Williams",
    date: "2023-06-09",
    status: "Completed",
    total: "$220.00",
  },
  {
    id: "#ORD-5328",
    customer: "Michael Rodriguez",
    date: "2023-06-08",
    status: "Cancelled",
    total: "$65.00",
  },
  {
    id: "#ORD-5327",
    customer: "Olivia Thompson",
    date: "2023-06-08",
    status: "Completed",
    total: "$175.25",
  },
];

// Update the recentUsers mock data to include points
const recentUsers = [
  {
    id: 1,
    name: "Emma Johnson",
    email: "emma.j@example.com",
    joined: "2023-06-01",
    status: "Active",
    points: 1250,
  },
  {
    id: 2,
    name: "David Chen",
    email: "david.c@example.com",
    joined: "2023-06-03",
    status: "Active",
    points: 980,
  },
  {
    id: 3,
    name: "Sarah Williams",
    email: "sarah.w@example.com",
    joined: "2023-06-05",
    status: "Inactive",
    points: 750,
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    email: "michael.r@example.com",
    joined: "2023-06-07",
    status: "Active",
    points: 1120,
  },
  {
    id: 5,
    name: "Olivia Thompson",
    email: "olivia.t@example.com",
    joined: "2023-05-20",
    status: "Active",
    points: 1560,
  },
  {
    id: 6,
    name: "James Wilson",
    email: "james.w@example.com",
    joined: "2023-05-15",
    status: "Active",
    points: 890,
  },
];

// Add topUsers data for the ranking board
const topUsers = [
  {
    id: 5,
    name: "Olivia Thompson",
    points: 1560,
    avatar: "https://source.unsplash.com/100x100/?woman",
  },
  {
    id: 1,
    name: "Emma Johnson",
    points: 1250,
    avatar: "https://source.unsplash.com/100x100/?portrait",
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    points: 1120,
    avatar: "https://source.unsplash.com/100x100/?man",
  },
  {
    id: 2,
    name: "David Chen",
    points: 980,
    avatar: "https://source.unsplash.com/100x100/?person",
  },
  {
    id: 6,
    name: "James Wilson",
    points: 890,
    avatar: "https://source.unsplash.com/100x100/?profile",
  },
];

const recentListings = [
  {
    id: 1,
    name: "Vintage Leather Jacket",
    seller: "Emma Johnson",
    price: "$120.00",
    status: "Active",
  },
  {
    id: 2,
    name: "Mid-Century Modern Chair",
    seller: "David Chen",
    price: "$250.00",
    status: "Active",
  },
  {
    id: 3,
    name: "Retro Gaming Console",
    seller: "Sarah Williams",
    price: "$80.00",
    status: "Sold",
  },
  {
    id: 4,
    name: "Abstract Art Painting",
    seller: "Michael Rodriguez",
    price: "$180.00",
    status: "Active",
  },
];

const AdminDashboard = () => {
  const [open, setOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const mainListItems = [
    { text: "Dashboard", icon: DashboardIcon, path: "/admin" },
    { text: "Users", icon: PeopleIcon, path: "/admin/users" },
    { text: "Orders", icon: ShoppingCartIcon, path: "/admin/orders" },
    { text: "Products", icon: InventoryIcon, path: "/admin/products" },
    { text: "Categories", icon: CategoryIcon, path: "/admin/categories" },
    { text: "Recycling", icon: RecyclingIcon, path: "/admin/recycling" },
    { text: "Events", icon: EventIcon, path: "/admin/events" },
    { text: "Feedback", icon: FeedbackIcon, path: "/admin/feedback" },
    { text: "Reports", icon: BarChartIcon, path: "/admin/reports" },
    { text: "Settings", icon: SettingsIcon, path: "/admin/settings" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "white",
          color: "text.primary",
          boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          transition: (theme) =>
            theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: (theme) =>
              theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
          }),
          ...(!open && {
            marginLeft: collapsedDrawerWidth,
            width: `calc(100% - ${collapsedDrawerWidth}px)`,
          }),
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ marginRight: 5, display: { xs: "none", md: "flex" } }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Admin Dashboard
          </Typography>
          <TextField
            placeholder="Search..."
            size="small"
            sx={{ mr: 2, width: 200 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" sx={{ ml: 1 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: "primary.main" }}>
              <PersonIcon fontSize="small" />
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : collapsedDrawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: open ? drawerWidth : collapsedDrawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid rgba(0, 0, 0, 0.08)",
            overflowX: "hidden",
            transition: (theme) =>
              theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
          },
          display: { xs: "none", md: "block" },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "space-between" : "center",
            px: [1],
            minHeight: "64px !important",
          }}
        >
          {open && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <RecyclingIcon sx={{ mr: 1, color: "primary.main" }} />
              <Typography
                variant="h6"
                color="primary.main"
                sx={{ fontWeight: 700 }}
              >
                ZeroWaste
              </Typography>
            </Box>
          )}
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems.map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                selected={
                  isActive(item.path) ||
                  (item.path === "/admin" && location.pathname === "/admin")
                }
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    isActive(item.path) ||
                    (item.path === "/admin" && location.pathname === "/admin")
                      ? "rgba(65, 171, 93, 0.1)"
                      : "transparent",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color:
                      isActive(item.path) ||
                      (item.path === "/admin" && location.pathname === "/admin")
                        ? "primary.main"
                        : "inherit",
                  }}
                >
                  <item.icon />
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color:
                      isActive(item.path) ||
                      (item.path === "/admin" && location.pathname === "/admin")
                        ? "primary.main"
                        : "inherit",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider sx={{ my: 1 }} />
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate("/")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: [1],
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <RecyclingIcon sx={{ mr: 1, color: "primary.main" }} />
            <Typography
              variant="h6"
              color="primary.main"
              sx={{ fontWeight: 700 }}
            >
              ZeroWaste
            </Typography>
          </Box>
          <IconButton onClick={handleDrawerToggle}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => {
                  handleNavigation(item.path);
                  handleDrawerToggle();
                }}
                selected={
                  isActive(item.path) ||
                  (item.path === "/admin" && location.pathname === "/admin")
                }
                sx={{
                  bgcolor:
                    isActive(item.path) ||
                    (item.path === "/admin" && location.pathname === "/admin")
                      ? "rgba(65, 171, 93, 0.1)"
                      : "transparent",
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      isActive(item.path) ||
                      (item.path === "/admin" && location.pathname === "/admin")
                        ? "primary.main"
                        : "inherit",
                  }}
                >
                  <item.icon />
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    color:
                      isActive(item.path) ||
                      (item.path === "/admin" && location.pathname === "/admin")
                        ? "primary.main"
                        : "inherit",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider sx={{ my: 1 }} />
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: "#f5f5f5",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          pt: 8,
          transition: (theme) =>
            theme.transitions.create("margin", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* Dashboard Overview */}
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
            Dashboard Overview
          </Typography>

          {/* Stats Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: "primary.light",
                        color: "primary.main",
                        mr: 2,
                      }}
                    >
                      <PeopleIcon />
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Users
                    </Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    1,245
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +12% from last month
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: "success.light",
                        color: "success.main",
                        mr: 2,
                      }}
                    >
                      <ShoppingCartIcon />
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Orders
                    </Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    356
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +8% from last month
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: "warning.light",
                        color: "warning.main",
                        mr: 2,
                      }}
                    >
                      <AttachMoneyIcon />
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Revenue
                    </Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    $12,456
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +15% from last month
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar
                      sx={{ bgcolor: "info.light", color: "info.main", mr: 2 }}
                    >
                      <RecyclingIcon />
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Recycled Items
                    </Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    2,845
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +20% from last month
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Tabs for different sections */}
          <Paper sx={{ mb: 4, borderRadius: 2 }}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <Tab label="Recent Orders" />
              <Tab label="Recent Users" />
              <Tab label="Recent Listings" />
            </Tabs>
            <Box sx={{ p: 3 }}>
              {selectedTab === 0 && (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Recent Orders
                    </Typography>
                    <Button variant="outlined" size="small">
                      View All Orders
                    </Button>
                  </Box>
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Order ID</TableCell>
                          <TableCell>Customer</TableCell>
                          <TableCell>Date</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Total</TableCell>
                          <TableCell align="right">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {recentOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell>{order.id}</TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>
                              <Chip
                                label={order.status}
                                color={
                                  order.status === "Completed"
                                    ? "success"
                                    : order.status === "Processing"
                                    ? "warning"
                                    : "error"
                                }
                                size="small"
                              />
                            </TableCell>
                            <TableCell>{order.total}</TableCell>
                            <TableCell align="right">
                              <IconButton size="small">
                                <EditIcon fontSize="small" />
                              </IconButton>
                              <IconButton size="small">
                                <MoreVertIcon fontSize="small" />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}
              {selectedTab === 1 && (
                <Box>
                  <Grid container spacing={3}>
                    {/* User Ranking Board */}
                    <Grid item xs={12} md={4}>
                      <Paper sx={{ p: 2, height: "100%", borderRadius: 2 }}>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, mb: 2 }}
                        >
                          Top Users by Points
                        </Typography>
                        <List>
                          {topUsers.map((user, index) => (
                            <ListItem
                              key={user.id}
                              sx={{
                                mb: 1,
                                bgcolor:
                                  index === 0
                                    ? "rgba(255, 215, 0, 0.1)"
                                    : index === 1
                                    ? "rgba(192, 192, 192, 0.1)"
                                    : index === 2
                                    ? "rgba(205, 127, 50, 0.1)"
                                    : "transparent",
                                borderRadius: 1,
                                border: "1px solid",
                                borderColor:
                                  index === 0
                                    ? "rgba(255, 215, 0, 0.3)"
                                    : index === 1
                                    ? "rgba(192, 192, 192, 0.3)"
                                    : index === 2
                                    ? "rgba(205, 127, 50, 0.3)"
                                    : "transparent",
                              }}
                            >
                              <ListItemIcon>
                                <Avatar
                                  src={user.avatar}
                                  sx={{
                                    border: "2px solid",
                                    borderColor:
                                      index === 0
                                        ? "gold"
                                        : index === 1
                                        ? "silver"
                                        : index === 2
                                        ? "#cd7f32"
                                        : "transparent",
                                  }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Typography
                                      variant="body1"
                                      sx={{ fontWeight: 600 }}
                                    >
                                      {index + 1}. {user.name}
                                    </Typography>
                                  </Box>
                                }
                                secondary={
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      mt: 0.5,
                                    }}
                                  >
                                    <RecyclingIcon
                                      sx={{
                                        fontSize: 16,
                                        mr: 0.5,
                                        color: "primary.main",
                                      }}
                                    />
                                    <Typography
                                      variant="body2"
                                      color="primary.main"
                                      sx={{ fontWeight: 600 }}
                                    >
                                      {user.points} points
                                    </Typography>
                                  </Box>
                                }
                              />
                              <Chip
                                label={`#${index + 1}`}
                                size="small"
                                color={index < 3 ? "primary" : "default"}
                                sx={{
                                  bgcolor:
                                    index === 0
                                      ? "gold"
                                      : index === 1
                                      ? "silver"
                                      : index === 2
                                      ? "#cd7f32"
                                      : undefined,
                                  color: index < 3 ? "white" : undefined,
                                  fontWeight: "bold",
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Paper>
                    </Grid>

                    {/* Users Table */}
                    <Grid item xs={12} md={8}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          Recent Users
                        </Typography>
                        <Button variant="outlined" size="small">
                          View All Users
                        </Button>
                      </Box>
                      <TableContainer
                        component={Paper}
                        sx={{ borderRadius: 2 }}
                      >
                        <Table sx={{ minWidth: 650 }}>
                          <TableHead>
                            <TableRow>
                              <TableCell>ID</TableCell>
                              <TableCell>Name</TableCell>
                              <TableCell>Email</TableCell>
                              <TableCell>Joined</TableCell>
                              <TableCell>Points</TableCell>
                              <TableCell>Status</TableCell>
                              <TableCell align="right">Actions</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {recentUsers.map((user) => (
                              <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.joined}</TableCell>
                                <TableCell>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <RecyclingIcon
                                      sx={{
                                        fontSize: 16,
                                        mr: 0.5,
                                        color: "primary.main",
                                      }}
                                    />
                                    <Typography
                                      variant="body2"
                                      color="primary.main"
                                      sx={{ fontWeight: 600 }}
                                    >
                                      {user.points}
                                    </Typography>
                                  </Box>
                                </TableCell>
                                <TableCell>
                                  <Chip
                                    label={user.status}
                                    color={
                                      user.status === "Active"
                                        ? "success"
                                        : "default"
                                    }
                                    size="small"
                                  />
                                </TableCell>
                                <TableCell align="right">
                                  <IconButton size="small">
                                    <EditIcon fontSize="small" />
                                  </IconButton>
                                  <IconButton size="small">
                                    <DeleteIcon fontSize="small" />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Box>
              )}
              {selectedTab === 2 && (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Recent Listings
                    </Typography>
                    <Button variant="outlined" size="small">
                      View All Listings
                    </Button>
                  </Box>
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }}>
                      <TableHead>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell>Product Name</TableCell>
                          <TableCell>Seller</TableCell>
                          <TableCell>Price</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell align="right">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {recentListings.map((listing) => (
                          <TableRow key={listing.id}>
                            <TableCell>{listing.id}</TableCell>
                            <TableCell>{listing.name}</TableCell>
                            <TableCell>{listing.seller}</TableCell>
                            <TableCell>{listing.price}</TableCell>
                            <TableCell>
                              <Chip
                                label={listing.status}
                                color={
                                  listing.status === "Active"
                                    ? "success"
                                    : "default"
                                }
                                size="small"
                              />
                            </TableCell>
                            <TableCell align="right">
                              <IconButton size="small">
                                <EditIcon fontSize="small" />
                              </IconButton>
                              <IconButton size="small">
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}
            </Box>
          </Paper>

          {/* Quick Actions */}
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Actions
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<AddIcon />}
                  fullWidth
                  sx={{ justifyContent: "flex-start", py: 1 }}
                >
                  Add New User
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<AddIcon />}
                  fullWidth
                  sx={{ justifyContent: "flex-start", py: 1 }}
                >
                  Add New Product
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<BarChartIcon />}
                  fullWidth
                  sx={{ justifyContent: "flex-start", py: 1 }}
                >
                  Generate Reports
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<EventIcon />}
                  fullWidth
                  sx={{ justifyContent: "flex-start", py: 1 }}
                >
                  Schedule Event
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;