import React, { useState, useContext } from 'react';
import axios from 'axios';

import AboutBusiness from '../components/RegisterNewUser/AboutBusiness.js';
import AboutMerchant from '../components/RegisterNewUser/AboutMerchant.js';
import BusinessDetails from '../components/RegisterNewUser/BusinessDetails.js';
import ConfirmNewUser from '../components/RegisterNewUser/ConfirmNewUser.js';

import { UserContext } from '../userContext.js';


const RegisterNewUser = () => {
  const [page, setPage] = useState(1);

  const { userId, setUserId } = useContext(UserContext);

  const [formValues, setFormValues] = useState({
    businessName: "",
    businessDescription: "",
    businessEmail: "",
    businessPhone: "",
    businessAddress1: "",
    businessAddress2: "",
    businessCity: "",
    businessState: "",
    businessZipcode: "",
    businessCountry: "",
    businessRegNumber: "",
    businessTaxId: "",
    businessType: "Partnership",
    businessSize: "Under 10",
    businessSalesVolume: "Below RM 100k",

    merchantName: "",
    merchantEmail: "",
    merchantPhone: "",
    merchantAddress1: "",
    merchantAddress2: "",
    merchantCity: "",
    merchantState: "",
    merchantZipcode: "",
    merchantCountry: ""
  }); 

  const [errorMessage, setErrorMessage] = useState({
    businessName: "",
    businessType: "",
    ownerName: "",
    ownerContactNumber: "",
    businessEmail: "",
    businessContactNumber: "",
    businessAddress: "",
    businessRegNumber: "",
    businessTaxId: "",
    numberOfEmployees: "",
    salesVolume: ""
  });

  const validate = (formValues) => {
    let errors = {
      businessName: "",
      businessType: "",
      ownerName: "",
      ownerContactNumber: "",
      businessEmail: "",
      businessContactNumber: "",
      businessAddress: "",
      businessRegNumber: "",
      businessTaxId: "",
      numberOfEmployees: "",
      salesVolume: ""
    };

    let validate = true;

    if (!formValues.businessName) {
      errors.businessName = "Business name is required";
      validate = false;
    }

    if (!formValues.businessType) {
      errors.businessType = "Please select business type";
      validate = false;
    }

    if (!formValues.ownerName) {
      errors.ownerName = "Owner name is required";
      validate = false;
    }

    if (!formValues.ownerContactNumber) {
      errors.ownerContactNumber = "Owner contact number is required";
      validate = false;
    } else if (!formValues.ownerContactNumber.match(/[0-9]+$/)) {
      errors.ownerContactNumber = "Invalid contact number. Please enter only numbers";
      validate = false;
    } else if (!formValues.ownerContactNumber.match(/^\+?60[0-9]+$/)) {
      errors.ownerContactNumber = "Invalid contact number. Please enter a valid contact number starting with the country code '+60' ";
      validate = false;
    }

    if (!formValues.businessEmail) {
      errors.businessEmail = "Business emailis required";
      validate = false;
    } else if (!formValues.businessEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.businessEmail = "Invalid email address";
      validate = false;
    }

    if (!formValues.businessContactNumber) {
      errors.businessContactNumber = "Business contact number is required";
      validate = false;
    } else if (!formValues.businessContactNumber.match(/[0-9]+$/)) {
      errors.businessContactNumber = "Invalid contact number. Please enter only numbers";
      validate = false;
    } else if (!formValues.businessContactNumber.match(/^\+?60[0-9]+$/)) {
      errors.businessContactNumber = "Invalid contact number. Please enter a valid contact number starting with the country code '+60' ";
      validate = false;
    }

    if (!formValues.businessAddress) {
      errors.businessAddress = "Business address is required";
      validate = false;
    }

    if (!formValues.businessRegNumber) {
      errors.businessRegNumber = "Business registration number is required";
      validate = false;
    } else if (!formValues.businessRegNumber.match(/[0-9]+$/)) {
      errors.businessRegNumber = "Please enter only numbers";
      validate = false;
    }

    if (!formValues.businessTaxId) {
      errors.businessTaxId = "Business tax ID is required";
      validate = false;
    }

    if (!formValues.numberOfEmployees) {
      errors.numberOfEmployees = "Please select employee count";
      validate = false;
    }

    if (!formValues.salesVolume) {
      errors.salesVolume = "Please select sales volume";
      validate = false;
    }

    setErrorMessage(errors);
    return validate;
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    if(validate(formValues) === true){

      try {
        const response = await axios.post('http://localhost:3001/emp/create-merchant', formValues);
        console.log(response);
      } catch (error) {
        console.error(error);
      }

    } else {
      console.log(errorMessage);
    }
  }


  const cancelButton = (e) => {
    e.preventDefault();
    setFormValues({businessName: "", businessType: "", ownerName: "", ownerContactNumber: "", businessEmail: "", businessContactNumber: "", businessAddress: "", businessRegNumber: "", businessTaxId: "", numberOfEmployees: "", salesVolume: ""})
    setErrorMessage("");
  }

//////////////////////////////////////////////////////

  const FormDisplay = () => {
    if(page === 1){
      return(<AboutBusiness formValues={formValues} setFormValues={setFormValues} />)
    } else if(page === 2){
      return(<BusinessDetails formValues={formValues} setFormValues={setFormValues} />)
    } else if(page === 3){
      return(<AboutMerchant  formValues={formValues} setFormValues={setFormValues} />)
    } else if(page === 4){
      return(<ConfirmNewUser  formValues={formValues} setFormValues={setFormValues} />)
    } else {
      return (<h1>There was an Error {page}</h1>)
    }
  };

  const ForwardButton = () => {
    if(page === 1 || page === 2 || page=== 3){
      return(
        <div className="bg-green text-white p-2 rounded mx-2 cursor-pointer" onClick={()=>{setPage((page) => page + 1);}}>
          <h1>Next</h1>
        </div>
      )
    }
    else if(page=== 4){
      return;
    } else {
      return(
        <div className="bg-purple-6 text-white p-2 rounded mx-2 cursor-pointer">
          <p>Fuckity Fuck</p>
        </div>
      )
    }
  }

  const BackButton = () => {
    if(page=== 1){
      return;
    }
    else if(page === 2 || page=== 3 || page=== 4){
      return(
        <div className="bg-purple-1 text-white p-2 rounded mx-2 cursor-pointer" onClick={()=>{setPage((page) => page - 1);}}>
          <p>Back</p>
        </div>
      )
    } else {
      return(
        <div className="bg-purple-6 text-white p-2 rounded mx-2 cursor-pointer">
          <p>Fuckity Fuck</p>
        </div>
      )
    }
  }

  const ConfirmButton = () => {
    if(page=== 1 || page === 2 || page=== 3){
      return;
    }
    else if(page === 4){
      return(
        <div className="bg-purple-1 text-white p-2 rounded mx-2 cursor-pointer" onClick={()=>{setPage((page) => page - 1);}}>
          <p>Create User</p>
        </div>
      )
    } else {
      return(
        <div className="bg-purple-6 text-white p-2 rounded mx-2 cursor-pointer">
          <p>Fuckity Fuck</p>
        </div>
      )
    }
  }

  return (
    <div className="border border-purple-9 rounded-md p-5 flex flex-col items-center">
      
      <div className="w-2/4">
        <div className="grid grid-cols-3">
          <div className="flex items-center">
            <div className="relative w-6 aspect-square bg-purple-3 rounded-full text-white flex items-center justify-center z-30 text-sm">
              <p>1</p>
            </div>
            <div className={`w-11/12 h-1 ${page === 1 ? 'bg-purple-9' : 'bg-purple-3'} rounded-md`}></div>
          </div>
          <div className="flex items-center">
            <div className={`relative w-6 aspect-square ${page === 1 ? 'bg-purple-9' : 'bg-purple-3'} rounded-full text-white flex items-center justify-center z-30 text-sm`}>
              <p>2</p>
            </div>
            <div className={`w-11/12 h-1 ${page === 1 || page === 2 ? 'bg-purple-9' : 'bg-purple-3'} rounded-md`}></div>
          </div>
          <div className="flex items-center">
            <div className={`relative w-6 aspect-square ${page === 1 || page === 2 ? 'bg-purple-9' : 'bg-purple-3'} rounded-full text-white flex items-center justify-center z-30 text-sm`}>
              <p>3</p>
            </div>
            <div className={`w-11/12 h-1 ${page === 1 || page === 2 || page === 3 ? 'bg-purple-9' : 'bg-purple-3'} rounded-md`}></div>
            <div className={`relative w-6 aspect-square ${page === 1 || page === 2 || page === 3 ? 'bg-purple-9' : 'bg-purple-3'} rounded-full text-white flex items-center justify-center z-30 text-sm`}>
              <p>L</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        {FormDisplay()}
      </div>

      <div className="flex justify-center">
        {BackButton()}
        {ForwardButton()}
        {ConfirmButton()}
      </div>
    </div>

//     <div className="bg-white p-5 rounded-md text-center text-black">
//       <h1 className="text-left text-2xl mb-5">Register New User </h1>

//       <form>
//         <div className="grid grid-cols-10 gap-x-10">

//           <div className="col-span-2 pb-5 text-left">
//             <label htmlFor="businessName">Business Name: </label>
//           </div>

//           <div  className="col-span-3 pb-5">
//             <input type="text" name="businessName" id="businessName" value={formValues.businessName} onChange={(e) => setFormValues({...formValues, businessName:e.target.value})} className="w-full"/>
//             {errorMessage.businessName && <p className="text-red-500 text-left">{errorMessage.businessName}</p>}
//           </div>

//           <div className="col-span-2 pb-5 text-left">
//             <label htmlFor="businessType">Business Type: </label>
//           </div>
          
//           <div  className="col-span-3 pb-5">
//             <select name="businessType" id="businessType" value={formValues.businessType} onChange={(e) => setFormValues({...formValues, businessType:e.target.value})} className="w-full">
//               <option>Select Business Type</option>
//               <option value="Partnership">Partnership</option>
//               <option value="Private Limited Company">Private Limited Company</option>
//               <option value="Public Limited Company">Public Limited Company</option>
//               <option value="Unlimited Company">Unlimited Company</option>
//               <option value="htmlForeign Company">Foreign Company</option>
//               <option value="Limited Liability Partnership">Limited Liability Partnership</option>
//             </select>
//             {errorMessage.businessType && <p className="text-red-500 text-left">{errorMessage.businessType}</p>}
//           </div>

          
// {/* this is another row */}

//           <div className="col-span-2 pb-5 text-left">
//             <label htmlFor="ownerName">Owner's Name:</label>
//           </div>

//           <div  className="col-span-3 pb-5">
//             <input type="text" name="ownerName" id="ownerName" value={formValues.ownerName} onChange={(e) => setFormValues({...formValues, ownerName:e.target.value})} className="w-full"/>
//             {errorMessage.ownerName && <p className="text-red-500 text-left">{errorMessage.ownerName}</p>}
//           </div>

//           <div className="col-span-2 pb-5 text-left">
//             <label htmlFor="ownerContactNumber">Owner's Contact No.:</label>
//           </div>
          
//           <div  className="col-span-3 pb-5">
//             <input type="tel" name="ownerContactNumber" id="ownerContactNumber" value={formValues.ownerContactNumber} onChange={(e) => setFormValues({...formValues, ownerContactNumber:e.target.value})} className="w-full"/>
//             {errorMessage.ownerContactNumber && <p className="text-red-500 text-left">{errorMessage.ownerContactNumber}</p>}
//           </div>

// {/* this is another row */}

//           <div className="col-span-2 pb-5 text-left">
//             <label htmlFor="businessEmail">Business's Email:</label>
//           </div>

//           <div  className="col-span-3 pb-5">
//             <input type="email" name="businessEmail" id="businessEmail" value={formValues.businessEmail} onChange={(e) => setFormValues({...formValues, businessEmail:e.target.value})}  className="w-full"/>
//             {errorMessage.businessEmail && <p className="text-red-500 text-left">{errorMessage.businessEmail}</p>}
//           </div>

//           <div className="col-span-2 pb-5 text-left">
//             <label htmlFor="businessContactNumber">Business Contact No.:</label>
//           </div>
          
//           <div  className="col-span-3 pb-5">
//             <input type="tel" name="businessContactNumber" id="businessContactNumber" value={formValues.businessContactNumber} onChange={(e) => setFormValues({...formValues, businessContactNumber:e.target.value})} className="w-full"/>
//             {errorMessage.businessContactNumber && <p className="text-red-500 text-left">{errorMessage.businessContactNumber}</p>}
//           </div>


// {/* this is another row */}

//           <div className="col-span-2 pb-5 text-left">
//             <label htmlFor="businessAddress">Business Address:</label>
//           </div>

//           <div  className="col-span-8 pb-5">
//             <input type="text" name="businessAddress" id="businessAddress" value={formValues.businessAddress} onChange={(e) => setFormValues({...formValues, businessAddress:e.target.value})} className="w-full"/>
//             {errorMessage.businessAddress && <p className="text-red-500 text-left">{errorMessage.businessAddress}</p>}
//           </div>

          
// {/* this is another row */}

//           <div className="col-span-2 pb-5 text-left">
//             <label htmlFor="businessRegNumber">Business Registration Number:</label>
//           </div>

//           <div  className="col-span-3 pb-5">
//             <input type="text" name="businessRegNumber" id="businessRegNumber" value={formValues.businessRegNumber} onChange={(e) => setFormValues({...formValues, businessRegNumber:e.target.value})} className="w-full"/>
//             {errorMessage.businessRegNumber && <p className="text-red-500 text-left">{errorMessage.businessRegNumber}</p>}
//           </div>

//           <div className="col-span-2 pb-5 text-left">
//             <label htmlFor="businessTaxId">Business Tax ID: </label>
//           </div>
          
//           <div  className="col-span-3 pb-5">
//             <input type="text" name="businessTaxId" id="businessTaxId" value={formValues.businessTaxId} onChange={(e) => setFormValues({...formValues, businessTaxId:e.target.value})} className="w-full"/>
//             {errorMessage.businessTaxId && <p className="text-red-500 text-left">{errorMessage.businessTaxId}</p>}
//           </div>

// {/* this is another row */}

//           <div className="col-span-2 pb-5 text-left">
//             <label htmlFor="numberOfEmployees">Number Of Employees:</label>
//           </div>

//           <div  className="col-span-3 pb-5">
//             <select name="numberOfEmployees" id="numberOfEmployees" value={formValues.numberOfEmployees} onChange={(e) => setFormValues({...formValues, numberOfEmployees:e.target.value})} className="w-full">
//               <option>Select Employee Count</option>
//               <option value="Under 10">Under 10</option>
//               <option value="11 - 30">11 - 30</option>
//               <option value="31 - 50">31 - 50</option>
//               <option value="50 - 100">50 - 100</option>
//               <option value="Above 100">Above 100</option>
//             </select>
//             {errorMessage.numberOfEmployees && <p className="text-red-500 text-left">{errorMessage.numberOfEmployees}</p>}
//           </div>

//           <div className="col-span-2 pb-5 text-left">
//             <label htmlFor="salesVolume">Sales Volume (in the past 1 year)</label>
//           </div>
          
//           <div  className="col-span-3 pb-5">
//             <select name="salesVolume" id="salesVolume" value={formValues.salesVolume} onChange={(e) => setFormValues({...formValues, salesVolume:e.target.value})} className="w-full">
//               <option>Select Sales Volume</option>
//               <option value="Below RM 100,000">Below RM 100,000</option>
//               <option value="RM 100,001 - RM 500,000">RM 100,001 - RM 500,000</option>
//               <option value="RM 500,001 - RM 1,000,000">RM 500,001 - RM 1,000,000</option>
//               <option value="Above RM 1,000,000">Above RM 1,000,000</option>
//             </select>
//             {errorMessage.salesVolume && <p className="text-red-500 text-left">{errorMessage.salesVolume}</p>}
//           </div>

//         </div>

//         <button onClick={handleSubmit} className="bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-white hover:text-purple-600 mx-3">Create Business</button>
//         <button onClick={cancelButton} className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-white hover:text-red-600 mx-3">Clear All</button>
//       </form>
//     </div>
  )
}

export default RegisterNewUser