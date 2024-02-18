import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import Header from '../../components/header/header';

export const Quotation = () => {
  const [formData, setFormData] = useState({
    
        quotationId: 0,
        companyId: 0,
        factoryUnitId: "",
        categoryId: "",
        customerId: "",
        attentionTo: "",
        designation: "",
        enquiryNo: "",
        enquiryDate: "",
        dueOn: "",
        transportId: "",
        specialComments: "",
        engineer:"",
        budgetoryOffer:"",
        packingandForwarding:"",
        exciseDuty:"" ,
        salesTax: "",
        salesTaxTypeId: "",
        freight: "",
        priceTermId: "",
        paymentTerms: "",
        warranty:"",
        type: "",
        statement: "",
        startStatement: "",
        endStatement: "",
        signatoryName: "",
        signatoryDesignation: "",
        insertedOn: "",
        lastUpdatedOn: "",
        insertedByUserId: "",
        lastUpdatedByUserId: "",
        quotationNo: "",
        quotationDt: "",
        branchid: "",
        countryId:"",
        sgst: "",
        cgst:"",
        igst:"",
        amendmentNo: "",
        amendmentDt: "",
        address: "",
        transactionTypeId:"",
        validity: "",
        deliverySchedule: "",
        grandTotal:"",
        discount: "",
        revisionNo: "",
        revisionDate: "",
        quotationSourceId: "",
        salesInquiryId: "",
        custEnquiryNo: ""
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
      <Header title="Quotation" subtitle="Create a New User Profile" />
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
            <Typography>Quotation Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="quotationId"
              type='number'
              placeholder='quotationId'
              value={formData.quotationId}
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
            <Typography>Factory Unit Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="dt"
              type='factoryUnitId'
              placeholder='dt'
              value={formData.factoryUnitId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography>Category Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="categoryId"
              type='text'
              placeholder='categoryId'
              value={formData.categoryId}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Attention To:</Typography>
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


          <Grid item xs={4}>
            <Typography>Designation:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="designation"
              type='text'
              placeholder='designation'
              value={formData.designation}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Enquiry No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="enquiryNo"
              type='number'
              placeholder='enquiryNo'
              value={formData.enquiryNo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Enquiry Date:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="enquiryDate"
              type='number'
              placeholder='enquiryDate'
              value={formData.enquiryDate}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Due On:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="dueOn"
              type='text'
              placeholder='dueOn'
              value={formData.dueOn}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Transport Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="transportId"
              type='number'
              placeholder='transportId'
              value={formData.transportId}
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
              placeholder='Designation'
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
               type='datetime-local'
              placeholder='SpecialComments'
              value={formData.engineer}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Budgetory Offer:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="budgetoryOffer"
              type='email'
              placeholder='Email Id'
              value={formData.budgetoryOffer}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Packingand Forwarding:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="budgetoryOffer"
              type='email'
              placeholder='Email Id'
              value={formData.budgetoryOffer}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Excise Duty:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="budgetoryOffer"
              type='email'
              placeholder='exciseDuty'
              value={formData.exciseDuty}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Sales Tax:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="salesTax"
              type='number'
              placeholder='salesTax'
              value={formData.salesTax}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Sales Tax Type Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="salesTaxTypeId"
              type='text'
              placeholder='salesTaxTypeId'
              value={formData.salesTaxTypeId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Freight:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="freight"
              type='text'
              placeholder='freight'
              value={formData.freight}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Price Term Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="priceTermId"
              type='text'
              placeholder='priceTermId'
              value={formData.priceTermId}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Payment Terms:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="paymentTerms"
              type='text'
              placeholder='paymentTerms'
              value={formData.paymentTerms}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Warranty:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="warranty"
              type='text'
              placeholder='warranty'
              value={formData.warranty}
              onChange={handleInputChange}
            />
          </Grid>

          
          <Grid item xs={4}>
            <Typography>Type:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="type"
              type='text'
              placeholder='type'
              value={formData.type}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Statement:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="statement"
              type='text'
              placeholder='statement'
              value={formData.statement}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Start Statement:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="startStatement"
              type='text'
              placeholder='startStatement'
              value={formData.startStatement}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>End Statement:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="endStatement"
              type='text'
              placeholder='endStatement'
              value={formData.endStatement}
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
              placeholder='signatoryName'
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
            <Typography>InsertedOn:</Typography>
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
            <Typography>Last Updated On:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="lastUpdatedOn"
              type='text'
              placeholder='lastUpdatedOn'
              value={formData.lastUpdatedOn}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>InsertedBy User Id:</Typography>
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
            <Typography>LastUpdatedBy User Id:</Typography>
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
            <Typography>QuotationNo:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="quotationNo"
              type='text'
              placeholder='quotationNo'
              value={formData.quotationNo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Quotation Dt:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="quotationDt"
              type='text'
              placeholder='quotationDt'
              value={formData.quotationDt}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>branchid:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="branchid"
              type='text'
              placeholder='branchid'
              value={formData.branchid}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>countryId:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="countryId"
              type='text'
              placeholder='countryId'
              value={formData.countryId}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>sgst:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="sgst"
              type='text'
              placeholder='sgst'
              value={formData.sgst}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>cgst:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="cgst"
              type='text'
              placeholder='cgst'
              value={formData.cgst}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>igst:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="igst"
              type='text'
              placeholder='igst'
              value={formData.igst}
              onChange={handleInputChange}
            />
          </Grid>



          <Grid item xs={4}>
            <Typography>Amendment No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="amendmentNo"
              type='text'
              placeholder='amendmentNo'
              value={formData.amendmentNo}
              onChange={handleInputChange}
            />
          </Grid>



          <Grid item xs={4}>
            <Typography>Amendment Dt:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="amendmentDt"
              type='text'
              placeholder='amendmentDt'
              value={formData.amendmentDt}
              onChange={handleInputChange}
            />
          </Grid>



          <Grid item xs={4}>
            <Typography>Address:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="address"
              type='text'
              placeholder='address'
              value={formData.address}
              onChange={handleInputChange}
            />
          </Grid>



          <Grid item xs={4}>
            <Typography>TransactionTypeId:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="transactionTypeId"
              type='text'
              placeholder='transactionTypeId'
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
              placeholder='validity'
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
              placeholder='deliverySchedule'
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
              type='text'
              placeholder='grandTotal'
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
              type='text'
              placeholder='discount'
              value={formData.discount}
              onChange={handleInputChange}
            />
          </Grid>



          <Grid item xs={4}>
            <Typography>RevisionNo:</Typography>
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
            <Typography>Revision Date:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="revisionDate"
              type='text'
              placeholder='revisionDate'
              value={formData.revisionDate}
              onChange={handleInputChange}
            />
          </Grid>



          <Grid item xs={4}>
            <Typography>Quotation Source Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="quotationSourceId"
              type='text'
              placeholder='quotationSourceId'
              value={formData.quotationSourceId}
              onChange={handleInputChange}
            />
          </Grid>




          <Grid item xs={4}>
            <Typography>SalesInquiry Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="salesInquiryId"
              type='text'
              placeholder='salesInquiryId'
              value={formData.salesInquiryId}
              onChange={handleInputChange}
            />
          </Grid>



          <Grid item xs={4}>
            <Typography>Cust Enquiry No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="custEnquiryNo"
              type='text'
              placeholder='custEnquiryNo'
              value={formData.custEnquiryNo}
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
