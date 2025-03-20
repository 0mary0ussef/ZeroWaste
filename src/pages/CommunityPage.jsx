"use client"

import { useState } from "react"
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Button,
  Avatar,
  Divider,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import CommentIcon from "@mui/icons-material/Comment"
import ShareIcon from "@mui/icons-material/Share"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import SendIcon from "@mui/icons-material/Send"

// Mock data
const posts = [
  {
    id: 1,
    author: {
      name: "Emma Johnson",
      avatar: "https://source.unsplash.com/100x100/?portrait,woman",
      role: "Community Leader",
    },
    date: "2 hours ago",
    content:
      "Just finished organizing our neighborhood cleanup event! We collected over 50 bags of trash and recyclables. So proud of our community for coming together for this cause. #ZeroWaste #CommunityCleanup",
    image: "https://source.unsplash.com/800x400/?cleanup,community",
    likes: 42,
    comments: 8,
    shares: 12,
    tags: ["Community Cleanup", "Zero Waste"],
  },
  {
    id: 2,
    author: {
      name: "David Chen",
      avatar: "https://source.unsplash.com/100x100/?portrait,man",
      role: "Recycling Expert",
    },
    date: "Yesterday",
    content:
      "Here's a quick tip for reducing plastic waste: bring your own reusable containers when shopping at bulk stores or delis. Most places are happy to accommodate, and you'll save so much unnecessary packaging!",
    likes: 28,
    comments: 5,
    shares: 7,
    tags: ["Plastic Free", "Recycling Tips"],
  },
  {
    id: 3,
    author: {
      name: "Sarah Williams",
      avatar: "https://source.unsplash.com/100x100/?portrait,girl",
      role: "Sustainability Advocate",
    },
    date: "3 days ago",
    content:
      "I just completed my first month of composting and I'm amazed at how much it has reduced my household waste! If anyone needs tips on getting started with composting in small spaces, feel free to ask!",
    image: "https://source.unsplash.com/800x400/?compost,garden",
    likes: 35,
    comments: 14,
    shares: 5,
    tags: ["Composting", "Reduce Waste"],
  },
]

const trendingTopics = [
  { name: "Community Cleanup", posts: 42 },
  { name: "Plastic Free July", posts: 38 },
  { name: "Composting Tips", posts: 27 },
  { name: "Upcycling Projects", posts: 24 },
  { name: "Zero Waste Kitchen", posts: 19 },
]

const activeUsers = [
  {
    name: "Emma Johnson",
    avatar: "https://source.unsplash.com/100x100/?portrait,woman",
    status: "Online",
  },
  {
    name: "David Chen",
    avatar: "https://source.unsplash.com/100x100/?portrait,man",
    status: "Online",
  },
  {
    name: "Sarah Williams",
    avatar: "https://source.unsplash.com/100x100/?portrait,girl",
    status: "Away",
  },
  {
    name: "Michael Rodriguez",
    avatar: "https://source.unsplash.com/100x100/?portrait,boy",
    status: "Online",
  },
  {
    name: "Olivia Thompson",
    avatar: "https://source.unsplash.com/100x100/?portrait,woman2",
    status: "Offline",
  },
]

const CommunityPage = () => {
  const [postContent, setPostContent] = useState("")
  const [likedPosts, setLikedPosts] = useState({})
  const [searchQuery, setSearchQuery] = useState("")

  const handlePostSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would submit the post to your backend
    console.log("New post:", postContent)
    setPostContent("")
  }

  const handleLikeToggle = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }))
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Left Sidebar */}
          <Grid item xs={12} md={3}>
            <Card sx={{ mb: 3, borderRadius: 2 }}>
              <CardHeader title="About Community" />
              <CardContent>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Welcome to the Zero Waste community! Share your sustainable living tips, recycling ideas, and connect
                  with like-minded individuals committed to reducing waste.
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <Avatar sx={{ bgcolor: "primary.main", mr: 1 }}>
                    <CommentIcon />
                  </Avatar>
                  <Typography variant="body2">
                    <strong>1,245</strong> members
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 2 }}>
              <CardHeader title="Active Members" />
              <CardContent sx={{ pt: 0 }}>
                <List disablePadding>
                  {activeUsers.map((user, index) => (
                    <ListItem key={index} disablePadding sx={{ pb: 1 }}>
                      <ListItemAvatar>
                        <Avatar src={user.avatar} alt={user.name} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={user.name}
                        secondary={
                          <Box
                            component="span"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                bgcolor:
                                  user.status === "Online"
                                    ? "success.main"
                                    : user.status === "Away"
                                      ? "warning.main"
                                      : "grey.400",
                                mr: 0.5,
                              }}
                            />
                            {user.status}
                          </Box>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={6}>
            {/* Search Bar */}
            <Paper
              sx={{
                p: 2,
                mb: 3,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
              <TextField
                fullWidth
                placeholder="Search posts..."
                variant="standard"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Paper>

            {/* Create Post */}
            <Card sx={{ mb: 3, borderRadius: 2 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <Avatar sx={{ mr: 2 }} src="https://source.unsplash.com/100x100/?portrait,user" />
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    placeholder="Share your thoughts with the community..."
                    variant="outlined"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box>
                    <Button size="small" startIcon={<SearchIcon />}>
                      Photo
                    </Button>
                    <Button size="small" startIcon={<SearchIcon />}>
                      Tag
                    </Button>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon />}
                    disabled={!postContent.trim()}
                    onClick={handlePostSubmit}
                  >
                    Post
                  </Button>
                </Box>
              </CardContent>
            </Card>

            {/* Posts Feed */}
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Card key={post.id} sx={{ mb: 3, borderRadius: 2 }}>
                  <CardHeader
                    avatar={<Avatar src={post.author.avatar} alt={post.author.name} />}
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {post.author.name}
                        </Typography>
                        {post.author.role && (
                          <Chip
                            label={post.author.role}
                            size="small"
                            color="primary"
                            variant="outlined"
                            sx={{ ml: 1, height: 20, fontSize: "0.7rem" }}
                          />
                        )}
                      </Box>
                    }
                    subheader={post.date}
                  />
                  <CardContent sx={{ pt: 0 }}>
                    <Typography variant="body1" paragraph>
                      {post.content}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                      {post.tags &&
                        post.tags.map((tag, index) => (
                          <Chip key={index} label={tag} size="small" color="primary" variant="outlined" clickable />
                        ))}
                    </Box>
                    {post.image && (
                      <Box
                        component="img"
                        src={post.image}
                        alt="Post image"
                        sx={{
                          width: "100%",
                          borderRadius: 1,
                          mb: 2,
                        }}
                      />
                    )}
                    <Divider sx={{ my: 1 }} />
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Box>
                        <IconButton
                          color={likedPosts[post.id] ? "primary" : "default"}
                          onClick={() => handleLikeToggle(post.id)}
                        >
                          {likedPosts[post.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                        <Typography variant="body2" component="span" color="text.secondary">
                          {post.likes + (likedPosts[post.id] ? 1 : 0)}
                        </Typography>
                      </Box>
                      <Box>
                        <IconButton>
                          <CommentIcon />
                        </IconButton>
                        <Typography variant="body2" component="span" color="text.secondary">
                          {post.comments}
                        </Typography>
                      </Box>
                      <Box>
                        <IconButton>
                          <ShareIcon />
                        </IconButton>
                        <Typography variant="body2" component="span" color="text.secondary">
                          {post.shares}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Paper sx={{ p: 3, textAlign: "center", borderRadius: 2 }}>
                <Typography variant="h6">No posts found</Typography>
                <Typography variant="body2" color="text.secondary">
                  Try adjusting your search or be the first to post about this topic!
                </Typography>
              </Paper>
            )}
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} md={3}>
            <Card sx={{ mb: 3, borderRadius: 2 }}>
              <CardHeader title="Trending Topics" />
              <CardContent sx={{ pt: 0 }}>
                <List disablePadding>
                  {trendingTopics.map((topic, index) => (
                    <ListItem key={index} disablePadding sx={{ pb: 1 }}>
                      <ListItemText
                        primary={
                          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              #{topic.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {topic.posts} posts
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 2 }}>
              <CardHeader title="Community Guidelines" />
              <CardContent>
                <Typography variant="body2" paragraph>
                  • Be respectful and kind to other members
                </Typography>
                <Typography variant="body2" paragraph>
                  • Share accurate information about recycling and sustainability
                </Typography>
                <Typography variant="body2" paragraph>
                  • Keep discussions on-topic and constructive
                </Typography>
                <Typography variant="body2" paragraph>
                  • No spam or promotional content without approval
                </Typography>
                <Button variant="outlined" color="primary" fullWidth sx={{ mt: 1 }}>
                  Read Full Guidelines
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default CommunityPage

