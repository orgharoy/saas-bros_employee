import React from 'react'

const BusinessDetails = ({formValues, setFormValues}) => {
  return (
    <div className="w-full">
        <h1 className='text-2xl mb-5'>Business Details</h1>
        <div className="grid grid-cols-4">

          <div className="col-span-1 mb-5">
            <label htmlFor="businessRegNumber">Business Registration Number:</label>
          </div>
          <div className="col-span-3 mb-5">
            <input type="text" name="businessRegNumber" id="businessRegNumber" value={formValues.businessRegNumber} onChange={(e) => setFormValues({...formValues, businessRegNumber:e.target.value})} className="w-full border border-purple-9 rounded-sm"/>
          </div>

          <div className="col-span-1 mb-5">
            <label htmlFor="businessTaxId">Business Tax ID:</label>
          </div>
          <div className="col-span-3 mb-5">
            <input type="text" name="businessTaxId" id="businessTaxId" value={formValues.businessTaxId} onChange={(e) => setFormValues({...formValues, businessTaxId:e.target.value})} className="w-full border border-purple-9 rounded-sm"/>
          </div>

          <div className="col-span-1">
            <label htmlFor="businessName">Company Type: </label>
          </div>
          <div className="col-span-3 flex flex-col items-start">
            
            <div className="flex items-center">
              <input type="radio" value="Partnership" id="businessTypePartnership" name="business-type"/>
              <label htmlFor="businessTypePartnership" className="pl-3">Partnership</label>
            </div>
            <div className="flex items-center">
              <input type="radio" value="Private Limited Company" id="businessTypePrivateLC" name="business-type" />
              <label htmlFor="businessTypePrivateLC" className="pl-3">Private Limited Company</label>
            </div>
            <div className="flex items-center">
              <input type="radio" value="Public Limited Company" id="businessTypePublicLC" name="business-type" />
              <label htmlFor="businessTypePublicLC" className="pl-3">Public Limited Company</label>
            </div>
            <div className="flex items-center">
              <input type="radio" value="Unlimited Company" id="businessTypeUC" name="business-type" />
              <label htmlFor="businessTypeUC" className="pl-3">Unlimited Company</label>
            </div>
            <div className="flex items-center">
              <input type="radio" value="Foreign Company" id="businessTypeFC" name="business-type" />
              <label htmlFor="businessTypeFC" className="pl-3">Foreign Company</label>
            </div>
            <div className="flex items-center">
              <input type="radio" value="Limited Liability Partnership" id="businessTypeLLC" name="business-type" />
              <label htmlFor="businessTypeLLC" className="pl-3">Limited Liability Partnership</label>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BusinessDetails