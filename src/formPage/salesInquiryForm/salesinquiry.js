import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import Header from '../../components/header/header';

export const SalesInquiry = () => {
  const [formData, setFormData] = useState({
    
        salesInquiryId: "",
        approvedDisapproved: "",
        dt: "",
        companyId:"",
        factoryUnitId: "",
        categoryId: "",
        customerId:"",
        address: "",
        contactPerson: "",
        designation: "",
        specialComments: "",
        engineer: "",
        emailId: "",
        mobileNo: "",
        signatoryName: "",
        signatoryDesignation: "",
        sourceId: "",
        branchId: "",
        countryId:"",
        sgst: "",
        cgst: "",
        igst: "",
        transactionTypeId: "",
        validity: "",
        deliverySchedule: "",
        grandTotal: "",
        discount: "",
        revisionNo: "",
        revisionDate: "",
        insertedOn: "",
        lastUpdatedOn: "",
        insertedByUserId: "",
        lastUpdatedByUserId: "",
        salesInquiryNo: "",
        industryId: "",
        approvedDisapprovedOn: "",
        approvedDisapprovedByUserId: ""
      
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
      <Header title="Sales Inquiry" subtitle="Create a New User Profile" />
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
            <Typography>Sales Inquiry Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="salesInquiryId"
              type='text'
              placeholder='Sales Inquiry Id'
              value={formData.salesInquiryId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Approved Disapproved:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="approvedDisapproved"
              type='text'
              placeholder='Approved Disapproved'
              value={formData.approvedDisapproved}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Dt:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="dt"
              type='text'
              placeholder='Dt'
              value={formData.dt}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Company Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="companyId"
              type='number'
              placeholder='companyId'
              value={formData.companyId}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>factory Unit Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="factoryUnitId"
              type='text'
              placeholder='Factory Unit Id'
              value={formData.factoryUnitId}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Category Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="categoryId"
              type='number'
              placeholder='Category Id'
              value={formData.categoryId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>customer Id:</Typography>
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
            <Typography>Address:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="address"
              type='number'
              placeholder='Address'
              value={formData.address}
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
              name="designation"
              type='number'
              placeholder='Designation'
              value={formData.designation}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Special Comments:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="specialComments"
              type='number'
              placeholder='Special Comments'
              value={formData.specialComments}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Engineer:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="engineer"
               type='text'
              placeholder='Engineer'
              value={formData.engineer}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Email Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="emailId"
              type='email'
              placeholder='Email Id'
              value={formData.emailId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Mobile No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="mobileNo"
              type='number'
              placeholder='mobileNo'
              value={formData.mobileNo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Signatory Name:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="signatoryName"
              type='text'
              placeholder='Signatory Name'
              value={formData.signatoryName}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Signatory Designation:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="signatoryDesignation"
              type='text'
              placeholder='signatoryDesignation'
              value={formData.signatoryDesignation}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Source Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="sourceId"
              type='text'
              placeholder='Source Id'
              value={formData.sourceId}
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
              placeholder='Branch Id'
              value={formData.branchId}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Country Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="countryId"
              type='number'
              placeholder='CountryId'
              value={formData.countryId}
              onChange={handleInputChange}
            />
          </Grid>

          
          <Grid item xs={4}>
            <Typography>Sgst:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="sgst"
              type='number'
              placeholder='sgst'
              value={formData.sgst}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Cgst:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="cgst"
              type='number'
              placeholder='C gst'
              value={formData.cgst}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Igst:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="igst"
              type='number'
              placeholder='igst'
              value={formData.igst}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Transaction Type Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="transactionTypeId"
              type='text'
              placeholder='Transaction Type Id'
              value={formData.transactionTypeId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Validity:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="validity"
              type='text'
              placeholder='Validity'
              value={formData.validity}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Delivery Schedule:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="deliverySchedule"
              type='text'
              placeholder='Delivery Schedule'
              value={formData.deliverySchedule}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Grand Total:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="grandTotal"
              type='number'
              placeholder='Grand Total'
              value={formData.grandTotal}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Discount:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="discount"
              type='number'
              placeholder='Discount'
              value={formData.discount}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Revision No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="revisionNo"
              type='text'
              placeholder='revisionNo'
              value={formData.revisionNo}
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
              placeholder='insertedOn'
              value={formData.insertedOn}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Revision No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="revisionNo"
              type='number'
              placeholder='revisionNo'
              value={formData.revisionNo}
              onChange={handleInputChange}
            />
          </Grid>

          
          <Grid item xs={4}>
            <Typography>Revision Date:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="revisionNo"
              type='datetime-local'
              placeholder='Revision Date'
              value={formData.revisionDate}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Inserted On:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="revisionNo"
              type='text'
              placeholder='insertedOn'
              value={formData.revisionNo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Last Updated On:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="lastUpdatedOn"
              type='text'
              placeholder='LastUpdatedOn'
              value={formData.lastUpdatedOn}
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
              placeholder='Last Updated By User Id'
              value={formData.lastUpdatedByUserId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Sales Inquiry No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="salesInquiryNo"
              type='text'
              placeholder='salesInquiryNo'
              value={formData.salesInquiryNo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Industry Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="industryId"
              type='number'
              placeholder='industryId'
              value={formData.industryId}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Approved Disapproved On:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="approvedDisapprovedOn"
              type='text'
              placeholder='Industry Id'
              value={formData.approvedDisapprovedOn}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Approved Disapproved ByUser Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="approvedDisapprovedByUserId"
              type='text'
              placeholder='Approved Disapproved By User Id'
              value={formData.approvedDisapprovedByUserId}
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
