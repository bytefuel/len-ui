import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import Header from '../components/header/header';

export const Form2 = () => {
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
        }}
        >
          <Grid item xs={4}>
            <Typography>Customer Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="customerId"
              type='number'
              placeholder='Customer Id'
              value={formData.customerId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Branch Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="branchId"
              type='number'
              placeholder='BranchId'
              value={formData.branchId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
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

          <Grid item xs={12}>
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


          <Grid item xs={4}>
            <Typography>Contact Person:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="contactPerson"
              type='text'
              placeholder='Contact Person'
              value={formData.contactPerson}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Designation:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="Designation"
              type='text'
              placeholder='Designation'
              value={formData.Designation}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Telephone No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="telephoneNo"
              type='number'
              placeholder='Telephone No'
              value={formData.telephoneNo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>fax No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="faxNo"
              type='number'
              placeholder='Fax No'
              value={formData.faxNo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Ecc No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="eccNo"
              type='number'
              placeholder='Ecc No'
              value={formData.eccNo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Sst No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="sstNo"
              type='number'
              placeholder='Sst No'
              value={formData.sstNo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Inserted On:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="sstNo"
               type='datetime-local'
              placeholder='Sst No'
              value={formData.sstNo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Cst No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="cstNo"
              type='number'
              placeholder='Sst No'
              value={formData.cstNo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>last Updated On:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="lastUpdatedOn"
              type='number'
              placeholder='lastUpdatedOn'
              value={formData.lastUpdatedOn}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>inserted By User Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="insertedByUserId"
              type='text'
              placeholder='insertedByUserId'
              value={formData.insertedByUserId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Last Updated By User Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="lastUpdatedByUserId"
              type='text'
              placeholder='lastUpdatedByUserId'
              value={formData.lastUpdatedByUserId}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Gst No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="gstNo"
              type='text'
              placeholder='lastUpdatedByUserId'
              value={formData.gstNo}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Industry XYZ:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="IndustryXYZ"
              type='text'
              placeholder='IndustryXYZ'
              value={formData.IndustryXYZ}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Cust Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="custId"
              type='text'
              placeholder='custId'
              value={formData.custId}
              onChange={handleInputChange}
            />
          </Grid>

          
          <Grid item xs={4}>
            <Typography>Pan No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="panNo"
              type='text'
              placeholder='panNo'
              value={formData.panNo}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
          
      <div style={
        {
          margin:"15px 0px 0px 10px",
          
        }
      }>
        <Button 
        style={{
          padding:'8px 30px 8px 30px',
          // margin:"15px 0px 0px 10px",
          textAlign:'center'
        }}
        type="submit" 
        variant="contained" 
        color="primary">
        Submit
        </Button>
      </div>
        
      </form>
    </Container>
  );
};
