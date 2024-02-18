import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import Header from '../../components/header/header';

export const Customer = () => {
  const [formData, setFormData] = useState({
    customerId: '',
    branchId: '',
    name: '',
    address: '',
    contactPerson: '',
    designation: '',
    telephoneNo: '',
    faxNo: '',
    eccNo: '',
    sstNo: '',
    insertedOn: '',
    cstNo: '',
  });


  const handleInputChange = (e) => {
    const { name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    localStorage.setItem('myObject', JSON.stringify(formData));
  };

  return (
    <Container>
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}
        sx={{
          // ... (previous styles)
          "& .css-p6qti8-MuiInputBase-root-MuiOutlinedInput-root": {
            // backgroundColor: "red",
            
          },

          "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline":{
                   margin:"6px",
                   border: "2px solid #808080",
                   borderRadius:"10px",
          },

          "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline:hover":{
            margin:"6px",
            border: "2px solid red",
            borderRadius:"10px",
          },

          "& .css-9425fu-MuiOutlinedInput-notchedOutline":{
            // borderRadius:"100px",
            margin:"100px",
            border: "10px solid #808080",
          },

          "& .css-wxl1jl-MuiInputBase-root-MuiOutlinedInput-root": {
            borderRadius: "100px",
          },

          "& .css-17w9904-MuiTypography-root":{
            marginLeft:"12px",
            fontSize:"18px"
          },

          "& .css-1lw178f-MuiButtonBase-root-MuiButton-root":{
            margin:'200px',
          }
        }}>


         <Grid item xs={12}>
            <Typography>Customer Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="customerId"
              type='text'
              placeholder='Customer Id'
              value={formData.customerId}
              onChange={handleInputChange}
            />
          </Grid>

          
          <Grid item xs={6}>
            <Typography>Name:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="Name"
              type='text'
              placeholder='Name'
              value={formData.Name}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Address:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="Address"
              type='text'
              placeholder='Address'
              value={formData.Address}
              onChange={handleInputChange}
            />
          </Grid>
     </Grid>
  </form>
</Container>
  );
};
