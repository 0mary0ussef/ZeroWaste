import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Avatar,
  Card,
  CardContent,
  Rating,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import RecyclingIcon from "@mui/icons-material/Recycling";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PlasticIcon from "@mui/icons-material/RestoreFromTrash";
import PaperIcon from "@mui/icons-material/Description";
import ElectronicsIcon from "@mui/icons-material/SettingsRemote";
import ToysIcon from "@mui/icons-material/SportsEsports";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// Import the components
import SectionTitle from "../components/SectionTitle";
import CategoryCard from "../components/CategoryCard";

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Mohab Ehab",
    role: "Regular User",
    avatar: "https://source.unsplash.com/100x100/?portrait,woman",
    rating: 5,
    text: "Zero Waste has completely changed how I think about recycling. The points system makes it fun and rewarding!",
  },
  {
    id: 2,
    name: "Toqa Ahmed",
    role: "Business Partner",
    avatar: "https://source.unsplash.com/100x100/?portrait,man",
    rating: 4.5,
    text: "As a business owner, partnering with Zero Waste has helped us reduce our environmental footprint while connecting with eco-conscious customers.",
  },
  {
    id: 3,
    name: "Omar Youssef",
    role: "Community Leader",
    avatar: "https://source.unsplash.com/100x100/?portrait,woman2",
    rating: 5,
    text: "I've organized several community clean-ups through Zero Waste. The platform makes it easy to coordinate and track our collective impact.",
  },
];

const Home = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box sx={{ py: 10, bgcolor: "white" }}>
        <Container>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Welcome to Zero Waste
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Join us in our mission to reduce waste and create a sustainable
            future.
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}
          >
            <Button
              component={RouterLink}
              to="/signup"
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Get Started
            </Button>
            <Button
              component={RouterLink}
              to="/about"
              variant="outlined"
              color="primary"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Categories Section */}
      <Box sx={{ py: 8, bgcolor: "#ffffff" }}>
        <Container>
          <SectionTitle>Our Categories</SectionTitle>

          <Box
            sx={{
              mt: 6,
              p: { xs: 2, sm: 4 },
              bgcolor: "white",
              borderRadius: 2,
              mb: 4,
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={6} sm={3}>
                <CategoryCard
                  icon={PlasticIcon}
                  title="Plastics"
                  description="Recycle bottles, containers, and packaging"
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <CategoryCard
                  icon={PaperIcon}
                  title="Papers"
                  description="Newspapers, magazines, and cardboard"
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <CategoryCard
                  icon={ElectronicsIcon}
                  title="Electronics"
                  description="Phones, computers, and appliances"
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <CategoryCard
                  icon={ToysIcon}
                  title="Kids Toys"
                  description="Donate and recycle children's toys"
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* How to Use Section */}
      <Box sx={{ py: 8, bgcolor: "white", color: "text.primary" }}>
        <Container>
          <SectionTitle>How to Use Zero Waste</SectionTitle>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  textAlign: "center",
                  bgcolor: "white",
                  p: 4,
                  borderRadius: 2,
                  height: "100%",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-10px)" },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: "primary.main",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <PersonIcon sx={{ fontSize: 40, color: "white" }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Create Your Account
                </Typography>
                <Typography color="text.secondary">
                  Sign up and join our community of eco-conscious individuals
                  committed to making a difference.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  textAlign: "center",
                  bgcolor: "white",
                  p: 4,
                  borderRadius: 2,
                  height: "100%",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-10px)" },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: "primary.main",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <RecyclingIcon sx={{ fontSize: 40, color: "white" }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Recycle and Collect Points
                </Typography>
                <Typography color="text.secondary">
                  Earn points for every item you recycle through our platform
                  and track your environmental impact.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  textAlign: "center",
                  bgcolor: "white",
                  p: 4,
                  borderRadius: 2,
                  height: "100%",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-10px)" },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: "primary.main",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <AutorenewIcon sx={{ fontSize: 40, color: "white" }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Replace The Points
                </Typography>
                <Typography color="text.secondary">
                  Use your points to get discounts and eco-friendly products
                  from our marketplace partners.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section - "Our Customers Say" */}
      <Box sx={{ py: 8, bgcolor: "#f8f9fa" }}>
        <Container>
          <SectionTitle>Our Customers Say</SectionTitle>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
          >
            Hear from our community members about their experiences with Zero
            Waste
          </Typography>

          <Grid container spacing={4}>
            {testimonials.map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <Card
                  sx={{
                    height: "100%",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "translateY(-10px)" },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ position: "relative", mb: 4 }}>
                      <FormatQuoteIcon
                        sx={{
                          position: "absolute",
                          top: -10,
                          left: -10,
                          fontSize: 40,
                          color: "primary.light",
                          opacity: 0.4,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontStyle: "italic",
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        "{testimonial.text}"
                      </Typography>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ width: 60, height: 60, mr: 2 }}
                      />
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600 }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                        <Rating
                          value={testimonial.rating}
                          precision={0.5}
                          readOnly
                          size="small"
                          sx={{ mt: 0.5 }}
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              component={RouterLink}
              to="/community"
              variant="outlined"
              color="primary"
              sx={{ mt: 2 }}
            >
              View More Testimonials
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
