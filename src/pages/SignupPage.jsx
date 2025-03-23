"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Divider,
  Link,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import RecyclingIcon from "@mui/icons-material/Recycling";
import { Link as RouterLink } from "react-router-dom";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup with:", {
      firstName,
      lastName,
      email,
      phone,
      password,
    });
  };

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{ py: 8, minHeight: "calc(100vh - 64px - 300px)" }}
    >
      <Grid container sx={{ height: "100%" }}>
        {/* Left side - Signup form */}
        <Grid
          item
          xs={12}
          md={6}
          component={Paper}
          elevation={6}
          square
          sx={{ borderRadius: { md: "8px 0 0 8px" } }}
        >
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {/* Logo - Make it clickable to go back to home */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 4,
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <RecyclingIcon
                sx={{ color: "primary.main", mr: 1, fontSize: 30 }}
              />
              <Typography component="h1" variant="h5">
                <Box component="span" sx={{ color: "primary.main" }}>
                  Zero
                </Box>
                Waste
              </Typography>
            </Box>

            <Typography
              component="h1"
              variant="h4"
              sx={{ mb: 3, fontWeight: 700 }}
            >
              Join the Zero Waste community
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ width: "100%", mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmPassword}
                            edge="end"
                          >
                            {showConfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        color="primary"
                      />
                    }
                    label={
                      <Typography variant="body2">
                        By signing up, you agree to our{" "}
                        <Link
                          component={RouterLink}
                          to="/terms"
                          color="primary"
                        >
                          Terms and Conditions
                        </Link>
                        .
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2, py: 1.5 }}
                disabled={!agreedToTerms}
              >
                Sign Up
              </Button>

              <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                <Divider sx={{ flexGrow: 1 }} />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mx: 2 }}
                >
                  OR
                </Typography>
                <Divider sx={{ flexGrow: 1 }} />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Button
                  variant="outlined"
                  startIcon={<FacebookIcon />}
                  sx={{
                    flex: 1,
                    borderColor: "#1877F2",
                    color: "#1877F2",
                    "&:hover": {
                      borderColor: "#166FE5",
                      bgcolor: "rgba(24, 119, 242, 0.04)",
                    },
                  }}
                >
                  Facebook
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  sx={{
                    flex: 1,
                    borderColor: "#DB4437",
                    color: "#DB4437",
                    "&:hover": {
                      borderColor: "#C53929",
                      bgcolor: "rgba(219, 68, 55, 0.04)",
                    },
                  }}
                >
                  Google
                </Button>
              </Box>

              <Box sx={{ mt: 2, textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  Already have an account?{" "}
                  <Link
                    component={RouterLink}
                    to="/login"
                    color="primary"
                    fontWeight="medium"
                  >
                    Login
                  </Link>
                </Typography>
              </Box>

              {/* Back to Home link */}
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <Link
                  component={RouterLink}
                  to="/"
                  color="primary"
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  <Typography variant="body2">← Back to Home</Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right side - Image */}
        <Grid
          item
          xs={false}
          md={6}
          sx={{
            backgroundImage: "url(/images/signup.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) => t.palette.grey[50],
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: { md: "0 8px 8px 0" },
          }}
        />
      </Grid>
    </Container>
  );
};

export default SignupPage;
