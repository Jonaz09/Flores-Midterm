import { useState } from "react";
import { Typography, Box } from "@mui/material";
import RegisterForm from "./components/registerform";
import GadgetTable from "./components/table";
import ProfileDetailCard from "./components/profiledetailcard";

function App() {
  const [gadgets, setGadgets] = useState([]);
  const [selectedGadget, setSelectedGadget] = useState(null);

  const handleFormSubmit = (data) => {
    setGadgets((prev) => [...prev, data]);
  };

  
  const handleDelete = (gadgetToDelete) => {
    setGadgets((prev) => prev.filter((g) => g !== gadgetToDelete));
    setSelectedGadget(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">
        Gadget Registration
      </Typography>
      <RegisterForm onSubmit={handleFormSubmit} />
      <GadgetTable data={gadgets} onRowClick={setSelectedGadget} />
      <ProfileDetailCard gadget={selectedGadget} />
    </Box>
  );
}

export default App;
