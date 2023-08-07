import React, { useState, useContext } from "react";
import axios from "axios";

import AboutBusiness from "../components/RegisterNewUser/AboutBusiness.js";
import AboutMerchant from "../components/RegisterNewUser/AboutMerchant.js";
import BusinessDetails from "../components/RegisterNewUser/BusinessDetails.js";
import ConfirmNewUser from "../components/RegisterNewUser/ConfirmNewUser.js";

import { UserContext } from "../userContext.js";

const RegisterNewUser = ({ setModal, setNewMerchant }) => {
  const [page, setPage] = useState(1);

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
    businessType: "",
    businessSize: "",
    businessSalesVolume: "",

    merchantName: "",
    merchantEmail: "",
    merchantPhone: "",
    merchantAddress1: "",
    merchantAddress2: "",
    merchantCity: "",
    merchantState: "",
    merchantZipcode: "",
    merchantCountry: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    businessName: "",
    businessDescription: "",
    businessEmail: "",
    businessPhone: "",
    countryCode: "",
    businessAddress1: "",
    businessAddress2: "",
    businessCity: "",
    businessState: "",
    businessZipcode: "",
    businessCountry: "",
    businessRegNumber: "",
    businessTaxId: "",
    businessType: "",
    businessSize: "",
    businessSalesVolume: "",

    merchantName: "",
    merchantEmail: "",
    merchantPhone: "",
    merchantAddress1: "",
    merchantAddress2: "",
    merchantCity: "",
    merchantState: "",
    merchantZipcode: "",
    merchantCountry: "",
  });

  const validate = () => {
    let errors = {
      businessName: "",
      businessDescription: "",
      businessEmail: "",
      businessPhone: "",
      countryCode: "",
      businessAddress1: "",
      businessAddress2: "",
      businessCity: "",
      businessState: "",
      businessZipcode: "",
      businessCountry: "",
      businessRegNumber: "",
      businessTaxId: "",
      businessType: "",
      businessSize: "",
      businessSalesVolume: "",
      merchantName: "",
      merchantEmail: "",
      merchantPhone: "",
      merchantAddress1: "",
      merchantAddress2: "",
      merchantCity: "",
      merchantState: "",
      merchantZipcode: "",
      merchantCountry: "",
    };

    let isValid = true;

    if (page === 1) {
      if (!formValues.businessName || formValues.businessName === "") {
        errors.businessName = "Business name is required";
        isValid = false;
      }

      if (!formValues.businessEmail || formValues.businessEmail === "") {
        errors.businessEmail = "Business emailis required";
        isValid = false;
      } else if (
        !formValues.businessEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      ) {
        errors.businessEmail = "Invalid email address";
        isValid = false;
      }

      if (!formValues.businessPhone) {
        errors.businessPhone = "Business contact number is required";
        isValid = false;
      } else if (!formValues.businessPhone.match(/[0-9]+$/)) {
        errors.businessPhone =
          "Invalid contact number. Please enter only numbers";
        isValid = false;
      } else if (!formValues.businessPhone.match(/^\+?[0-9]{9,10}$/)) {
        errors.businessPhone =
          "Invalid contact number. Enter 9 or 10 digits of number";
        isValid = false;
      }

      if (!formValues.businessAddress1) {
        errors.businessAddress1 = "Business Address is required";
        isValid = false;
      }

      /*
      if (!formValues.businessAddress2) {
        errors.businessAddress2 = "Business Address is required";
        isValid = false;
      } */

      if (!formValues.businessCity) {
        errors.businessCity = "Business Address is required";
        isValid = false;
      }

      if (!formValues.businessState) {
        errors.businessState = "Business Address is required";
        isValid = false;
      }

      if (!formValues.businessZipcode) {
        errors.businessZipcode = "Zipcode is required in Business Address";
        isValid = false;
      } else if (!formValues.businessZipcode.match(/[0-9]+$/)) {
        errors.businessZipcode = "Please enter only numbers";
        isValid = false;
      }

      if (!formValues.businessCountry) {
        errors.businessCountry = "Business Address is required";
        isValid = false;
      }
    }

    if (page === 2) {
      if (!formValues.businessRegNumber) {
        errors.businessRegNumber = "Business Registration Number is required";
        isValid = false;
      } else if (!formValues.businessRegNumber.match(/[0-9]+$/)) {
        errors.businessRegNumber = "Please enter only numbers";
        isValid = false;
      }

      if (!formValues.businessTaxId) {
        errors.businessTaxId = "Business TAX ID is required";
        isValid = false;
      } else if (!formValues.businessTaxId.match(/[0-9]+$/)) {
        errors.businessTaxId = "Please enter only numbers";
        isValid = false;
      }

      if (!formValues.businessType) {
        errors.businessType = "Business Type is required";
        isValid = false;
      }

      if (!formValues.businessSize) {
        errors.businessSize = "Business Size is required";
        isValid = false;
      }

      if (!formValues.businessSalesVolume) {
        errors.businessSalesVolume = "Business Sales Volume is required";
        isValid = false;
      }
    }

    if (page === 3) {
      if (!formValues.merchantName) {
        errors.merchantName = "Merchant Name is required";
        isValid = false;
      }

      if (!formValues.merchantEmail) {
        errors.merchantEmail = "Merchant Email is required";
        isValid = false;
      }

      if (!formValues.merchantPhone) {
        errors.merchantPhone = "Merchant Phone is required";
        isValid = false;
      }

      if (!formValues.merchantAddress1) {
        errors.merchantAddress1 = "Merchant Address is required";
        isValid = false;
      }

      if (!formValues.merchantAddress2) {
        errors.merchantAddress2 = "Merchant Address is required";
        isValid = false;
      }

      if (!formValues.merchantCity) {
        errors.merchantCity = "Merchant Address is required";
        isValid = false;
      }

      if (!formValues.merchantState) {
        errors.merchantState = "Merchant Address is required";
        isValid = false;
      }

      if (!formValues.merchantZipcode) {
        errors.merchantZipcode = "Merchant Address is required";
        isValid = false;
      }

      if (!formValues.merchantCountry) {
        errors.merchantCountry = "Merchant Address is required";
        isValid = false;
      }
    }

    setErrorMessage(errors);

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setModal(true);

    const token = localStorage.getItem("RepeatifyToken");

    try {
      const response = await axios.post(
        "https://saasproj.bsite.net/api/admin/create-merchant",
        formValues,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const merchantID = response.data.merchantId;

      console.log(merchantID);

      setNewMerchant(merchantID);
    } catch (error) {
      console.log(error);
    }
  };

  //////////////////////////////////////////////////////

  const FormDisplay = () => {
    if (page === 1) {
      return (
        <AboutBusiness
          formValues={formValues}
          setFormValues={setFormValues}
          errorMessage={errorMessage}
        />
      );
    } else if (page === 2) {
      return (
        <BusinessDetails
          formValues={formValues}
          setFormValues={setFormValues}
          errorMessage={errorMessage}
        />
      );
    } else if (page === 3) {
      return (
        <AboutMerchant
          formValues={formValues}
          setFormValues={setFormValues}
          errorMessage={errorMessage}
        />
      );
    } else if (page === 4) {
      return (
        <ConfirmNewUser formValues={formValues} setFormValues={setFormValues} />
      );
    } else {
      return <h1>There was an Error {page}</h1>;
    }
  };

  const nextPage = () => {
    if (validate() === true) {
      setPage(page + 1);
    } else {
      return;
    }
  };

  const ForwardButton = () => {
    if (page === 1 || page === 2 || page === 3) {
      return (
        <div
          className="button button-green"
          onClick={nextPage}
        >
          <h1>Next</h1>
        </div>
      );
    } else if (page === 4) {
      return;
    } else {
      return (
        <div className="button button-purple">
          <p>Fuckity Fuck</p>
        </div>
      );
    }
  };

  const BackButton = () => {
    if (page === 1) {
      return;
    } else if (page === 2 || page === 3 || page === 4) {
      return (
        <div
          className="button button-purple"
          onClick={() => {
            setPage((page) => page - 1);
          }}
        >
          <p>Back</p>
        </div>
      );
    } else {
      return (
        <div className="bg-purple-6 text-white p-2 rounded mx-2 cursor-pointer">
          <p>Fuckity Fuck</p>
        </div>
      );
    }
  };

  const ConfirmButton = () => {
    if (page === 1 || page === 2 || page === 3) {
      return;
    } else if (page === 4) {
      return (
        <div
          className="bg-purple-1 text-white p-2 rounded mx-2 cursor-pointer"
          onClick={handleSubmit}
        >
          <p>Create User</p>
        </div>
      );
    } else {
      return (
        <div className="bg-purple-6 text-white p-2 rounded mx-2 cursor-pointer">
          <p>Fuckity Fuck</p>
        </div>
      );
    }
  };

  return (
    <div className="border border-purple-9 rounded-md p-5 flex flex-col items-center">
      <div className="w-2/4">
        <div className="grid grid-cols-3">
          <div className="flex items-center">
            <div className="relative w-6 aspect-square bg-purple-3 rounded-full text-white flex items-center justify-center z-30 text-sm">
              <p>1</p>
            </div>
            <div
              className={`w-11/12 h-1 ${
                page === 1 ? "bg-purple-9" : "bg-purple-3"
              } rounded-md`}
            ></div>
          </div>
          <div className="flex items-center">
            <div
              className={`relative w-6 aspect-square ${
                page === 1 ? "bg-purple-9" : "bg-purple-3"
              } rounded-full text-white flex items-center justify-center z-30 text-sm`}
            >
              <p>2</p>
            </div>
            <div
              className={`w-11/12 h-1 ${
                page === 1 || page === 2 ? "bg-purple-9" : "bg-purple-3"
              } rounded-md`}
            ></div>
          </div>
          <div className="flex items-center">
            <div
              className={`relative w-6 aspect-square ${
                page === 1 || page === 2 ? "bg-purple-9" : "bg-purple-3"
              } rounded-full text-white flex items-center justify-center z-30 text-sm`}
            >
              <p>3</p>
            </div>
            <div
              className={`w-11/12 h-1 ${
                page === 1 || page === 2 || page === 3
                  ? "bg-purple-9"
                  : "bg-purple-3"
              } rounded-md`}
            ></div>
            <div
              className={`relative w-6 aspect-square ${
                page === 1 || page === 2 || page === 3
                  ? "bg-purple-9"
                  : "bg-purple-3"
              } rounded-full text-white flex items-center justify-center z-30 text-sm`}
            >
              <p>L</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">{FormDisplay()}</div>

      <div className="flex justify-center">
        {BackButton()}
        {ForwardButton()}
        {ConfirmButton()}
      </div>
    </div>
  );
};

export default RegisterNewUser;
