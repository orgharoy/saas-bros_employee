import React from "react";

const ConfirmNewUser = ({ formValues, setFormValues }) => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-purple-4">Business Details</h1>
        <div className="grid grid-cols-3 mb-5 gap-5">
          <div>
            <h1 className="text-purple-5 font-normal text-sm">Business Name</h1>
            <h1>{formValues.businessName}</h1>
          </div>

          <div className="col-span-2">
            <h1 className="text-purple-5 font-normal text-sm">
              Business Description
            </h1>
            <h1>{formValues.businessDescription}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">
              Business Email
            </h1>
            <h1>{formValues.businessEmail}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">
              Business Phone
            </h1>
            <h1>{"+60" + formValues.businessPhone}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">
              Business Address
            </h1>
            <h1>{formValues.businessAddress1}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">
              Business Address
            </h1>
            <h1>{formValues.businessAddress2}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">
              Business State
            </h1>
            <h1>{formValues.businessState}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">Business Zip</h1>
            <h1>{formValues.businessZipcode}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">
              Business Country
            </h1>
            <h1>{formValues.businessCountry}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">Business Reg</h1>
            <h1>{formValues.businessRegNumber}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">Business Tax</h1>
            <h1>{formValues.businessTaxId}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">
              Business Tyype
            </h1>
            <h1>{formValues.businessType}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">Business Size</h1>
            <h1>{formValues.businessSize}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">
              Business Sales Volumne
            </h1>
            <h1>{formValues.businessSalesVolume}</h1>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-purple-4">Merchant Details</h1>
        <div className="grid grid-cols-3 gap-5">
          <div>
            <h1 className="text-purple-5 font-normal text-sm">Merchant Name</h1>
            <h1>{formValues.merchantName}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">
              Merchant Email
            </h1>
            <h1>{formValues.merchantEmail}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">
              Merchant Email
            </h1>
            <h1>{formValues.merchantEmail}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">
              Merchant Phone
            </h1>
            <h1>{formValues.merchantPhone}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">
              Merchant Address 1
            </h1>
            <h1>{formValues.merchantAddress1}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">
              Merchant Address 2
            </h1>
            <h1>{formValues.merchantAddress2}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">Merchant city</h1>
            <h1>{formValues.merchantCity}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">
              Merchant State
            </h1>
            <h1>{formValues.merchantState}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">
              Merchant Zip Code
            </h1>
            <h1>{formValues.merchantZipcode}</h1>
          </div>

          <div>
            <h1 className="text-purple-5 font-normal text-sm">
              Merchant Country
            </h1>
            <h1>{formValues.merchantCountry}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmNewUser;
