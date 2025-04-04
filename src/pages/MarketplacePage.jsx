"use client";

import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Rating,
  Tabs,
  Tab,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const items = [
  {
    id: 1,
    name: "Vintage Leather Jacket",
    description: "A classic leather jacket from the 1980s.",
    price: 120,
    imageUrl: "/images/jackets.jpg",
    rating: 4.5,
    category: "clothing",
  },
  {
    id: 2,
    name: "Mid-Century Modern Chair",
    description: "A stylish chair perfect for any living room.",
    price: 250,
    imageUrl: "/images/chair.jpg",
    rating: 4.8,
    category: "furniture",
  },
  {
    id: 3,
    name: "Retro Gaming Console",
    description: "Play all your favorite classic games.",
    price: 80,
    imageUrl: "/images/console.jpg",
    rating: 4.2,
    category: "electronics",
  },
  {
    id: 4,
    name: "Abstract Art Painting",
    description: "A unique piece of art to brighten up your home.",
    price: 180,
    imageUrl: "/images/art.jpg",
    rating: 4.6,
    category: "art",
  },
  {
    id: 5,
    name: "Modern Smartwatch",
    description: "Stay connected with this feature-rich smartwatch.",
    price: 150,
    imageUrl: "/images/watch.jpg",
    rating: 4.7,
    category: "electronics",
  },
  {
    id: 6,
    name: "Handmade Wooden Table",
    description: "A beautiful and durable table for your dining room.",
    price: 300,
    imageUrl: "/images/table.jpg",
    rating: 4.9,
    category: "furniture",
  },
  {
    id: 7,
    name: "Designer Dress",
    description: "An elegant dress for special occasions.",
    price: 200,
    imageUrl: "/images/dress.jpg",
    rating: 4.4,
    category: "clothing",
  },
  {
    id: 8,
    name: "High-End Headphones",
    description: "Experience music like never before with these headphones.",
    price: 220,
    imageUrl: "/images/headphone.jpg",
    rating: 4.8,
    category: "electronics",
  },
];

const MarketplacePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tabValue, setTabValue] = useState("all");
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const filteredItems = items.filter((item) => {
    const searchMatch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const categoryMatch = tabValue === "all" || item.category === tabValue;
    return searchMatch && categoryMatch;
  });

  const handleItemClick = (itemId) => {
    navigate(`/item/${itemId}`);
  };

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 8 }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "stretch", md: "center" },
            mb: 4,
            gap: 2,
          }}
        >
          <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
            Marketplace
          </Typography>

          <Box
            sx={{ display: "flex", gap: 2, width: { xs: "100%", md: "auto" } }}
          >
            <Box sx={{ position: "relative", flexGrow: 1 }}>
              <TextField
                placeholder="Search items..."
                variant="outlined"
                size="small"
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Button
              component={RouterLink}
              to="/list-item"
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              sx={{ whiteSpace: "nowrap", fontWeight: 600 }}
            >
              List Your Item
            </Button>
          </Box>
        </Box>

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
          <Tab label="All Items" value="all" />
          <Tab label="Electronics" value="electronics" />
          <Tab label="Furniture" value="furniture" />
          <Tab label="Clothing" value="clothing" />
        </Tabs>

        <Grid container spacing={3}>
          {filteredItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardActionArea onClick={() => handleItemClick(item.id)}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.imageUrl}
                    alt={item.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {item.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: "primary.main" }}
                    >
                      ${item.price}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                      <Rating
                        name="read-only"
                        value={item.rating}
                        precision={0.1}
                        readOnly
                        size="small"
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ ml: 1 }}
                      >
                        ({item.rating})
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MarketplacePage;
