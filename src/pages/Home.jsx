import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import RecyclingIcon from "@mui/icons-material/Recycling";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PlasticIcon from "@mui/icons-material/RestoreFromTrash";
import PaperIcon from "@mui/icons-material/Description";
import ElectronicsIcon from "@mui/icons-material/SettingsRemote";
import ToysIcon from "@mui/icons-material/SportsEsports";

// Import the components
import SectionTitle from "../components/SectionTitle";
import CategoryCard from "../components/CategoryCard";

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
    </Box>
  );
};

export default Home;
