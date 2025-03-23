"use client"

import { useState } from "react"
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
} from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import FacebookIcon from "@mui/icons-material/Facebook"
import GoogleIcon from "@mui/icons-material/Google"
import RecyclingIcon from "@mui/icons-material/Recycling"
import { Link as RouterLink } from "react-router-dom"

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login with:", { email, password, rememberMe })
  }

  return (
    <Container component="main" maxWidth="lg" sx={{ py: 8, minHeight: "calc(100vh - 64px - 300px)" }}>
      <Grid container sx={{ height: "100%" }}>
        {/* Left side - Login form */}
        <Grid item xs={12} md={6} component={Paper} elevation={6} square sx={{ borderRadius: { md: "8px 0 0 8px" } }}>
          <Box
            sx={{
              my: 8,
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
                mb: 6,
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <RecyclingIcon sx={{ color: "primary.main", mr: 1, fontSize: 30 }} />
              <Typography component="h1" variant="h5">
                <Box component="span" sx={{ color: "primary.main" }}>
                  Zero
                </Box>
                Waste
              </Typography>
            </Box>

            <Typography component="h1" variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
              Welcome Back
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: "100%", mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      color="primary"
                      size="small"
                    />
                  }
                  label="Remember me"
                />
                <Link component={RouterLink} to="/forgot-password" variant="body2" color="primary">
                  Forgot password?
                </Link>
              </Box>

              <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2, py: 1.5 }}>
                Login
              </Button>

              <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                <Divider sx={{ flexGrow: 1 }} />
                <Typography variant="body2" color="text.secondary" sx={{ mx: 2 }}>
                  OR
                </Typography>
                <Divider sx={{ flexGrow: 1 }} />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
                <Button
                  variant="outlined"
                  startIcon={<FacebookIcon />}
                  sx={{
                    flex: 1,
                    borderColor: "#1877F2",
                    color: "#1877F2",
                    "&:hover": { borderColor: "#166FE5", bgcolor: "rgba(24, 119, 242, 0.04)" },
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
                    "&:hover": { borderColor: "#C53929", bgcolor: "rgba(219, 68, 55, 0.04)" },
                  }}
                >
                  Google
                </Button>
              </Box>

              <Box sx={{ mt: 4, textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  Don't have an account?{" "}
                  <Link component={RouterLink} to="/signup" color="primary" fontWeight="medium">
                    Sign Up
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
            backgroundImage: "url(/images/login.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) => t.palette.grey[50],
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: { md: "0 8px 8px 0" },
          }}
        />
      </Grid>
    </Container>
  )
}

export default LoginPage

