import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import RecyclingIcon from "@mui/icons-material/Recycling"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import GroupsIcon from "@mui/icons-material/Groups"
import SchoolIcon from "@mui/icons-material/School"
import { Link as RouterLink } from "react-router-dom"
import SectionTitle from "../components/SectionTitle"

const Services = () => {
  const services = [
    {
      title: "Recycling Services",
      description: "Our comprehensive recycling services make it easy to responsibly dispose of various materials.",
      icon: RecyclingIcon,
      image: "/images/recycle.jpg",
      features: [
        "Convenient pickup scheduling",
        "Sorting and processing of recyclables",
        "Tracking of environmental impact",
        "Rewards for regular recycling",
      ],
    },
    {
      title: "Marketplace",
      description: "Buy and sell second-hand items to extend their lifecycle and reduce waste.",
      icon: ShoppingBagIcon,
      image: "/images/market.jpg",
      features: [
        "Secure payment processing",
        "Verified seller profiles",
        "Local and nationwide shipping options",
        "Quality assurance for all items",
      ],
    },
    {
      title: "Community Programs",
      description: "Join local initiatives and connect with like-minded individuals in your area.",
      icon: GroupsIcon,
      image: "/images/team.jpg",
      features: ["Local cleanup events", "Community challenges", "Networking opportunities", "Collaborative projects"],
    },
    {
      title: "Educational Resources",
      description: "Learn about sustainability practices and how to reduce your environmental footprint.",
      icon: SchoolIcon,
      image: "/images/books.jpg",
      features: [
        "Online courses and workshops",
        "Recycling guides and tutorials",
        "Expert webinars",
        "Educational materials for schools",
      ],
    },
  ]

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 8 }}>
        <Container>
          <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Our Services
          </Typography>
          <Typography variant="h6" align="center" sx={{ maxWidth: 800, mx: "auto" }}>
            Comprehensive solutions for a zero-waste lifestyle
          </Typography>
        </Container>
      </Box>

      {/* Services Overview */}
      <Container sx={{ py: 8 }}>
        <SectionTitle>What We Offer</SectionTitle>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <CardMedia component="img" height="200" image={service.image} alt={service.title} />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box
                      sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        borderRadius: "50%",
                        p: 1,
                        mr: 2,
                      }}
                    >
                      <service.icon />
                    </Box>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                  </Box>

                  <Typography variant="body1" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>

                  <List>
                    {service.features.map((feature, idx) => (
                      <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 2 }}
                    component={RouterLink}
                    to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: "grey.100", py: 8 }}>
        <Container>
          <Box
            sx={{
              bgcolor: "white",
              p: 4,
              borderRadius: 2,
              textAlign: "center",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Ready to Start Your Zero Waste Journey?
            </Typography>
            <Typography variant="body1" paragraph sx={{ maxWidth: 800, mx: "auto", mb: 4 }}>
              Join thousands of individuals and businesses who are making a positive impact on the environment through
              our services.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={RouterLink}
                to="/signup"
                sx={{ px: 4, py: 1.5 }}
              >
                Sign Up Now
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                component={RouterLink}
                to="/contact"
                sx={{ px: 4, py: 1.5 }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Services

