import React, { useState, useContext } from 'react';
import axios from 'axios';

import { UserContext } from '../userContext.js';

const RegisterNewUser = () => {

  const { userId, setUserId } = useContext(UserContext);

  const [formValues, setFormValues] = useState({
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
    salesVolume: "",
    userPwd: "bangladesh1",
    createdBy: userId
  }); 

  const [errorMessage, setErrorMessage] = useState("");

  const validate = (formValues) => {
    /*
    if(formValues.businessName === "" || formValues.businessType === "" || 
      formValues.ownerName === "" || formValues.ownerContactNumber === "" || 
      formValues.businessEmail === "" || formValues.businessContactNumber === "" || 
      formValues.businessAddress === "" || formValues.businessRegNumber === "" || 
      formValues.businessTaxId === "" || formValues.numberOfEmployees === "" || 
      formValues.salesVolumne === ""){
      setErrorMessage("Fill in all fields");
      return false;
    } */
    
    if (formValues.businessName === "") {
      setErrorMessage ("Business name is required");
      return false;
    }else if (!/^[A-Za-z\s]+$/.test(formValues.businessName)) {
      setErrorMessage ("Business name must contain only letters and spaces");
      return false;
    }
    
    if (formValues.businessType === "") {
      setErrorMessage ("Please select Business Type");
      return false;
    }
    
    if (formValues.ownerName === "") {
      setErrorMessage("Owner's name is required");
      return false;
    } else if (!/^[A-Za-z\s]+$/.test(formValues.ownerName)) {
      setErrorMessage("Owner's name must contain only letters and spaces");
      return false;
    } 
  
    if (formValues.ownerContactNumber === "") {
      setErrorMessage("Owner's Contact Number is required");
      return false;
    } else if (!/^\d{10}$/.test(formValues.ownerContactNumber)) {
      setErrorMessage("Owner's contact number must be a 10-digit number");
      return false;
    }

    if (formValues.businessEmail === "") {
      setErrorMessage("Business Email is required");
      return false;
    } else if (!/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(formValues.businessEmail)) {
      setErrorMessage("Enter a valid email address for the business");
      return false;
    }
  
    if (formValues.businessContactNumber === "") {
      setErrorMessage("Business Contact Number is required");
      return false;
    } else if (!/^\d{10}$/.test(formValues.businessContactNumber)) {
      setErrorMessage("Business contact number must be a 10-digit number");
      return false;
    }
  
    if (formValues.businessAddress === "") {
      setErrorMessage("Business Address is required");
      return false;
    } else if (!/^[A-Za-z0-9\s]+$/.test(formValues.businessAddress)) {
      setErrorMessage("Business address must contain only letters, numbers, and spaces");
      return false;
    }
  
    if (formValues.businessRegNumber === "") {
      setErrorMessage("Business registration number is required");
      return false;
    } else if (!/^\d{9}$/.test(formValues.businessRegNumber)) {
      setErrorMessage("Business registration number must be a 9-digit number");
      return false;
    }
  
    if (formValues.businessTaxId === "") {
      setErrorMessage("Business Tax ID is required");
      return false;
    } else if (!/^[A-Za-z0-9\s]+$/.test(formValues.businessTaxId)) {
      setErrorMessage(
        "Business tax ID must contain only letters, numbers, and spaces"
      );
      return false;
    }

    if (formValues.numberOfEmployees === "") {
      setErrorMessage("Please select Employee Count");
      return false;
    }

    if (formValues.salesVolume === "") {
      setErrorMessage("Please select Sales Volume");
      return false;
    }
    
    return true;
  }

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
    setErrorMessage('')
  }

  return (
    <div className=" bg-pink-200 p-5 rounded-md text-center">
      <h1 className="text-left text-2xl mb-5">Register New User </h1>
      {errorMessage && <p className="text-red-500 text-left mb-5">{errorMessage}</p>}
      <form>
        <div className="grid grid-cols-10 gap-x-10">

          <div className="col-span-2 pb-5 text-left">
            <label htmlFor="businessName">Business Name: </label>
          </div>

          <div  className="col-span-3 pb-5">
            <input type="text" name="businessName" id="businessName" value={formValues.businessName} onChange={(e) => setFormValues({...formValues, businessName:e.target.value})} className="w-full"/>
          </div>

          <div className="col-span-2 pb-5 text-left">
            <label htmlFor="businessType">Business Type: </label>
          </div>
          
          <div  className="col-span-3 pb-5">
            <select name="businessType" id="businessType" value={formValues.businessType} onChange={(e) => setFormValues({...formValues, businessType:e.target.value})} className="w-full">
              <option>Select Business Type</option>
              <option value="Partnership">Partnership</option>
              <option value="Private Limited Company">Private Limited Company</option>
              <option value="Public Limited Company">Public Limited Company</option>
              <option value="Unlimited Company">Unlimited Company</option>
              <option value="htmlForeign Company">Foreign Company</option>
              <option value="Limited Liability Partnership">Limited Liability Partnership</option>
            </select>
          </div>

          
{/* this is another row */}

          <div className="col-span-2 pb-5 text-left">
            <label htmlFor="ownerName">Owner's Name:</label>
          </div>

          <div  className="col-span-3 pb-5">
            <input type="text" name="ownerName" id="ownerName" value={formValues.ownerName} onChange={(e) => setFormValues({...formValues, ownerName:e.target.value})} className="w-full"/>
          </div>

          <div className="col-span-2 pb-5 text-left">
            <label htmlFor="ownerContactNumber">Owner's Contact No.:</label>
          </div>
          
          <div  className="col-span-3 pb-5">
            <input type="tel" name="ownerContactNumber" id="ownerContactNumber" value={formValues.ownerContactNumber} onChange={(e) => setFormValues({...formValues, ownerContactNumber:e.target.value})} className="w-full"/>
          </div>

{/* this is another row */}

          <div className="col-span-2 pb-5 text-left">
            <label htmlFor="businessEmail">Business's Email:</label>
          </div>

          <div  className="col-span-3 pb-5">
            <input type="email" name="businessEmail" id="businessEmail" value={formValues.businessEmail} onChange={(e) => setFormValues({...formValues, businessEmail:e.target.value})}  className="w-full"/>
          </div>

          <div className="col-span-2 pb-5 text-left">
            <label htmlFor="businessContactNumber">Business Contact No.:</label>
          </div>
          
          <div  className="col-span-3 pb-5">
            <input type="tel" name="businessContactNumber" id="businessContactNumber" value={formValues.businessContactNumber} onChange={(e) => setFormValues({...formValues, businessContactNumber:e.target.value})} className="w-full"/>
          </div>


{/* this is another row */}

          <div className="col-span-2 pb-5 text-left">
            <label htmlFor="businessAddress">Business Address:</label>
          </div>

          <div  className="col-span-8 pb-5">
            <input type="text" name="businessAddress" id="businessAddress" value={formValues.businessAddress} onChange={(e) => setFormValues({...formValues, businessAddress:e.target.value})} className="w-full"/>
          </div>

          
{/* this is another row */}

          <div className="col-span-2 pb-5 text-left">
            <label htmlFor="businessRegNumber">Business Registration Number:</label>
          </div>

          <div  className="col-span-3 pb-5">
            <input type="text" name="businessRegNumber" id="businessRegNumber" value={formValues.businessRegNumber} onChange={(e) => setFormValues({...formValues, businessRegNumber:e.target.value})} className="w-full"/>
          </div>

          <div className="col-span-2 pb-5 text-left">
            <label htmlFor="businessTaxId">Business Tax ID: </label>
          </div>
          
          <div  className="col-span-3 pb-5">
            <input type="text" name="businessTaxId" id="businessTaxId" value={formValues.businessTaxId} onChange={(e) => setFormValues({...formValues, businessTaxId:e.target.value})} className="w-full"/>
          </div>

{/* this is another row */}

          <div className="col-span-2 pb-5 text-left">
            <label htmlFor="numberOfEmployees">Number Of Employees:</label>
          </div>

          <div  className="col-span-3 pb-5">
            <select name="numberOfEmployees" id="numberOfEmployees" value={formValues.numberOfEmployees} onChange={(e) => setFormValues({...formValues, numberOfEmployees:e.target.value})} className="w-full">
              <option>Select Employee Count</option>
              <option value="Under 10">Under 10</option>
              <option value="11 - 30">11 - 30</option>
              <option value="31 - 50">31 - 50</option>
              <option value="50 - 100">50 - 100</option>
              <option value="Above 100">Above 100</option>
            </select>
          </div>

          <div className="col-span-2 pb-5 text-left">
            <label htmlFor="salesVolume">Sales Volume (in the past 1 year)</label>
          </div>
          
          <div  className="col-span-3 pb-5">
            <select name="salesVolume" id="salesVolume" value={formValues.salesVolume} onChange={(e) => setFormValues({...formValues, salesVolume:e.target.value})} className="w-full">
              <option>Select Sales Volume</option>
              <option value="Below RM 100,000">Below RM 100,000</option>
              <option value="RM 100,001 - RM 500,000">RM 100,001 - RM 500,000</option>
              <option value="RM 500,001 - RM 1,000,000">RM 500,001 - RM 1,000,000</option>
              <option value="Above RM 1,000,000">Above RM 1,000,000</option>
            </select>
          </div>

        </div>

        <button onClick={handleSubmit} className="bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-white hover:text-purple-600 mx-3">Create Business</button>
        <button onClick={cancelButton} className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-white hover:text-red-600 mx-3">Clear All</button>
      </form>
    </div>
  )
}

export default RegisterNewUser