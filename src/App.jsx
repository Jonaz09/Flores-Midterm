import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { useState } from "react";
import RegisterForm from "./components/registerform";
import GadgetTable from "./components/table";

function App() {
  const [gadgets, setGadgets] = useState([]);

  const handleFormSubmit = (data) => {
    setGadgets((prev) => [...prev, data]);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">
        Gadget Registration
      </Typography>
      <RegisterForm onSubmit={handleFormSubmit} />
      
      
      <GadgetTable data={gadgets} />
    </Box>
  );
}

export default App;
