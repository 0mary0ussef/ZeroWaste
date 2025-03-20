"use client"

import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Divider,
  Stepper,
  Step,
  StepLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Alert,
  Snackbar,
} from "@mui/material"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import PaymentsIcon from "@mui/icons-material/Payments"
import SecurityIcon from "@mui/icons-material/Security"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { Link as RouterLink } from "react-router-dom"

const steps = ["Shipping Information", "Payment Method", "Review & Pay"]

const PaymentPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const item = location.state?.item || null

  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    paymentMethod: "credit",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })
  const [errors, setErrors] = useState({})
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState("")
  const [snackbarSeverity, setSnackbarSeverity] = useState("success")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  const validateStep = () => {
    const newErrors = {}

    if (activeStep === 0) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
      if (!formData.email.trim()) newErrors.email = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
      if (!formData.address.trim()) newErrors.address = "Address is required"
      if (!formData.city.trim()) newErrors.city = "City is required"
      if (!formData.state.trim()) newErrors.state = "State is required"
      if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required"
    } else if (activeStep === 1) {
      if (formData.paymentMethod === "credit") {
        if (!formData.cardNumber.trim()) newErrors.cardNumber = "Card number is required"
        else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, "")))
          newErrors.cardNumber = "Card number must be 16 digits"
        if (!formData.cardName.trim()) newErrors.cardName = "Name on card is required"
        if (!formData.expiryDate.trim()) newErrors.expiryDate = "Expiry date is required"
        else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate))
          newErrors.expiryDate = "Expiry date must be in MM/YY format"
        if (!formData.cvv.trim()) newErrors.cvv = "CVV is required"
        else if (!/^\d{3,4}$/.test(formData.cvv)) newErrors.cvv = "CVV must be 3 or 4 digits"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      if (activeStep === steps.length - 1) {
        // Submit the form
        handleSubmit()
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
      }
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleSubmit = () => {
    // In a real app, you would process the payment here
    console.log("Payment processed:", formData)

    // Show success message
    setSnackbarMessage("Payment successful! Redirecting to confirmation page...")
    setSnackbarSeverity("success")
    setSnackbarOpen(true)

    // Redirect to success page after a delay
    setTimeout(() => {
      navigate("/payment-success", { state: { item, formData } })
    }, 2000)
  }

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false)
  }

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                error={!!errors.address}
                helperText={errors.address}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                error={!!errors.city}
                helperText={errors.city}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="State/Province"
                name="state"
                value={formData.state}
                onChange={handleChange}
                error={!!errors.state}
                helperText={errors.state}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="ZIP / Postal Code"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                error={!!errors.zipCode}
                helperText={errors.zipCode}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        )
      case 1:
        return (
          <Box>
            <FormControl component="fieldset" sx={{ mb: 3 }}>
              <FormLabel component="legend">Payment Method</FormLabel>
              <RadioGroup name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} sx={{ mt: 1 }}>
                <Paper
                  sx={{
                    p: 2,
                    mb: 2,
                    border: "1px solid",
                    borderColor: formData.paymentMethod === "credit" ? "primary.main" : "divider",
                    borderRadius: 1,
                  }}
                >
                  <FormControlLabel
                    value="credit"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CreditCardIcon sx={{ mr: 1 }} />
                        <Typography>Credit / Debit Card</Typography>
                      </Box>
                    }
                  />
                </Paper>
                <Paper
                  sx={{
                    p: 2,
                    mb: 2,
                    border: "1px solid",
                    borderColor: formData.paymentMethod === "bank" ? "primary.main" : "divider",
                    borderRadius: 1,
                  }}
                >
                  <FormControlLabel
                    value="bank"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <AccountBalanceIcon sx={{ mr: 1 }} />
                        <Typography>Bank Transfer</Typography>
                      </Box>
                    }
                  />
                </Paper>
                <Paper
                  sx={{
                    p: 2,
                    border: "1px solid",
                    borderColor: formData.paymentMethod === "paypal" ? "primary.main" : "divider",
                    borderRadius: 1,
                  }}
                >
                  <FormControlLabel
                    value="paypal"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <PaymentsIcon sx={{ mr: 1 }} />
                        <Typography>PayPal</Typography>
                      </Box>
                    }
                  />
                </Paper>
              </RadioGroup>
            </FormControl>

            {formData.paymentMethod === "credit" && (
              <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Card Number"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      error={!!errors.cardNumber}
                      helperText={errors.cardNumber}
                      InputProps={{
                        endAdornment: <SecurityIcon color="action" sx={{ ml: 1 }} />,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Name on Card"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      error={!!errors.cardName}
                      helperText={errors.cardName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Expiry Date"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      error={!!errors.expiryDate}
                      helperText={errors.expiryDate}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="CVV"
                      name="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleChange}
                      error={!!errors.cvv}
                      helperText={errors.cvv}
                    />
                  </Grid>
                </Grid>
              </Box>
            )}
          </Box>
        )
      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            {item ? (
              <Box>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={3} sm={2}>
                    <Box
                      component="img"
                      src={item.imageUrl}
                      alt={item.name}
                      sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 1,
                      }}
                    />
                  </Grid>
                  <Grid item xs={9} sm={10}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="h6" color="primary.main" sx={{ mt: 1 }}>
                      ${item.price}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            ) : (
              <Alert severity="warning" sx={{ mb: 3 }}>
                No item information available. Please go back to the marketplace.
              </Alert>
            )}

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              Shipping Information
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">
                  Name
                </Typography>
                <Typography variant="body1">
                  {formData.firstName} {formData.lastName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">
                  Email
                </Typography>
                <Typography variant="body1">{formData.email}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  Shipping Address
                </Typography>
                <Typography variant="body1">
                  {formData.address}, {formData.city}, {formData.state} {formData.zipCode}, {formData.country}
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              Payment Details
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">
                  Payment Method
                </Typography>
                <Typography variant="body1">
                  {formData.paymentMethod === "credit"
                    ? "Credit / Debit Card"
                    : formData.paymentMethod === "bank"
                      ? "Bank Transfer"
                      : "PayPal"}
                </Typography>
              </Grid>
              {formData.paymentMethod === "credit" && (
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Card Number
                  </Typography>
                  <Typography variant="body1">**** **** **** {formData.cardNumber.slice(-4)}</Typography>
                </Grid>
              )}
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ bgcolor: "grey.100", p: 2, borderRadius: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography variant="body1">Subtotal</Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <Typography variant="body1">${item ? item.price : 0}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">Shipping</Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <Typography variant="body1">$5.00</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">Tax</Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <Typography variant="body1">${item ? (item.price * 0.08).toFixed(2) : 0}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Total
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "primary.main" }}>
                    ${item ? (item.price + 5 + item.price * 0.08).toFixed(2) : 0}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )
      default:
        return null
    }
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
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

      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Checkout
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {renderStepContent(activeStep)}

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Place Order" : "Next"}
          </Button>
        </Box>
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default PaymentPage

