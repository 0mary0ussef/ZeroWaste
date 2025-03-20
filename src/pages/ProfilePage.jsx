import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Button,
  TextField,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Rating,
  Chip,
  LinearProgress,
} from '@mui/material';
import {
  Person as PersonIcon,
  ShoppingBag as ShoppingBagIcon,
  Settings as SettingsIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

// TabPanel component for tab content
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const ProfilePage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    location: 'San Francisco, CA',
    bio: 'Passionate about sustainability and reducing waste.',
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    // In a real app, you would send this data to your backend
    console.log('Profile data saved:', profileData);
    alert('Profile updated successfully!');
  };

  // Sample user items
  const userItems = [
    {
      id: 1,
      name: 'Wooden Table',
      price: 75,
      image: '/images/table.jpg',
      status: 'Active',
      listedDate: '2 days ago',
    },
    {
      id: 2,
      name: 'Desk Lamp',
      price: 25,
      image: '/images/lamp.jpg',
      status: 'Active',
      listedDate: '1 week ago',
    },
    {
      id: 3,
      name: 'Recycled Glass Vase',
      price: 15,
      image: '/images/vase.jpg',
      status: 'Pending',
      listedDate: '3 days ago',
    },
  ];

  // Sample recycling stats
  const recyclingStats = {
    totalItems: 42,
    pointsEarned: 2540,
    co2Saved: 156,
    breakdown: [
      { category: 'Plastics', percentage: 40 },
      { category: 'Paper', percentage: 30 },
      { category: 'Electronics', percentage: 20 },
      { category: 'Glass', percentage: 10 },
    ],
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent sx={{ textAlign: 'center', py: 3 }}>
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    mx: 'auto',
                    mb: 2,
                    border: '4px solid',
                    borderColor: 'background.paper',
                  }}
                >
                  JD
                </Avatar>
                <Typography variant="h5" gutterBottom>
                  John Doe
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  San Francisco, CA
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Rating value={4} readOnly />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    (4.2)
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<EditIcon />}
                  fullWidth
                  sx={{ mb: 3 }}
                >
                  Edit Profile
                </Button>

                <List component="nav" sx={{ width: '100%' }}>
                  <ListItem button selected={tabValue === 0} onClick={() => setTabValue(0)}>
                    <PersonIcon sx={{ mr: 2 }} />
                    <ListItemText primary="Profile" />
                  </ListItem>
                  <ListItem button selected={tabValue === 1} onClick={() => setTabValue(1)}>
                    <ShoppingBagIcon sx={{ mr: 2 }} />
                    <ListItemText primary="My Items" />
                  </ListItem>
                  <ListItem button selected={tabValue === 2} onClick={() => setTabValue(2)}>
                    <SettingsIcon sx={{ mr: 2 }} />
                    <ListItemText primary="Recycling Stats" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={9}>
            <Card>
              <CardHeader
                title={
                  tabValue === 0
                    ? 'Profile Information'
                    : tabValue === 1
                    ? 'My Items'
                    : 'Recycling Statistics'
                }
              />
              <CardContent>
                <Tabs value={tabValue} onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tab label="Profile Info" />
                  <Tab label="My Items" />
                  <Tab label="Recycling Stats" />
                </Tabs>

                {/* Profile Info Tab */}
                <TabPanel value={tabValue} index={0}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={profileData.firstName}
                        onChange={handleProfileChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={profileData.lastName}
                        onChange={handleProfileChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleProfileChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleProfileChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Location"
                        name="location"
                        value={profileData.location}
                        onChange={handleProfileChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Bio"
                        name="bio"
                        multiline
                        rows={3}
                        value={profileData.bio}
                        onChange={handleProfileChange}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button variant="contained" color="primary" onClick={handleSaveChanges}>
                        Save Changes
                      </Button>
                    </Grid>
                  </Grid>
                </TabPanel>

                {/* My Items Tab */}
                <TabPanel value={tabValue} index={1}>
                  <Grid container spacing={3}>
                    {userItems.map((item) => (
                      <Grid item key={item.id} xs={12} sm={6} md={4}>
                        <Card variant="outlined">
                          <Box sx={{ position: 'relative' }}>
                            <Box
                              component="img"
                              src={item.image}
                              alt={item.name}
                              sx={{
                                width: '100%',
                                height: 200,
                                objectFit: 'cover',
                              }}
                            />
                            <Chip
                              label={item.status}
                              color={item.status === 'Active' ? 'primary' : 'warning'}
                              sx={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                              }}
                            />
                          </Box>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              {item.name}
                            </Typography>
                            <Typography variant="h6" color="primary" gutterBottom>
                              ${item.price}
                            </Typography>
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mt: 1,
                              }}
                            >
                              <Typography variant="body2" color="text.secondary">
                                Listed {item.listedDate}
                              </Typography>
                              <Button variant="outlined" size="small">
                                Edit
                              </Button>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>

                {/* Recycling Stats Tab */}
                <TabPanel value={tabValue} index={2}>
                  <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid item xs={12} sm={4}>
                      <Card variant="outlined" sx={{ p: 2 }}>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Total Items Recycled
                        </Typography>
                        <Typography variant="h3" color="primary">
                          {recyclingStats.totalItems}
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Card variant="outlined" sx={{ p: 2 }}>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Points Earned
                        </Typography>
                        <Typography variant="h3" color="primary">
                          {recyclingStats.pointsEarned}
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Card variant="outlined" sx={{ p: 2 }}>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          CO2 Saved (kg)
                        </Typography>
                        <Typography variant="h3" color="primary">
                          {recyclingStats.co2Saved}
                        </Typography>
                      </Card>
                    </Grid>
                  </Grid>

                  <Typography variant="h6" gutterBottom>
                    Recycling Breakdown
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {recyclingStats.breakdown.map((item) => (
                      <Box key={item.category} sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2">{item.category}</Typography>
                          <Typography variant="body2">{item.percentage}%</Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={item.percentage}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            bgcolor: 'background.paper',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 4,
                              bgcolor: 'primary.main',
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </TabPanel>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfilePage;