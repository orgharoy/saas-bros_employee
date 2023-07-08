import React from 'react'

const ConfirmNewUser = ({formValues, setFormValues}) => {
  return (
    <div>
        <h1 className="pt-2 text-purple-5">About Business Name</h1>
        <h1>{formValues.businessName}</h1>

        <h1 className="pt-2 text-purple-5">About Business Description</h1>
        <h1>{formValues.businessDescription}</h1>

        <h1 className="pt-2 text-purple-5">About Business Email</h1>
        <h1>{formValues.businessEmail}</h1>

        <h1 className="pt-2 text-purple-5">About Business Address</h1>
        <h1>{formValues.businessAddress1}</h1>

        <h1 className="pt-2 text-purple-5">About Business Address</h1>
        <h1>{formValues.businessAddress2}</h1>

        <h1 className="pt-2 text-purple-5">About Business State</h1>
        <h1>{formValues.businessState}</h1>

        <h1 className="pt-2 text-purple-5">About Business Zip</h1>
        <h1>{formValues.businessZipcode}</h1>

        <h1 className="pt-2 text-purple-5">About Business Country</h1>
        <h1>{formValues.businessCountry}</h1>

        <h1 className="pt-2 text-purple-5">About Business Reg</h1>
        <h1>{formValues.businessRegNumber}</h1>

        <h1 className="pt-2 text-purple-5">About Business Tax</h1>
        <h1>{formValues.businessTaxId}</h1>

        <h1 className="pt-2 text-purple-5">About Business Tyype</h1>
        <h1>{formValues.businessType}</h1>

        <h1 className="pt-2 text-purple-5">About Business Size</h1>
        <h1>{formValues.businessSize}</h1>

        <h1 className="pt-2 text-purple-5">About Business Sales Volumne</h1>
        <h1>{formValues.businessSalesVolume}</h1>

        <h1 className="pt-2 text-purple-5">About Merchant Name</h1>
        <h1>{formValues.merchantName}</h1>

        <h1 className="pt-2 text-purple-5">About Merchant Email</h1>
        <h1>{formValues.merchantEmail}</h1>

        <h1 className="pt-2 text-purple-5">About Merchant Phone</h1>
        <h1>{formValues.merchantPhone}</h1>

        <h1 className="pt-2 text-purple-5">About Merchant Address 1</h1>
        <h1>{formValues.merchantAddress1}</h1>

        <h1 className="pt-2 text-purple-5">About Merchant Address 2</h1>
        <h1>{formValues.merchantAddress2}</h1>

        <h1 className="pt-2 text-purple-5">About Merchant city</h1>
        <h1>{formValues.merchantCity}</h1>

        <h1 className="pt-2 text-purple-5">About Merchant State</h1>
        <h1>{formValues.merchantState}</h1>

        <h1 className="pt-2 text-purple-5">About Merchant Zip Code</h1>
        <h1>{formValues.merchantZipcode}</h1>

        <h1 className="pt-2 text-purple-5">About Merchatn Countryy</h1>
        <h1>{formValues.merchantCountry}</h1>
    </div>
  )
}

export default ConfirmNewUser