"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  Paper,
  Rating,
  Breadcrumbs,
  Link,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Avatar,
  IconButton,
} from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import RecyclingIcon from "@mui/icons-material/Recycling"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import WhatsAppIcon from "@mui/icons-material/WhatsApp" // Import WhatsApp icon

// Mock data - in a real app, you would fetch this from an API
const items = [
  {
    id: 1,
    name: "Vintage Leather Jacket",
    description: "A classic leather jacket from the 1980s.",
    longDescription:
      "This authentic vintage leather jacket from the 1980s features a timeless design that never goes out of style. Made from genuine leather, it has been well-maintained and shows minimal signs of wear. The jacket includes a full-length zipper, two side pockets, and an interior pocket. Perfect for adding a retro touch to your wardrobe while reducing fashion waste.",
    price: 850,
    imageUrl: "/images/Jacket.jpg",
    additionalImages: ["/images/Jacket.jpg", "/images/Jacket.jpg", "/images/Jacket.jpg"],
    rating: 4.5,
    reviews: 24,
    category: "clothing",
    condition: "Good",
    seller: {
      name: "EcoFashion",
      rating: 4.8,
      sales: 156,
      avatar: "/images/Omar.jpg",
    },
    features: [
      "Genuine leather material",
      "Classic 80s design",
      "Multiple pockets",
      "Excellent condition",
      "Unisex style",
    ],
    sustainabilityImpact:
      "By purchasing this pre-owned item, you're helping to reduce clothing waste and extending the lifecycle of quality materials.",
  },
  {
    id: 2,
    name: "Mid-Century Modern Chair",
    description: "A stylish chair perfect for any living room.",
    longDescription:
      "This beautiful mid-century modern chair combines style and comfort. The chair features solid wood legs and a comfortable upholstered seat. Its timeless design will complement any living space while adding a touch of retro charm. By choosing this pre-loved piece, you're making an environmentally conscious decision to reduce furniture waste.",
    price: 1200,
    imageUrl: "/images/Chair.jpg",
    additionalImages: ["/images/Chair.jpg", "/images/Chair.jpg", "/images/Chair.jpg"],
    rating: 4.8,
    reviews: 36,
    category: "furniture",
    condition: "Excellent",
    seller: {
      name: "VintageFinds",
      rating: 4.9,
      sales: 203,
      avatar: "/images/Omar.jpg",
    },
    features: [
      "Solid wood construction",
      "Comfortable upholstery",
      "Authentic mid-century design",
      "Sturdy and durable",
      "Recently reupholstered",
    ],
    sustainabilityImpact:
      "Choosing second-hand furniture prevents perfectly good items from ending up in landfills and reduces the demand for new production.",
  },
  {
    id: 3,
    name: "Retro Gaming Console",
    description: "Play all your favorite classic games.",
    longDescription:
      "Relive the golden age of gaming with this retro gaming console. This system comes with two controllers and 20 pre-installed classic games. It's in excellent working condition and has been well-maintained by its previous owner. Perfect for collectors or anyone looking to experience the joy of retro gaming while giving electronic devices a second life.",
    price: 650,
    imageUrl: "/images/Console.jpg",
    additionalImages: ["/images/Console.jpg", "/images/Console.jpg", "/images/Console.jpg"],
    rating: 4.2,
    reviews: 18,
    category: "electronics",
    condition: "Good",
    seller: {
      name: "RetroTech",
      rating: 4.6,
      sales: 89,
      avatar: "/images/Omar.jpg",
    },
    features: [
      "Includes 2 controllers",
      "20 pre-installed games",
      "Original packaging",
      "All cables included",
      "Recently tested and working perfectly",
    ],
    sustainabilityImpact:
      "Electronic waste is a growing environmental problem. By purchasing this pre-owned console, you're helping to reduce e-waste and conserve resources.",
  },
  {
    id: 4,
    name: "Abstract Art Painting",
    description: "A unique piece of art to brighten up your home.",
    longDescription:
      'Add a splash of color to your home with this vibrant abstract painting. Created by a local artist using eco-friendly paints, this one-of-a-kind piece measures 24" x 36" and comes ready to hang. The painting features bold colors and dynamic brushstrokes that will make a statement in any room. By purchasing this artwork, you\'re supporting sustainable art practices.',
    price: 950,
    imageUrl: "/images/Paint.jpg",
    additionalImages: ["/images/Paint.jpg", "/images/Paint.jpg", "/images/Paint.jpg"],
    rating: 4.6,
    reviews: 12,
    category: "art",
    condition: "New",
    seller: {
      name: "EcoArtistry",
      rating: 4.7,
      sales: 67,
      avatar: "/images/Omar.jpg",
    },
    features: [
      "Original artwork",
      "Eco-friendly paints",
      "Ready to hang",
      "Signed by the artist",
      "Includes certificate of authenticity",
    ],
    sustainabilityImpact:
      "This artwork was created using sustainable materials and eco-friendly practices, minimizing environmental impact while bringing beauty to your space.",
  },
  {
    id: 5,
    name: "Modern Smartwatch",
    description: "Stay connected with this feature-rich smartwatch.",
    longDescription:
      "This modern smartwatch offers all the features you need to stay connected and track your fitness goals. With heart rate monitoring, step counting, sleep tracking, and smartphone notifications, it's the perfect companion for an active lifestyle. The watch has been factory refurbished and is in excellent condition with a new battery. By choosing refurbished electronics, you're making an eco-friendly choice.",
    price: 1100,
    imageUrl: "/images/Smart.jpg",
    additionalImages: ["/images/Smart.jpg", "/images/Smart.jpg", "/images/Smart.jpg"],
    rating: 4.7,
    reviews: 42,
    category: "electronics",
    condition: "Refurbished",
    seller: {
      name: "TechRenewal",
      rating: 4.8,
      sales: 215,
      avatar: "/images/Omar.jpg",
    },
    features: [
      "Heart rate monitoring",
      "Step and sleep tracking",
      "Smartphone notifications",
      "Water-resistant",
      "7-day battery life",
    ],
    sustainabilityImpact:
      "Refurbished electronics reduce e-waste and conserve the valuable resources used in manufacturing new devices.",
  },
  {
    id: 6,
    name: "Handmade Wooden Table",
    description: "A beautiful and durable table for your dining room.",
    longDescription:
      "This handcrafted wooden dining table is made from reclaimed oak, giving it character and environmental value. The table comfortably seats six people and features a smooth, polished surface with natural grain patterns that make each piece unique. The sturdy construction ensures this table will last for generations, making it a sustainable choice for your home.",
    price: 1800,
    imageUrl: "/images/Table.jpg",
    additionalImages: ["/images/Table.jpg", "/images/Table.jpg", "/images/Table.jpg"],
    rating: 4.9,
    reviews: 28,
    category: "furniture",
    condition: "Excellent",
    seller: {
      name: "SustainableCrafts",
      rating: 4.9,
      sales: 124,
      avatar: "/images/Omar.jpg",
    },
    features: [
      "Made from reclaimed oak",
      "Seats 6 people comfortably",
      "Handcrafted details",
      "Natural finish",
      "Easy to maintain",
    ],
    sustainabilityImpact:
      "This table is crafted from reclaimed wood, preventing waste and reducing the demand for newly harvested timber.",
  },
  {
    id: 7,
    name: "Designer Dress",
    description: "An elegant dress for special occasions.",
    longDescription:
      "Make a statement at your next event with this elegant designer dress. Previously worn only once for a photoshoot, this dress is in perfect condition. The flowing silhouette and high-quality fabric create a flattering look that's both comfortable and sophisticated. By choosing pre-loved designer clothing, you're participating in sustainable fashion practices.",
    price: 750,
    imageUrl: "/images/Dress.jpg",
    additionalImages: ["/images/Dress.jpg", "/images/Dress.jpg", "/images/Dress.jpg"],
    rating: 4.4,
    reviews: 15,
    category: "clothing",
    condition: "Like New",
    seller: {
      name: "FashionForward",
      rating: 4.5,
      sales: 78,
      avatar: "/images/Omar.jpg",
    },
    features: [
      "Designer brand",
      "Worn only once",
      "Premium fabric",
      "Flattering silhouette",
      "Dry-cleaned and ready to wear",
    ],
    sustainabilityImpact:
      "The fashion industry is one of the largest polluters globally. By purchasing pre-loved clothing, you're reducing waste and the environmental impact of fast fashion.",
  },
  {
    id: 8,
    name: "High-End Headphones",
    description: "Experience music like never before with these headphones.",
    longDescription:
      "Immerse yourself in superior sound quality with these high-end headphones. Featuring noise cancellation technology and comfortable over-ear design, these headphones provide an exceptional listening experience. They have been professionally refurbished and tested to ensure they meet the original manufacturer's specifications. By choosing refurbished electronics, you're helping to reduce electronic waste.",
    price: 900,
    imageUrl: "/images/HeadPhone.jpg",
    additionalImages: ["/images/HeadPhone.jpg", "/images/HeadPhone.jpg", "/images/HeadPhone.jpg"],
    rating: 4.8,
    reviews: 32,
    category: "electronics",
    condition: "Refurbished",
    seller: {
      name: "AudioPhile",
      rating: 4.7,
      sales: 143,
      avatar: "/images/Omar.jpg",
    },
    features: [
      "Noise cancellation technology",
      "Comfortable over-ear design",
      "Bluetooth connectivity",
      "30-hour battery life",
      "Includes carrying case",
    ],
    sustainabilityImpact:
      "Refurbished electronics give high-quality products a second life, reducing e-waste and conserving the resources used in manufacturing new devices.",
  },
]

const ItemDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [mainImage, setMainImage] = useState("")
  const [tabValue, setTabValue] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  // WhatsApp contact number
  const whatsappNumber = "+201027643232"

  useEffect(() => {
    // In a real app, you would fetch the item data from an API
    const foundItem = items.find((item) => item.id === Number.parseInt(id))
    if (foundItem) {
      setItem(foundItem)
      setMainImage(foundItem.imageUrl)
    }
    setLoading(false)
  }, [id])

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const handleImageClick = (image) => {
    setMainImage(image)
  }

  const handleAddToCart = () => {
    // In a real app, you would add the item to the cart
    // For now, just navigate to the payment page
    navigate("/payment", { state: { item } })
  }

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  // Function to handle WhatsApp contact
  const handleContactSeller = () => {
    // Create message with item details
    const message = `Hi, I'm interested in your item "${item.name}" priced at ${item.price} EGP on Zero Waste Marketplace.`

    // Create WhatsApp URL with phone number and encoded message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")
  }

  if (loading) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography>Loading...</Typography>
      </Container>
    )
  }

  if (!item) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography>Item not found</Typography>
        <Button component={RouterLink} to="/marketplace" startIcon={<ArrowBackIcon />} sx={{ mt: 2 }}>
          Back to Marketplace
        </Button>
      </Container>
    )
  }

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 8 }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link component={RouterLink} to="/" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/marketplace" color="inherit">
            Marketplace
          </Link>
          <Link component={RouterLink} to={`/marketplace?category=${item.category}`} color="inherit">
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </Link>
          <Typography color="text.primary">{item.name}</Typography>
        </Breadcrumbs>

        {/* Back button */}
        <Button
          component={RouterLink}
          to="/marketplace"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 3 }}
          color="primary"
          variant="text"
        >
          Back to Marketplace
        </Button>

        <Grid container spacing={4}>
          {/* Left column - Images */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                mb: 2,
                height: 400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "grey.100",
              }}
            >
              <Box
                component="img"
                src={mainImage}
                alt={item.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Paper>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 1,
                    overflow: "hidden",
                    height: 80,
                    cursor: "pointer",
                    border: mainImage === item.imageUrl ? "2px solid" : "none",
                    borderColor: "primary.main",
                  }}
                  onClick={() => handleImageClick(item.imageUrl)}
                >
                  <Box
                    component="img"
                    src={item.imageUrl}
                    alt={`${item.name} thumbnail`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Paper>
              </Grid>
              {item.additionalImages.map((image, index) => (
                <Grid item xs={3} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      borderRadius: 1,
                      overflow: "hidden",
                      height: 80,
                      cursor: "pointer",
                      border: mainImage === image ? "2px solid" : "none",
                      borderColor: "primary.main",
                    }}
                    onClick={() => handleImageClick(image)}
                  >
                    <Box
                      component="img"
                      src={image}
                      alt={`${item.name} thumbnail ${index + 1}`}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right column - Details */}
          <Grid item xs={12} md={6}>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
                  {item.name}
                </Typography>
                <IconButton
                  onClick={handleToggleFavorite}
                  color="primary"
                  sx={{ p: 1 }}
                  aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                  {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Rating value={item.rating} precision={0.1} readOnly />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  ({item.reviews} reviews)
                </Typography>
                <Chip label={item.condition} size="small" color="primary" variant="outlined" sx={{ ml: 2 }} />
              </Box>

              <Typography variant="h4" color="primary.main" sx={{ fontWeight: 700, mb: 3 }}>
                {item.price} EGP
              </Typography>

              <Typography variant="body1" paragraph>
                {item.longDescription}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Avatar src={item.seller.avatar} sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Seller: {item.seller.name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Rating value={item.seller.rating} precision={0.1} readOnly size="small" />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      ({item.seller.sales} sales)
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Sustainability Impact
                </Typography>
                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <RecyclingIcon color="primary" sx={{ mr: 1, mt: 0.5 }} />
                  <Typography variant="body2">{item.sustainabilityImpact}</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  startIcon={<ShoppingCartIcon />}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outlined"
                  color="success"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  onClick={handleContactSeller}
                >
                  Contact Seller
                </Button>
              </Box>

              <Box sx={{ mb: 3 }}>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <VerifiedUserIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Buyer protection guarantee" />
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Tabs section */}
        <Box sx={{ mt: 6 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              mb: 3,
            }}
          >
            <Tab label="Features" />
            <Tab label="Reviews" />
            <Tab label="Shipping" />
          </Tabs>

          {tabValue === 0 && (
            <Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Product Features
              </Typography>
              <List>
                {item.features.map((feature, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {tabValue === 1 && (
            <Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Customer Reviews
              </Typography>
              <Typography variant="body2">Reviews will be displayed here. This feature is coming soon.</Typography>
            </Box>
          )}

          {tabValue === 2 && (
            <Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Shipping Information
              </Typography>
              <Typography variant="body2" paragraph>
                We offer free shipping on all orders over 50 EGP. Standard shipping typically takes 3-5 business days.
              </Typography>
              <Typography variant="body2">
                For more information about shipping options and rates, please contact the seller.
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default ItemDetailsPage
