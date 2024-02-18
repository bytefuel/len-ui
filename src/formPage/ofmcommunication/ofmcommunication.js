import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import Header from '../../components/header/header';

export const OfmCommunication = () => {
  const [formData, setFormData] = useState({
    ofmCommunicationId: "",
    activityTextListId: "",
    activityByUserId: "",
    comments: "",
    insertedOn: "",
    lastUpdatedOn: "",
    insertedByUserId: "",
    lastUpdatedByUserId: "",
    ofmId:"",
    ofmNo: "",
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
      <Header title="Ofm Communication" subtitle="Create a New User Profile" />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}
        sx={{
          // ... (previous styles)
          "& .css-p6qti8-MuiInputBase-root-MuiOutlinedInput-root": {
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
            <Typography>Ofm Communication Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="ofmCommunicationId"
              type='text'
              placeholder='ofmCommunicationId'
              value={formData.ofmCommunicationId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Activity Text List Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="activityTextListId"
              type='text'
              placeholder='Activity Text List Id'
              value={formData.activityTextListId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Activity By User Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="activityByUserId"
              type='text'
              placeholder='Activity By User Id'
              value={formData.activityByUserId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Comments:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="comments"
              type='text'
              placeholder='Comments'
              value={formData.customerId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Inserted On:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="insertedOn"
              type='text'
              placeholder='Inserted On'
              value={formData.insertedOn}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>last Updated On:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="lastUpdatedOn"
              type='text'
              placeholder='last Up dated On'
              value={formData.lastUpdatedOn}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Inserted By User Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="InsertedByUserId"
              type='text'
              placeholder='Inserted By User Id'
              value={formData.insertedByUserId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Inserted By User Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="insertedByUserId"
              type='text'
              placeholder='Inserted By User Id'
              value={formData.insertedByUserId}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Ofm Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="ofmId"
              type='text'
              placeholder='OfmId'
              value={formData.ofmId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Ofm No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="ofmNo"
              type='text'
              placeholder='OfmNo'
              value={formData.ofmNo}
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
