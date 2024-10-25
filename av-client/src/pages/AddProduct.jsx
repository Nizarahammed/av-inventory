import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import axios from "axios";

const AddProduct = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: "",
    model: "",
    brand: "",
    costPrice: "",
    sellingPrice: "",
    description: "",
    count: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/product', formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.status === 204) {
        console.log("Product already exists and was updated.");
        alert("Product already exists and has been updated.");
      } else {
        console.log("Product added successfully:", response.data);
        alert("Product added successfully");
      }

      setFormData({
        type: "",
        model: "",
        brand: "",
        costPrice: "",
        sellingPrice: "",
        description: "",
        count: ""
      });
      navigate("/");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Add Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Cost Price"
              name="costPrice"
              value={formData.costPrice}
              onChange={handleChange}
              required
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Selling Price"
              name="sellingPrice"
              value={formData.sellingPrice}
              onChange={handleChange}
              required
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Available Count"
              name="count"
              value={formData.count}
              onChange={handleChange}
              required
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddProduct;
