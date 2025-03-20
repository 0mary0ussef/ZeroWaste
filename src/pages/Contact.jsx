"use client"

import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Snackbar,
  Alert,
  Card,
} from "@mui/material"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import SendIcon from "@mui/icons-material/Send"
import SectionTitle from "../components/SectionTitle"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    // Simulate form submission
    setSnackbar({
      open: true,
      message: "Your message has been sent successfully! We will get back to you soon.",
      severity: "success",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general",
    })
  }

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }))
  }

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 8 }}>
        <Container>
          <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Contact Us
          </Typography>
          <Typography variant="h6" align="center" sx={{ maxWidth: 800, mx: "auto" }}>
            Have questions or suggestions? We'd love to hear from you!
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <SectionTitle align="left">Get In Touch</SectionTitle>
            <Typography variant="body1" paragraph>
              We're here to help with any questions about recycling, our platform, or sustainability in general.
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Card sx={{ p: 3, mb: 3, borderRadius: 2, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <EmailIcon sx={{ color: "primary.main", mr: 2, fontSize: 28 }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      Email Us
                    </Typography>
                    <Typography variant="body2">zerowaste@email.com</Typography>
                  </Box>
                </Box>
              </Card>

              <Card sx={{ p: 3, mb: 3, borderRadius: 2, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PhoneIcon sx={{ color: "primary.main", mr: 2, fontSize: 28 }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      Call Us
                    </Typography>
                    <Typography variant="body2">+1 (234) 567-8900</Typography>
                  </Box>
                </Box>
              </Card>

              <Card sx={{ p: 3, borderRadius: 2, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationOnIcon sx={{ color: "primary.main", mr: 2, fontSize: 28 }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      Visit Us
                    </Typography>
                    <Typography variant="body2">123 Green Street, Eco City, EC 12345</Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 4, borderRadius: 2, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)" }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Send Us a Message
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl component="fieldset" sx={{ mb: 2 }}>
                      <FormLabel component="legend">Inquiry Type</FormLabel>
                      <RadioGroup row name="inquiryType" value={formData.inquiryType} onChange={handleChange}>
                        <FormControlLabel value="general" control={<Radio />} label="General Inquiry" />
                        <FormControlLabel value="support" control={<Radio />} label="Technical Support" />
                        <FormControlLabel value="partnership" control={<Radio />} label="Partnership" />
                        <FormControlLabel value="feedback" control={<Radio />} label="Feedback" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{ mt: 2 }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section */}
      <Box sx={{ height: 400, width: "100%", bgcolor: "grey.200", mb: 4 }}>
        {/* Replace with actual map component */}
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "grey.200",
          }}
        >
          <Typography variant="h6" color="text.secondary">
            Map will be displayed here
          </Typography>
        </Box>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Contact

