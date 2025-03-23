"use client"

import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Chip,
  Divider,
  Button,
  Avatar,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import ArticleIcon from "@mui/icons-material/Article"
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary"
import NatureIcon from "@mui/icons-material/Nature"
import RecyclingIcon from "@mui/icons-material/Recycling"
import WaterDropIcon from "@mui/icons-material/WaterDrop"
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull"
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash"

// Mock data for recycling tips
const tips = [
  {
    id: 1,
    title: "How to Recycle Plastic Bottles",
    description:
      "Learn the proper way to prepare plastic bottles for recycling. Remove caps, rinse, and crush to save space!",
    image: "/images/bottle.jpg",
    category: "plastic",
    type: "video",
    duration: "4:30",
    author: {
      name: "Green Thumb",
      avatar: "https://source.unsplash.com/100x100/?portrait",
      role: "Admin",
    },
    views: 1245,
    likes: 189,
    comments: 24,
  },
  {
    id: 2,
    title: "Composting 101",
    description: "Start your composting journey with these simple tips. Turn kitchen waste into garden gold!",
    image: "/images/compost.jpg",
    category: "organic",
    type: "video",
    duration: "6:15",
    author: {
      name: "Eco Warrior",
      avatar: "https://source.unsplash.com/100x100/?woman",
      role: "Contributor",
    },
    views: 982,
    likes: 145,
    comments: 32,
  },
  {
    id: 3,
    title: "Paper Recycling Guide",
    description: "Everything you need to know about recycling paper products. What can and cannot be recycled?",
    image: "/images/paper.jpg",
    category: "paper",
    type: "article",
    readTime: "5 min read",
    author: {
      name: "Recycling Pro",
      avatar: "https://source.unsplash.com/100x100/?man",
      role: "Expert",
    },
    views: 756,
    likes: 98,
    comments: 15,
  },
  {
    id: 4,
    title: "Electronic Waste Disposal",
    description: "Proper methods for disposing of electronic waste. Keep harmful materials out of landfills!",
    image: "/images/phone.jpg",
    category: "electronics",
    type: "article",
    readTime: "7 min read",
    author: {
      name: "Tech Recycler",
      avatar: "https://source.unsplash.com/100x100/?technician",
      role: "Specialist",
    },
    views: 632,
    likes: 87,
    comments: 19,
  },
  {
    id: 5,
    title: "Glass Recycling Tips",
    description: "How to properly recycle glass containers and bottles. Colors, labels, and preparation explained.",
    image: "/images/glass.jpg",
    category: "glass",
    type: "article",
    readTime: "4 min read",
    author: {
      name: "Sustainability Guide",
      avatar: "https://source.unsplash.com/100x100/?person",
      role: "Contributor",
    },
    views: 543,
    likes: 76,
    comments: 11,
  },
  {
    id: 6,
    title: "Water Conservation at Home",
    description:
      "Simple ways to reduce water usage in your daily life. Save water and money with these practical tips.",
    image: "/images/water.jpg",
    category: "water",
    type: "video",
    duration: "5:45",
    author: {
      name: "Water Saver",
      avatar: "https://source.unsplash.com/100x100/?woman-portrait",
      role: "Expert",
    },
    views: 876,
    likes: 132,
    comments: 28,
  },
]

const RecyclingTipsPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [tabValue, setTabValue] = useState("all")

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const filteredTips = tips.filter((tip) => {
    const searchMatch =
      tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.description.toLowerCase().includes(searchQuery.toLowerCase())
    const categoryMatch = tabValue === "all" || tip.category === tabValue
    return searchMatch && categoryMatch
  })

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Recycling Tips & Guides
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: "auto", mb: 4 }}>
            Discover practical ways to reduce waste, recycle effectively, and live more sustainably with our expert
            guides.
          </Typography>

          {/* Search Bar */}
          <Box sx={{ maxWidth: 600, mx: "auto" }}>
            <TextField
              fullWidth
              placeholder="Search for recycling tips..."
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />
          </Box>
        </Box>

        {/* Category Tabs */}
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 4,
            "& .MuiTabs-indicator": {
              backgroundColor: "primary.main",
              height: 3,
            },
            "& .MuiTab-root": {
              fontWeight: 600,
              fontSize: "1rem",
              textTransform: "none",
              minWidth: 100,
              "&.Mui-selected": {
                color: "primary.main",
              },
            },
          }}
        >
          <Tab label="All Tips" value="all" icon={<NatureIcon />} iconPosition="start" />
          <Tab label="Plastic" value="plastic" icon={<RestoreFromTrashIcon />} iconPosition="start" />
          <Tab label="Paper" value="paper" icon={<ArticleIcon />} iconPosition="start" />
          <Tab label="Glass" value="glass" icon={<RecyclingIcon />} iconPosition="start" />
          <Tab label="Electronics" value="electronics" icon={<BatteryChargingFullIcon />} iconPosition="start" />
          <Tab label="Organic" value="organic" icon={<NatureIcon />} iconPosition="start" />
          <Tab label="Water" value="water" icon={<WaterDropIcon />} iconPosition="start" />
        </Tabs>

        {/* Tips Grid */}
        <Grid container spacing={3}>
          {filteredTips.length > 0 ? (
            filteredTips.map((tip) => (
              <Grid item key={tip.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <CardActionArea>
                    <Box sx={{ position: "relative" }}>
                      <CardMedia component="img" height="200" image={tip.image} alt={tip.title} />
                      {tip.type === "video" && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            bgcolor: "rgba(0, 0, 0, 0.6)",
                            borderRadius: "50%",
                            width: 60,
                            height: 60,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <PlayArrowIcon sx={{ color: "white", fontSize: 40 }} />
                        </Box>
                      )}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          bgcolor: "primary.main",
                          color: "white",
                          borderRadius: 1,
                          px: 1,
                          py: 0.5,
                          fontSize: "0.75rem",
                          fontWeight: 600,
                        }}
                      >
                        {tip.type === "video" ? tip.duration : tip.readTime}
                      </Box>
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <Chip
                          label={tip.category.charAt(0).toUpperCase() + tip.category.slice(1)}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                        <Chip
                          label={tip.type === "video" ? "Video" : "Article"}
                          size="small"
                          color={tip.type === "video" ? "error" : "info"}
                          variant="outlined"
                          sx={{ ml: 1 }}
                          icon={tip.type === "video" ? <VideoLibraryIcon /> : <ArticleIcon />}
                        />
                      </Box>
                      <Typography variant="h6" component="h2" gutterBottom>
                        {tip.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {tip.description}
                      </Typography>
                      <Divider sx={{ my: 1 }} />
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Avatar src={tip.author.avatar} sx={{ width: 30, height: 30, mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            {tip.author.name}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {tip.views} views
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Box sx={{ textAlign: "center", py: 4 }}>
                <Typography variant="h6" gutterBottom>
                  No tips found
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Try adjusting your search or category filter
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>

        {/* Call to Action */}
        <Box
          sx={{
            mt: 6,
            p: 4,
            bgcolor: "primary.light",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            Want to contribute your own recycling tips?
          </Typography>
          <Typography variant="body1" paragraph sx={{ maxWidth: 800, mx: "auto", mb: 3 }}>
            Share your knowledge and help others on their sustainability journey. Submit your own recycling tips,
            guides, or videos to our community.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 4, py: 1.5, bgcolor: "white", color: "primary.main", "&:hover": { bgcolor: "grey.100" } }}
          >
            Submit Your Tip
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default RecyclingTipsPage

