import { Card, CardContent, Typography, Box,} from "@mui/material";

export default function ProfileDetailCard({ gadget}) {
  if (!gadget) {
    return (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" color="text.secondary">
          Select a gadget
        </Typography>
      </Box>
    );
  }

  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h5">{gadget.gadgetName}</Typography>
        <Typography>Category: {gadget.category}</Typography>
        <Typography>Manufacturer: {gadget.manufacturer}</Typography>
        <Typography>Health Rating: {gadget.healthRating}</Typography>
        <Typography>Store Name: {gadget.brandName}</Typography>
        <Typography>User Role: {gadget.userRole}</Typography>
      </CardContent>
    </Card>
  );
}
