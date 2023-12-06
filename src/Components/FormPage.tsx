import  { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



export default function FormPage() {
  // State variables to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    email: '',
  });
  
  const Login = (event: { preventDefault: () => void; })=>{
    event.preventDefault();

    let name = JSON.parse(JSON.stringify(localStorage.getItem('formData'))).firstName;
    if (formData.firstName !== name ) {
      alert("user doesnt exist, You should register")
    }
    else{
      window.location.href = '/secondpage';
    }
  }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // localStorage.setItem('formData', JSON.stringify(formData));

    let name = JSON.parse(JSON.stringify(localStorage.getItem('formData'))).firstName;
    
    if (formData.firstName === name) {
      alert("user already exist you should login");
    }
    else{
      localStorage.setItem('formData', JSON.stringify(formData));
      window.location.href = '/secondpage';
    }

  };

  

  // Event handler for input changes
  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h4>First Page</h4>
      <form onSubmit={handleSubmit}>
        <Box p={2}>
          <TextField
            label="Name"
            variant="outlined"
            name="firstName"
            fullWidth
            margin="normal"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Box p={2}>
          <TextField
            label="Phone Number"
            variant="outlined"
            name="phoneNumber"
            fullWidth
            margin="normal"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required

          />
        </Box>
        <Box p={2}>
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleInputChange}
            required

          />
        </Box>
        <Box p={2}>
          <Button type="submit" variant="contained" color="secondary">
          Register
          </Button>
        </Box>
      </form>
      <form onSubmit={Login}>

      <Box p={2}>
          <Button type="submit" variant="contained" color="secondary">
          Login
          </Button>
        </Box>
      </form>

    </div>
  );
}

