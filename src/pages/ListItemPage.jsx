"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Divider,
  InputAdornment,
  FormHelperText,
  Chip,
  IconButton,
} from "@mui/material"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"
import DeleteIcon from "@mui/icons-material/Delete"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { Link as RouterLink } from "react-router-dom"

const categories = [
  { value: "electronics", label: "Electronics" },
  { value: "furniture", label: "Furniture" },
  { value: "clothing", label: "Clothing" },
  { value: "art", label: "Art" },
  { value: "books", label: "Books" },
  { value: "toys", label: "Toys" },
  { value: "sports", label: "Sports Equipment" },
  { value: "other", label: "Other" },
]

const conditions = [
  { value: "new", label: "New" },
  { value: "like_new", label: "Like New" },
  { value: "excellent", label: "Excellent" },
  { value: "good", label: "Good" },
  { value: "fair", label: "Fair" },
  { value: "salvage", label: "Salvage" },
]

const ListItemPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    condition: "",
    price: "",
    tags: [],
    currentTag: "",
    images: [],
  })
  const [errors, setErrors] = useState({})

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

  const handleAddTag = () => {
    if (formData.currentTag.trim() && !formData.tags.includes(formData.currentTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, formData.currentTag.trim()],
        currentTag: "",
      })
    }
  }

  const handleDeleteTag = (tagToDelete) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToDelete),
    })
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    if (files.length > 0) {
      // In a real app, you would upload these to a server
      // For now, we'll just create URLs for preview
      const newImages = files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }))

      setFormData({
        ...formData,
        images: [...formData.images, ...newImages],
      })
    }
  }

  const handleRemoveImage = (index) => {
    const newImages = [...formData.images]
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(newImages[index].preview)
    newImages.splice(index, 1)
    setFormData({
      ...formData,
      images: newImages,
    })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.title.trim()) newErrors.title = "Title is required"
    if (!formData.description.trim()) newErrors.description = "Description is required"
    if (!formData.category) newErrors.category = "Category is required"
    if (!formData.condition) newErrors.condition = "Condition is required"
    if (!formData.price) newErrors.price = "Price is required"
    else if (isNaN(formData.price) || Number(formData.price) <= 0) newErrors.price = "Price must be a positive number"
    if (formData.images.length === 0) newErrors.images = "At least one image is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // In a real app, you would submit the form data to your backend
      console.log("Form submitted:", formData)
      // Navigate to the marketplace or a success page
      navigate("/marketplace")
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
          List Your Item
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Fill out the form below to list your item on the Zero Waste marketplace.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Item Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                error={!!errors.title}
                helperText={errors.title}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                error={!!errors.description}
                helperText={errors.description}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required error={!!errors.category}>
                <InputLabel>Category</InputLabel>
                <Select name="category" value={formData.category} onChange={handleChange} label="Category">
                  {categories.map((category) => (
                    <MenuItem key={category.value} value={category.value}>
                      {category.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.category && <FormHelperText>{errors.category}</FormHelperText>}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required error={!!errors.condition}>
                <InputLabel>Condition</InputLabel>
                <Select name="condition" value={formData.condition} onChange={handleChange} label="Condition">
                  {conditions.map((condition) => (
                    <MenuItem key={condition.value} value={condition.value}>
                      {condition.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.condition && <FormHelperText>{errors.condition}</FormHelperText>}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Price"
                name="price"
                type="number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                value={formData.price}
                onChange={handleChange}
                error={!!errors.price}
                helperText={errors.price}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Add Tags (Optional)"
                name="currentTag"
                value={formData.currentTag}
                onChange={handleChange}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleAddTag()
                  }
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button onClick={handleAddTag} disabled={!formData.currentTag.trim()}>
                        Add
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {formData.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    onDelete={() => handleDeleteTag(tag)}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Item Images
              </Typography>
              <Box
                sx={{
                  border: "2px dashed",
                  borderColor: errors.images ? "error.main" : "divider",
                  borderRadius: 1,
                  p: 3,
                  textAlign: "center",
                  mb: 2,
                }}
              >
                <input
                  accept="image/*"
                  id="image-upload"
                  type="file"
                  multiple
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
                <label htmlFor="image-upload">
                  <Button variant="contained" component="span" startIcon={<CloudUploadIcon />} sx={{ mb: 2 }}>
                    Upload Images
                  </Button>
                </label>
                <Typography variant="body2" color="text.secondary">
                  Drag and drop images here or click to browse
                </Typography>
                {errors.images && (
                  <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                    {errors.images}
                  </Typography>
                )}
              </Box>

              {formData.images.length > 0 && (
                <Grid container spacing={2}>
                  {formData.images.map((image, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                      <Box
                        sx={{
                          position: "relative",
                          height: 100,
                          borderRadius: 1,
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={image.preview || "/placeholder.svg"}
                          alt={`Preview ${index}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <IconButton
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 4,
                            right: 4,
                            bgcolor: "rgba(255, 255, 255, 0.7)",
                            "&:hover": {
                              bgcolor: "rgba(255, 255, 255, 0.9)",
                            },
                          }}
                          onClick={() => handleRemoveImage(index)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button component={RouterLink} to="/marketplace" color="inherit" sx={{ mr: 1 }}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<AddPhotoAlternateIcon />}
                >
                  List Item
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  )
}

export default ListItemPage

