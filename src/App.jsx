import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import RegisterForm from "./components/registerform";

function App() {
  const handleFormSubmit = (data) => {
    console.log("Submitted gadget:", data);
    
  };

  return (
    <div>
      <Typography variant="h4">
        Gadget Registration
      </Typography>
      <RegisterForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
