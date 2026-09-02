import { useState } from "react";
import { TextField, Button, RadioGroup, FormControlLabel, Radio, Box } from "@mui/material";

export default function RegisterForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    gadgetName: "",
    category: "",
    manufacturer: "",
    healthRating: "",
    storeName: "",   // ✅ storeName instead of brandName
    userRole: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (formData.gadgetName.trim().length < 3) newErrors.gadgetName = "Min 3 characters";
    if (!formData.category) newErrors.category = "Required";
    if (!formData.manufacturer) newErrors.manufacturer = "Required";
    if (!formData.healthRating || formData.healthRating < 1 || formData.healthRating > 100)
      newErrors.healthRating = "1–100 only";
    if (!formData.storeName) newErrors.storeName = "Required";   // ✅ updated
    if (!formData.userRole) newErrors.userRole = "Pick a role";

    setErrors(newErrors);
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
        storeName: "",   // ✅ reset storeName
        userRole: "",
      });
      setErrors({});
    }
  };

  return (
    <Box sx={{ p: 2, maxWidth: 400, mx: "auto" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Gadget Name"
          value={formData.gadgetName}
          onChange={(e) => setFormData({ ...formData, gadgetName: e.target.value })}
          error={!!errors.gadgetName}
          helperText={errors.gadgetName}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          error={!!errors.category}
          helperText={errors.category}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Manufacturer"
          value={formData.manufacturer}
          onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
          error={!!errors.manufacturer}
          helperText={errors.manufacturer}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Health Rating (1-100)"
          type="number"
          value={formData.healthRating}
          onChange={(e) => setFormData({ ...formData, healthRating: Number(e.target.value) })}
          error={!!errors.healthRating}
          helperText={errors.healthRating}
          fullWidth
          margin="normal"
          inputProps={{ min: 1, max: 100 }}
        />
        <TextField
          label="Store Name"   
          value={formData.storeName}
          onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
          error={!!errors.storeName}
          helperText={errors.storeName}
          fullWidth
          margin="normal"
        />
        <RadioGroup
          value={formData.userRole}
          onChange={(e) => setFormData({ ...formData, userRole: e.target.value })}
          row
        >
          <FormControlLabel value="Engineer" control={<Radio />} label="Engineer" />
          <FormControlLabel value="Tester" control={<Radio />} label="Tester" />
        </RadioGroup>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Register Gadget
        </Button>
      </form>
    </Box>
  );
}
