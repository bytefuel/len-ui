import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid , Select, MenuItem } from '@mui/material';
import Header from '../../components/header/header';

export const OfmId = () => {

  const [formData, setFormData] = useState({
        ofmId: 0,
        approvedDisapproved: "",
        ofmNo: "",
        ofmDate: "",
        ammendmentNo: "",
        lastAmmendmentDate:"",
        categoryId: "",
        branchId: "",
        projectOrder: "",
        industryId: "",
        priorityId: "",
        custId: "",
        attentionTo: "",
        consigneeName: "",
        consigneeAddress: "",
        consigneeAttentionTo: "",
        invoiceName: "",
        invoiceAddress: "",
        invoiceAttentionTo: "",
        poRecd: "",
        poNo: "",
        poDate: "",
        mktgEngineer: "",
        externalInspection: "",
        externalInspectionAt: "",
        externalInspectionBy: "",
        insurance: "",
        insuranceBy: "",
        insuranceChargesBornedBy: "",
        penaltyApplicable: "",
        deliveryPeriod: "",
        modeOfTransportId: "",
        transportThrough: "",
        paymentTerms: "",
        notes: "",
        invoiceTo: "",
        previousOANo: "",
        previousOADate: "",
        rawMaterialTC: "",
        qcReport: "",
        testReport: "",
        guaranteeCertificate: "",
        fitmentCertificate: "",
        complianceCertificate: "",
        discPercent: "",
        totalAmt: "",
        listPriceTotal: "",
        packingAndForwarding: "",
        exciseDuty: "",
        salesTaxTypeId: "",
        salesTax: "",
        freight: "",
        endUserName: "",
        endUserPlace: "",
        endUserBranchId: "",
        specialInstruction: "",
        approvedDisapprovedOn: "",
        approvedDisapprovedByUserId:"",
        isTransfered: "",
        customerId: "",
        companyId: "",
        transactionTypeId:"",
        transportId: "",
        countryId: "",
        address: "",
        oaNos: "",
        poReceived: "",
        sgst: "",
        cgst: "",
        igst: "",
        quotationNo: "",
        insertedOn: "",
        lastUpdatedOn: "",
        insertedByUserId: "",
        lastUpdatedByUserId: "",
        orderTypeTextListId: "",
        quotationId: "",
        isStatutoryRegulatory: "",
        isStRGRemarks: "",
      
      
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
      <Header title="Of mId" subtitle="Create a New User Profile" />
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
            <Typography>Of mId:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="ofmId"
              type='number'
              placeholder='Of mId'
              value={formData.ofmId}
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
            <Typography>Ofm No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="ofmNo"
              type='text'
              placeholder='Ofm No'
              value={formData.ofmNo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Ofm Date:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="ofmDate"
              type='datetime-local'
              placeholder='Ofm Date'
              value={formData.ofmDate}
              onChange={handleInputChange}
            />

          </Grid>
          <Grid item xs={4}>
            <Typography>Ammendment No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="ammendmentNo"
              type='number'
              placeholder='Ammendment No'
              value={formData.ammendmentNo}
              onChange={handleInputChange}
            />


          </Grid>
          <Grid item xs={4}>
            <Typography>last Ammendment Date:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="lastAmmendmentDate"
              type='datetime-local'
              placeholder='last Ammendment Date'
              value={formData.lastAmmendmentDate}
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
            <Typography>Project Order:</Typography>
            <Select
              variant="outlined"
              fullWidth
              name="projectOrder"
              placeholder='Branch Id'
              value={formData.projectOrder}
              onChange={handleInputChange}>
        <MenuItem value={true}>True</MenuItem>
        <MenuItem value={false}>False</MenuItem>
      </Select>
    </Grid>

          <Grid item xs={4}>
            <Typography>Industry Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="industryId"
              type='number'
              placeholder='Industry Id'
              value={formData.industryId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Priority Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="priorityId"
              type='number'
              placeholder='Priority Id'
              value={formData.industryId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Cust Id:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="custId"
              type='number'
              placeholder='Cust Id'
              value={formData.custId}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Attention To:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="attentionTo"
              type='text'
              placeholder='Attention To'
              value={formData.attentionTo}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Consignee Name:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="consigneeName"
              type='text'
              placeholder='ConsigneeName'
              value={formData.consigneeName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Consignee Address:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="consigneeAddress"
              type='text'
              placeholder='Consignee Address'
              value={formData.consigneeAddress}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Consignee Attention To:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="consigneeAttentionTo"
              type='text'
              placeholder='Consignee Attention To'
              value={formData.consigneeAttentionTo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Invoice Name:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="invoiceName"
              type='text'
              placeholder='InvoiceName'
              value={formData.invoiceName}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>Invoice Address:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="invoiceAddress"
              type='text'
              placeholder='Invoice Address'
              value={formData.invoiceAddress}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Invoice Attention To:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="invoiceAttentionTo"
              type='text'
              placeholder='Invoice Attention To'
              value={formData.invoiceAttentionTo}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>PoRecd:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="poRecd"
              type='text'
              placeholder='PoRecd'
              value={formData.poRecd}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Po No:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="poNo"
              type='text'
              placeholder='PoNo'
              value={formData.poNo}
              onChange={handleInputChange}
            />
          </Grid>
          
          <Grid item xs={4}>
            <Typography>Po Date:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="poDate"
              type='datetime-local'
              placeholder='poDate'
              value={formData.poDate}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Mktg Engineer:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="mktgEngineer"
              type='text'
              placeholder='Mktg Engineer'
              value={formData.mktgEngineer}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>External Inspection:</Typography>
            <Select
              variant="outlined"
              fullWidth
              name="externalInspection"
              placeholder='externalInspection'
              value={formData.externalInspection}
              onChange={handleInputChange}
            >
              <MenuItem value={true}>True</MenuItem>
              <MenuItem value={false}>False</MenuItem>
            </Select>
         </Grid>


          <Grid item xs={4}>
            <Typography>External Inspection By:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="externalInspectionBy"
              type='text'
              placeholder='External Inspection By'
              value={formData.externalInspectionBy}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Insurance:</Typography>
            <Select
              variant="outlined"
              fullWidth
              name="insurance"
              placeholder='Insurance'
              value={formData.insurance}
              onChange={handleInputChange}
            >
              <MenuItem value={true}>True</MenuItem>
              <MenuItem value={false}>False</MenuItem>
            </Select>
         </Grid>


          <Grid item xs={4}>
            <Typography>Insurance By:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="insuranceBy"
              type='text'
              placeholder='insurance By'
              value={formData.insuranceBy}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>Insurance Charges Borned By:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="insuranceChargesBornedBy"
              type='text'
              placeholder='Insurance Charges Borned By'
              value={formData.insuranceChargesBornedBy}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>Penalty Applicable:</Typography>
            <Select
              variant="outlined"
              fullWidth
              name="penaltyApplicable"
              value={formData.penaltyApplicable}
              onChange={handleInputChange}
            >
              <MenuItem value={true}>True</MenuItem>
              <MenuItem value={false}>False</MenuItem>
            </Select>
         </Grid>

          <Grid item xs={4}>
            <Typography>deliveryPeriod:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="deliveryPeriod"
              type='text'
              placeholder='deliveryPeriod'
              value={formData.deliveryPeriod}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>modeOfTransportId:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="modeOfTransportId"
              type='text'
              placeholder='modeOfTransportId'
              value={formData.modeOfTransportId}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>paymentTerms:</Typography>
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
            <Typography>notes:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="notes"
              type='text'
              placeholder='notes'
              value={formData.notes}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>invoiceTo:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="invoiceTo"
              type='text'
              placeholder='invoiceTo'
              value={formData.invoiceTo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>previousOANo:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="previousOANo"
              type='text'
              placeholder='previousOANo'
              value={formData.previousOANo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>rawMaterialTC:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="rawMaterialTC"
              type='text'
              placeholder='rawMaterialTC'
              value={formData.rawMaterialTC}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>qcReport:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="qcReport"
              type='text'
              placeholder='qcReport'
              value={formData.qcReport}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>testReport:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="testReport"
              type='text'
              placeholder='testReport'
              value={formData.testReport}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>guaranteeCertificate:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="guaranteeCertificate"
              type='text'
              placeholder='guaranteeCertificate'
              value={formData.guaranteeCertificate}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Typography>fitmentCertificate:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="fitmentCertificate"
              type='text'
              placeholder='fitmentCertificate'
              value={formData.fitmentCertificate}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>complianceCertificate:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="complianceCertificate"
              type='text'
              placeholder='complianceCertificate'
              value={formData.complianceCertificate}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>discPercent:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="discPercent"
              type='text'
              placeholder='discPercent'
              value={formData.discPercent}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>totalAmt:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="totalAmt"
              type='text'
              placeholder='totalAmt'
              value={formData.totalAmt}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>listPriceTotal:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="listPriceTotal"
              type='text'
              placeholder='listPriceTotal'
              value={formData.listPriceTotal}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>packingAndForwarding:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="packingAndForwarding"
              type='text'
              placeholder='packingAndForwarding'
              value={formData.packingAndForwarding}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>exciseDuty:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="exciseDuty"
              type='text'
              placeholder='exciseDuty'
              value={formData.exciseDuty}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>salesTaxTypeId:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="salesTaxTypeId"
              type='text'
              placeholder='salesTaxTypeId'
              value={formData.salesTaxTypeId}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>salesTax:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="salesTax"
              type='text'
              placeholder='salesTax'
              value={formData.salesTax}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>salesTax:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="salesTax"
              type='text'
              placeholder='salesTax'
              value={formData.salesTax}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>salesTax:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="salesTax"
              type='text'
              placeholder='salesTax'
              value={formData.salesTax}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>endUserPlace:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="endUserPlace"
              type='text'
              placeholder='endUserPlace'
              value={formData.endUserPlace}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>endUserBranchId:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="invoiceTo"
              type='text'
              placeholder='endUserBranchId'
              value={formData.endUserBranchId}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>specialInstruction:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="specialInstruction"
              type='text'
              placeholder='specialInstruction'
              value={formData.specialInstruction}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>approvedDisapprovedOn:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="approvedDisapprovedOn"
              type='text'
              placeholder='approvedDisapprovedOn'
              value={formData.approvedDisapprovedOn}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>approvedDisapprovedByUserId:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="approvedDisapprovedByUserId"
              type='text'
              placeholder='approvedDisapprovedByUserId'
              value={formData.approvedDisapprovedByUserId}
              onChange={handleInputChange}
            />
          </Grid>
          
          
          <Grid item xs={4}>
            <Typography>isTransfered:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="isTransfered"
              type='text'
              placeholder='isTransfered'
              value={formData.invoiceTo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>customerId:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="customerId"
              type='text'
              placeholder='customerId'
              value={formData.customerId}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>isTransfered:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="isTransfered"
              type='text'
              placeholder='isTransfered'
              value={formData.invoiceTo}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>companyId:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="companyId"
              type='text'
              placeholder='companyId'
              value={formData.companyId}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>address:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="address"
              type='text'
              placeholder='address'
              value={formData.address}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>oaNos:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="oaNos"
              type='text'
              placeholder='oaNos'
              value={formData.oaNos}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>poReceived:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="poReceived"
              type='text'
              placeholder='poReceived'
              value={formData.poReceived}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
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
          </Grid><Grid item xs={4}>
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
          </Grid><Grid item xs={4}>
            <Typography>igst:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="isTransfered"
              type='text'
              placeholder='igst'
              value={formData.igst}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>quotationNo:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="quotationNo"
              type='text'
              placeholder='quotationNo'
              value={formData.quotationNo}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>insertedOn:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="insertedOn"
              type='text'
              placeholder='insertedOn'
              value={formData.insertedOn}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>lastUpdatedOn:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="lastUpdatedOn"
              type='text'
              placeholder='lastUpdatedOn'
              value={formData.lastUpdatedOn}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>insertedByUserId:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="insertedByUserId"
              type='text'
              placeholder='insertedByUserId'
              value={formData.insertedByUserId}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>lastUpdatedByUserId:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="lastUpdatedByUserId"
              type='text'
              placeholder='lastUpdatedByUserId'
              value={formData.lastUpdatedByUserId}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>orderTypeTextListId:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="orderTypeTextListId"
              type='text'
              placeholder='orderTypeTextListId'
              value={formData.orderTypeTextListId}
              onChange={handleInputChange}
            />
          </Grid><Grid item xs={4}>
            <Typography>quotationId:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="quotationId"
              type='text'
              placeholder='quotationId'
              value={formData.quotationId}
              onChange={handleInputChange}
            />
          </Grid>

          
          
          <Grid item xs={4}>
            <Typography>quotationId:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="quotationId"
              type='text'
              placeholder='quotationId'
              value={formData.quotationId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>isStatutoryRegulatory:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="isStatutoryRegulatory"
              type='text'
              placeholder='isStatutoryRegulatory'
              value={formData.isStatutoryRegulatory}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>isStRGRemarks:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="isStRGRemarks"
              type='text'
              placeholder='isStRGRemarks'
              value={formData.isStRGRemarks}
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
