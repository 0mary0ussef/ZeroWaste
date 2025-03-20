import { Box, Container, Grid, Typography, Link, IconButton, Divider, Button, TextField } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import RecyclingIcon from "@mui/icons-material/Recycling"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#41AB5D", color: "white", pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        {/* Company Info */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <RecyclingIcon sx={{ fontSize: 36, mr: 1 }} />
              <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
                ZeroWaste
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Bin Less, Recycle More. Join our community of eco-conscious individuals committed to reducing waste and
              promoting sustainability.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">zerowaste@email.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">+1 (234) 567-8900</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">123 Green Street, Eco City, EC 12345</Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link component={RouterLink} to="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link component={RouterLink} to="/about" color="inherit" underline="hover">
                About Us
              </Link>
              <Link component={RouterLink} to="/marketplace" color="inherit" underline="hover">
                Marketplace
              </Link>
              <Link component={RouterLink} to="/community" color="inherit" underline="hover">
                Community
              </Link>
              <Link component={RouterLink} to="/recycling-tips" color="inherit" underline="hover">
                Recycling Tips
              </Link>
            </Box>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Resources
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link component={RouterLink} to="/faq" color="inherit" underline="hover">
                FAQ
              </Link>
              <Link component={RouterLink} to="/blog" color="inherit" underline="hover">
                Blog
              </Link>
              <Link component={RouterLink} to="/partners" color="inherit" underline="hover">
                Partners
              </Link>
              <Link component={RouterLink} to="/contact" color="inherit" underline="hover">
                Contact Us
              </Link>
              <Link component={RouterLink} to="/privacy" color="inherit" underline="hover">
                Privacy Policy
              </Link>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Join Our Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Stay updated with the latest recycling tips, community events, and marketplace deals.
            </Typography>
            <Box sx={{ display: "flex", mb: 2 }}>
              <TextField
                placeholder="Your email address"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  bgcolor: "white",
                  borderRadius: "4px 0 0 4px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                      borderRadius: "4px 0 0 4px",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#2d7a42",
                  color: "white",
                  borderRadius: "0 4px 4px 0",
                  "&:hover": { bgcolor: "#236335" },
                }}
              >
                Subscribe
              </Button>
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
                  }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", my: 3 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "flex-start" },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ textAlign: { xs: "center", sm: "left" } }}>
            &copy; {new Date().getFullYear()} ZeroWaste. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link color="inherit" underline="hover" href="#">
              <Typography variant="body2">Terms of Service</Typography>
            </Link>
            <Link color="inherit" underline="hover" href="#">
              <Typography variant="body2">Privacy Policy</Typography>
            </Link>
            <Link color="inherit" underline="hover" href="#">
              <Typography variant="body2">Cookies</Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

