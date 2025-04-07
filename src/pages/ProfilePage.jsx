"use client"

import { useState } from "react"
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  TextField,
  Divider,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
  Badge,
  Card,
  CardContent,
  FormControlLabel,
  Checkbox,
  Alert,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import SaveIcon from "@mui/icons-material/Save"
import CancelIcon from "@mui/icons-material/Cancel"
import DeleteIcon from "@mui/icons-material/Delete"
import RecyclingIcon from "@mui/icons-material/Recycling"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import FavoriteIcon from "@mui/icons-material/Favorite"
import SettingsIcon from "@mui/icons-material/Settings"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import StarIcon from "@mui/icons-material/Star"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"

// Mock user data
const userData = {
  name: "Omar Youssef",
  email: "omaryoussef@example.com",
  phone: "+20 102 764 3232",
  address: "6 October",
  bio: "Environmental enthusiast passionate about sustainable living and zero waste practices. I believe small changes can make a big difference!",
  avatar: "https://source.unsplash.com/300x300/?portrait,woman",
  joinDate: "January 2023",
  recyclingPoints: 1250,
  itemsRecycled: 48,
  itemsListed: 12,
  itemsSold: 8,
  favoriteItems: 15,
}

// Mock activity data
const recentActivity = [
  {
    id: 1,
    type: "recycling",
    title: "Recycled 5 plastic bottles",
    date: "2 days ago",
    points: 25,
    icon: RecyclingIcon,
  },
  {
    id: 2,
    type: "marketplace",
    title: "Listed Vintage Leather Jacket",
    date: "1 week ago",
    points: 0,
    icon: ShoppingBagIcon,
  },
  {
    id: 3,
    type: "recycling",
    title: "Recycled old electronics",
    date: "2 weeks ago",
    points: 150,
    icon: RecyclingIcon,
  },
  {
    id: 4,
    type: "marketplace",
    title: "Purchased Eco-friendly Water Bottle",
    date: "3 weeks ago",
    points: 0,
    icon: ShoppingBagIcon,
  },
]

// Mock listed items
const listedItems = [
  {
    id: 1,
    name: "Vintage Leather Jacket",
    price: 120,
    status: "active",
    image: "https://source.unsplash.com/100x100/?jacket",
    views: 45,
  },
  {
    id: 2,
    name: "Handmade Wooden Table",
    price: 300,
    status: "sold",
    image: "https://source.unsplash.com/100x100/?table",
    views: 78,
  },
  {
    id: 3,
    name: "Eco-friendly Water Bottle",
    price: 25,
    status: "active",
    image: "https://source.unsplash.com/100x100/?bottle",
    views: 32,
  },
]

// Mock purchase history
const purchaseHistory = [
  {
    id: 1,
    name: "Eco-friendly Water Bottle",
    price: 25,
    date: "May 15, 2023",
    status: "Delivered",
    image: "https://source.unsplash.com/100x100/?bottle",
    seller: "GreenGoods",
  },
  {
    id: 2,
    name: "Bamboo Cutlery Set",
    price: 18,
    date: "April 3, 2023",
    status: "Delivered",
    image: "https://source.unsplash.com/100x100/?bamboo",
    seller: "EcoEssentials",
  },
  {
    id: 3,
    name: "Reusable Produce Bags",
    price: 12,
    date: "March 22, 2023",
    status: "Delivered",
    image: "https://source.unsplash.com/100x100/?bag",
    seller: "ZeroWasteShop",
  },
]

const ProfilePage = () => {
  const [tabValue, setTabValue] = useState(0)
  const [editMode, setEditMode] = useState(false)
  const [userForm, setUserForm] = useState({ ...userData })
  const [successMessage, setSuccessMessage] = useState("")

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const handleEditToggle = () => {
    if (editMode) {
      // If canceling edit, reset form
      setUserForm({ ...userData })
    }
    setEditMode(!editMode)
  }

  const handleSaveProfile = () => {
    // In a real app, you would save the data to your backend
    console.log("Saving profile data:", userForm)
    // For demo, we'll just update our local userData
    // userData = { ...userForm }
    setEditMode(false)
    setSuccessMessage("Profile updated successfully!")

    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("")
    }, 3000)
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setUserForm({
      ...userForm,
      [name]: value,
    })
  }

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Left Column - User Profile */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2, mb: 3 }}>
              {successMessage && (
                <Box sx={{ mb: 3 }}>
                  <Alert severity="success" onClose={() => setSuccessMessage("")}>
                    {successMessage}
                  </Alert>
                </Box>
              )}
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  badgeContent={
                    editMode ? (
                      <IconButton
                        size="small"
                        sx={{ bgcolor: "primary.main", color: "white", "&:hover": { bgcolor: "primary.dark" } }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    ) : null
                  }
                >
                  <Avatar
                    src={userData.avatar}
                    alt={userData.name}
                    sx={{ width: 120, height: 120, mb: 2, border: "4px solid", borderColor: "primary.light" }}
                  />
                </Badge>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  {userData.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Member since {userData.joinDate}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  <Chip
                    icon={<RecyclingIcon />}
                    label={`${userData.recyclingPoints} Points`}
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    icon={<VerifiedUserIcon />}
                    label="Verified"
                    color="success"
                    size="small"
                    sx={{ bgcolor: "success.light", color: "success.dark" }}
                  />
                </Box>
              </Box>

              {!editMode ? (
                <Box>
                  <Typography variant="body1" paragraph>
                    {userData.bio}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography variant="body2">{userData.email}</Typography>
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Phone
                    </Typography>
                    <Typography variant="body2">{userData.phone}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Address
                    </Typography>
                    <Typography variant="body2">{userData.address}</Typography>
                  </Box>
                </Box>
              ) : (
                <Box component="form">
                  <TextField
                    fullWidth
                    label="Bio"
                    name="bio"
                    value={userForm.bio}
                    onChange={handleFormChange}
                    multiline
                    rows={3}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={userForm.email}
                    onChange={handleFormChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={userForm.phone}
                    onChange={handleFormChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={userForm.address}
                    onChange={handleFormChange}
                    margin="normal"
                  />
                </Box>
              )}

              <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
                {editMode ? (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<SaveIcon />}
                      onClick={handleSaveProfile}
                      sx={{ mr: 1 }}
                    >
                      Save
                    </Button>
                    <Button variant="outlined" color="error" startIcon={<CancelIcon />} onClick={handleEditToggle}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button variant="outlined" color="primary" startIcon={<EditIcon />} onClick={handleEditToggle}>
                    Edit Profile
                  </Button>
                )}
              </Box>
            </Paper>

            <Paper sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Statistics
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: "center", p: 1 }}>
                    <Typography variant="h4" color="primary.main" sx={{ fontWeight: 700 }}>
                      {userData.itemsRecycled}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Items Recycled
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: "center", p: 1 }}>
                    <Typography variant="h4" color="primary.main" sx={{ fontWeight: 700 }}>
                      {userData.itemsListed}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Items Listed
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: "center", p: 1 }}>
                    <Typography variant="h4" color="primary.main" sx={{ fontWeight: 700 }}>
                      {userData.itemsSold}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Items Sold
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: "center", p: 1 }}>
                    <Typography variant="h4" color="primary.main" sx={{ fontWeight: 700 }}>
                      {userData.favoriteItems}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Favorites
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>

            <Paper sx={{ p: 3, borderRadius: 2, mb: 3,mt:3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Recycling Points
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <RecyclingIcon sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
                <Typography variant="h3" color="primary.main" sx={{ fontWeight: 700 }}>
                  {userData.recyclingPoints}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
                You can redeem these points for discounts and eco-friendly products!
              </Typography>
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <Button variant="contained" color="primary">
                  Redeem Points
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Right Column - Tabs and Content */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ borderRadius: 2 }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  px: 2,
                  pt: 2,
                  borderBottom: 1,
                  borderColor: "divider",
                  "& .MuiTab-root": {
                    minWidth: 120,
                    fontWeight: 600,
                  },
                }}
              >
                <Tab icon={<RecyclingIcon />} label="Activity" iconPosition="start" />
                <Tab icon={<ShoppingBagIcon />} label="Listings" iconPosition="start" />
                <Tab icon={<LocalShippingIcon />} label="Purchases" iconPosition="start" />
                <Tab icon={<FavoriteIcon />} label="Favorites" iconPosition="start" />
                <Tab icon={<SettingsIcon />} label="Settings" iconPosition="start" />
              </Tabs>

              <Box sx={{ p: 3 }}>
                {/* Activity Tab */}
                {tabValue === 0 && (
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Recent Activity
                    </Typography>
                    <List>
                      {recentActivity.map((activity) => (
                        <ListItem
                          key={activity.id}
                          sx={{
                            mb: 2,
                            bgcolor: "background.paper",
                            borderRadius: 1,
                            boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
                          }}
                        >
                          <ListItemAvatar>
                            <Avatar
                              sx={{
                                bgcolor: activity.type === "recycling" ? "success.light" : "primary.light",
                              }}
                            >
                              <activity.icon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={activity.title}
                            secondary={activity.date}
                            primaryTypographyProps={{ fontWeight: 600 }}
                          />
                          {activity.points > 0 && (
                            <Chip
                              label={`+${activity.points} pts`}
                              color="success"
                              size="small"
                              sx={{ fontWeight: 600 }}
                            />
                          )}
                        </ListItem>
                      ))}
                    </List>

                    <Box sx={{ mt: 4 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        Recycling Impact
                      </Typography>
                      <Card sx={{ bgcolor: "success.light", color: "success.dark", mb: 2 }}>
                        <CardContent>
                          <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                            You've saved the equivalent of:
                          </Typography>
                          <Grid container spacing={2} sx={{ mt: 1 }}>
                            <Grid item xs={6} sm={3}>
                              <Box sx={{ textAlign: "center" }}>
                                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                  12
                                </Typography>
                                <Typography variant="body2">Trees</Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                              <Box sx={{ textAlign: "center" }}>
                                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                  48
                                </Typography>
                                <Typography variant="body2">kg CO₂</Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                              <Box sx={{ textAlign: "center" }}>
                                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                  320
                                </Typography>
                                <Typography variant="body2">Liters Water</Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                              <Box sx={{ textAlign: "center" }}>
                                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                  85
                                </Typography>
                                <Typography variant="body2">kWh Energy</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Box>
                  </Box>
                )}

                {/* Listings Tab */}
                {tabValue === 1 && (
                  <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Your Listings
                      </Typography>
                      <Button variant="contained" color="primary" size="small">
                        + New Listing
                      </Button>
                    </Box>

                    <List>
                      {listedItems.map((item) => (
                        <ListItem
                          key={item.id}
                          sx={{
                            mb: 2,
                            bgcolor: "background.paper",
                            borderRadius: 1,
                            boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
                          }}
                        >
                          <ListItemAvatar>
                            <Avatar
                              variant="rounded"
                              src={item.image}
                              alt={item.name}
                              sx={{ width: 60, height: 60, mr: 1 }}
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                  {item.name}
                                </Typography>
                                <Chip
                                  label={item.status === "active" ? "Active" : "Sold"}
                                  color={item.status === "active" ? "success" : "default"}
                                  size="small"
                                  sx={{ ml: 1 }}
                                />
                              </Box>
                            }
                            secondary={
                              <Box>
                                <Typography variant="body2" color="primary.main" sx={{ fontWeight: 600 }}>
                                  ${item.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {item.views} views
                                </Typography>
                              </Box>
                            }
                          />
                          <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="edit">
                              <EditIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" sx={{ ml: 1 }}>
                              <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}

                {/* Purchases Tab */}
                {tabValue === 2 && (
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Your Purchase History
                    </Typography>
                    <List>
                      {purchaseHistory.map((item) => (
                        <ListItem
                          key={item.id}
                          sx={{
                            mb: 2,
                            bgcolor: "background.paper",
                            borderRadius: 1,
                            boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
                          }}
                        >
                          <ListItemAvatar>
                            <Avatar
                              variant="rounded"
                              src={item.image}
                              alt={item.name}
                              sx={{ width: 60, height: 60, mr: 1 }}
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                  {item.name}
                                </Typography>
                                <Chip label={item.status} color="success" size="small" sx={{ ml: 1 }} />
                              </Box>
                            }
                            secondary={
                              <Box>
                                <Typography variant="body2" color="primary.main" sx={{ fontWeight: 600 }}>
                                  ${item.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  Purchased on {item.date} from {item.seller}
                                </Typography>
                              </Box>
                            }
                          />
                          <ListItemSecondaryAction>
                            <Button size="small" variant="outlined" color="primary">
                              Buy Again
                            </Button>
                          </ListItemSecondaryAction>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}

                {/* Favorites Tab */}
                {tabValue === 3 && (
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Your Favorite Items
                    </Typography>
                    <Grid container spacing={2}>
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <Grid item xs={12} sm={6} key={item}>
                          <Card sx={{ display: "flex", height: "100%" }}>
                            <Box
                              sx={{
                                width: 100,
                                height: 100,
                                backgroundImage: `url(https://source.unsplash.com/100x100/?product,${item})`,
                                backgroundSize: "cover",
                              }}
                            />
                            <CardContent sx={{ flex: 1 }}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                Favorite Item {item}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Short description of the item
                              </Typography>
                              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                                <Typography variant="body1" color="primary.main" sx={{ fontWeight: 600, mr: 1 }}>
                                  $99
                                </Typography>
                                <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
                                  <StarIcon sx={{ fontSize: 16, color: "warning.main" }} />
                                  <Typography variant="body2" sx={{ ml: 0.5 }}>
                                    4.5
                                  </Typography>
                                </Box>
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}

                {/* Settings Tab */}
                {tabValue === 4 && (
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Account Settings
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField fullWidth label="Change Password" type="password" placeholder="Enter new password" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Confirm Password"
                          type="password"
                          placeholder="Confirm new password"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button variant="contained" color="primary">
                          Update Password
                        </Button>
                      </Grid>
                    </Grid>

                    <Divider sx={{ my: 4 }} />

                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Notification Preferences
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="Email notifications for new messages"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="Email notifications for marketplace activity"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="Email notifications for recycling reminders"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox />} label="SMS notifications for important updates" />
                      </Grid>
                    </Grid>

                    <Box sx={{ mt: 3 }}>
                      <Button variant="contained" color="primary">
                        Save Preferences
                      </Button>
                    </Box>
                  </Box>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ProfilePage

