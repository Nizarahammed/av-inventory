import React, { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import axios from "axios";

const SearchFields = ({ setProducts }) => {
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");

  React.useEffect(() => {
    async function fetchProducts() {
      const products = await axios.get('/api/product', {
        params: {
          type,
          brand,
          model,
          description
        }
      });

      setProducts(products?.data);
    }

    if(type || brand) {
      try {
        fetchProducts();
      } catch(e) {
        console.log(e);
      }
    }
  }, [type, brand])

  const getSelectField = (field, fieldHandler, label, options) => {
    return <Box className="search-field" sx={{ width: "90%"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={field}
          label={field}
          onChange={fieldHandler}
        >
          {options.map(option => <MenuItem value={option}>{option}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  };

  const getTextField = (field, fieldHandler, label) => {
  return <Box
    component="form"
    noValidate
    autoComplete="off"
    sx={{ width: "90%" }}
    className="search-field"
  >
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      sx={{ width: "100%" }}
      value={field}
      onChange={fieldHandler}
    />
  </Box>
  }

  return (
    <div className="search-fields-container">
      {getSelectField(type, (e) => setType(e?.target?.value), 'Product', ['LED', 'Refrigerator', 'Washing Machine'])}
      {getSelectField(brand, (e) => setBrand(e?.target?.value), 'Brand', ['LG', 'Samsung', 'Panasonic'])}
      {getTextField(model, (e) => setModel(e.target.value), 'Model')}
      {getTextField(description, (e) => setDescription(e.target.value), 'Description')}
    </div>
  );
};

export default SearchFields;