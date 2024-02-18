import {Routes , Route } from "react-router-dom";
// import {Form2} from '../form/form2'
import {SalesInquiry} from '../formPage/salesInquiryForm/salesinquiry'
import {Quotation} from '../formPage/quotationId/quotationId'
import {OfmId} from '../formPage/ofmId/ofmId'
import {OfmCommunication} from '../formPage/ofmcommunication/ofmcommunication'
import {Customer} from '../editPage/customer/customer';

 
const AllRoute = () => {
  return (
    <Routes>
      <Route path="/SalesInquiry" element={<SalesInquiry/>} />
      <Route path="/Quotation" element={<Quotation/>} />
      <Route path="/OfmId" element={<OfmId/>} />
      <Route path="/OfmCommunication" element={<OfmCommunication/>}/>      
      <Route path="/Customer" element={<Customer/>}/>
    </Routes>
  );
};

export default AllRoute;

