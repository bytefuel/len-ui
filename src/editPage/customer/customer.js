import React, { useState , useEffect} from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../../components/header/header';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import '../../Css/CustomerForm.css'

export function Customer() {
  const [formData, setFormData] = useState(() => {
    // Load data from local storage, if available
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : [{
      ofmCommunicationId: "",
      activityTextListId: "",
      dt: "",
  }];
});

useEffect(() => {
  localStorage.setItem('formData', JSON.stringify(formData));
}, [formData]);

  console.log(formData)

  const handleInputChange = (index, event) => {
    const { name, value } = event.target; // This line is causing the error
    const list = [...formData];
    list[index][name] = value;
    setFormData(list);
  };

  const handleAddSection = () => {
    setFormData([...formData, {
      salesInquiryId: "",
      approvedDisapproved: "",
      dt: "",
    }]);
  };

  const handleDeleteSection = (index) => {
    const list = [...formData];
    list.splice(index, 1);
    setFormData(list);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValid = formData.every(entry => {
      return Object.values(entry).every(value => value.trim() !== '');
    });

    if (isFormValid) {
      // Proceed with form submission
      console.log("Form data:", formData);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
  <Container>
     <Header title="Customer" subtitle="Create a New User Profile" />
     <form onSubmit={handleSubmit}>
    <div>

    <div class="container container-2"> 
        <div class="exem-3">Customer Number</div>
    </div>
 
    <Grid container spacing={2}
        sx={{
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
              onChange={(event) => handleInputChange(event)}
            />
          </Grid>
        </Grid>
     
     <div className="container container-2"> 
       <div className="exem-3">Customer Number</div>
       <Button onClick={handleAddSection}> 
         <AddIcon fontSize="small" color="primary" /> 
       </Button>
      </div>

         {formData.map((section, index) => (
        <div key={index}>
          <div className="container container-2"> 
            {index !== 0 && (
              <>
              <div className="exem-2">Customer Number</div>
              <Button onClick={() => handleDeleteSection(index)}>
                <DeleteIcon color="error" />
              </Button>
              </>
            )}
          </div>
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
            <Typography>Sales Inquiry Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="salesInquiryId"
              type='text'
              placeholder='Sales Inquiry Id'
              value={formData.salesInquiryId}
              onChange={(event) => handleInputChange(index, event)}
            />
          </Grid>
        </Grid>
      </div>
      ))}
    </div>

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
}


