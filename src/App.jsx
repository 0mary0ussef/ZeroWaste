import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MarketplacePage from "./pages/MarketplacePage"
import CommunityPage from "./pages/CommunityPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import RecyclingTipsPage from "./pages/RecyclingTipsPage"
import ItemDetailsPage from "./pages/ItemDetailsPage"
import PaymentPage from "./pages/PaymentPage"
import PaymentSuccessPage from "./pages/PaymentSuccessPage"
import ListItemPage from "./pages/ListItemPage"
import ProfilePage from "./pages/ProfilePage"
import RedeemPointsPage from "./pages/RedeemPointsPage" // Import the RedeemPointsPage
import AdminDashboard from "./pages/AdminDashboard"
import ScrollToTop from "./components/ScrollToTop" // Import the ScrollToTop component
import ImageLazyLoader from "./components/ImageLazyLoader" // Import the new component

// Update the theme configuration to use better fonts and the requested color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: "#41AB5D",
      light: "#6ede8a",
      dark: "#2d7a42",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f1f1f5",
      light: "#ffffff",
      dark: "#c1c1c5",
      contrastText: "#18191f",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <ImageLazyLoader /> {/* Add this line to enable lazy loading for all images */}
        <Routes>
          {/* Admin Dashboard Route - No Navbar/Footer */}
          <Route path="/admin/*" element={<AdminDashboard />} />

          {/* Regular Routes with Navbar/Footer */}
          <Route
            path="*"
            element={
              <div className="app-container">
                <Navbar />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/marketplace" element={<MarketplacePage />} />
                    <Route path="/list-item" element={<ListItemPage />} />
                    <Route path="/community" element={<CommunityPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/recycling-tips" element={<RecyclingTipsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/redeem-points" element={<RedeemPointsPage />} />{" "}
                    {/* Add the RedeemPointsPage route */}
                    <Route path="/item/:id" element={<ItemDetailsPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="/payment-success" element={<PaymentSuccessPage />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
