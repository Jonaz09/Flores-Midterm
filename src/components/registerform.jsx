import { useState } from "react";
import { TextField, Button, RadioGroup, FormControlLabel, Radio, Typography, Box } from "@mui/material";

export default function RegisterForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    gadgetName: "",
    category: "",
    manufacturer: "",
    healthRating: "",
    brandName: "",
    userRole: "",
  });
  const [errors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (formData.gadgetName.trim().length < 3) newErrors.gadgetName = "Min 3 characters";
    if (!formData.category) newErrors.category = "Required";
    if (!formData.manufacturer) newErrors.manufacturer = "Required";
    if (!formData.healthRating || formData.healthRating < 1 || formData.healthRating > 100)
      newErrors.healthRating = "1–100 only";
    if (!formData.brandName) newErrors.brandName = "Required";
    if (!formData.userRole) newErrors.userRole = "Pick a role";
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({
        gadgetName: "",
        category: "",
        manufacturer: "",
        healthRating: "",
        brandName: "",
        userRole: "",
      });
      
    }
  };

  return (
    <Box sx={{ p: 2, maxWidth: 400, mx: "auto" }}>
      <Typography variant="h5">
        Gadget Registration
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Gadget Name"
          value={formData.gadgetName}
          onChange={(e) => setFormData({ ...formData, gadgetName: e.target.value })}
         
        />
        <TextField
          label="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          
          helperText={errors.category}
        />
        <TextField
          label="Manufacturer"
          value={formData.manufacturer}
          onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
          
        />
        <TextField
          label="Health Rating (1-100)"
          type="number"
          value={formData.healthRating}
          onChange={(e) => setFormData({ ...formData, healthRating: Number(e.target.value) })}
          
        />
        <TextField
          label="Brand Name"
          value={formData.brandName}
          onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
        
        />
        <RadioGroup
          value={formData.userRole}
          onChange={(e) => setFormData({ ...formData, userRole: e.target.value })}
        >
          <FormControlLabel value="Engineer" control={<Radio />} label="Engineer" />
          <FormControlLabel value="Tester" control={<Radio />} label="Tester" />
        </RadioGroup>
        {errors.userRole && <Typography color="error">{errors.userRole}</Typography>}

        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}
