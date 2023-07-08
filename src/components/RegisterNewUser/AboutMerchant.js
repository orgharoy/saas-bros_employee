import React from 'react'

const AboutMerchant = ({formValues, setFormValues}) => {
  return (
    <div>
        <h1 className='text-2xl mb-5'>About Merchant</h1>
        <div className="grid grid-cols-4">

          <div className="col-span-1 mb-5">
            <label htmlFor="businessName">Merchant Name:</label>
          </div>
          <div className="col-span-3 mb-5">
            <input type="text" name="businessName" id="businessName" value={formValues.merchantName} onChange={(e) => setFormValues({...formValues, merchantName:e.target.value})} className="w-full border border-purple-9 rounded-sm"/>
          </div>

          <div className="col-span-1 mb-5">
            <label htmlFor="businessEmail">Merchant Email:</label>
          </div>
          <div className="col-span-3 mb-5">
            <input type="email" name="businessEmail" id="businessEmail" value={formValues.merchantEmail} onChange={(e) => setFormValues({...formValues, merchantEmail:e.target.value})} className="w-full border border-purple-9 rounded-sm"/>
          </div>

          <div className="col-span-1 mb-5">
            <label htmlFor="businessContactNumber">Merchant Phone:</label>
          </div>
          <div className="col-span-3 mb-5">
            <input type="tel" name="businessContactNumber" id="businessContactNumber" value={formValues.merchantPhone} onChange={(e) => setFormValues({...formValues, merchantPhone:e.target.value})} className="w-full border border-purple-9 rounded-sm"/>
          </div>

          <div className="col-span-1 mb-5">
            <label htmlFor="businessAddress">Merchant Address:</label>
          </div>
          <div className="col-span-3 mb-5 grid grid-cols-5 gap-1">
            <input type="text" name="businessAddress" id="merchantAddress1" value={formValues.merchantAddress1} onChange={(e) => setFormValues({...formValues, merchantAddress1:e.target.value})}  className="w-full border border-purple-9 rounded-sm col-span-5" placeholder="Address Line 1"/>
            <input type="text" name="businessAddress" id="merchantAddress2" value={formValues.merchantAddress2} onChange={(e) => setFormValues({...formValues, merchantAddress2:e.target.value})}  className="w-full border border-purple-9 rounded-sm col-span-3" placeholder="Address Line 2"/>
            <input type="text" name="businessAddress" id="merchantCity" value={formValues.merchantCity} onChange={(e) => setFormValues({...formValues, merchantCity:e.target.value})}  className="w-full border border-purple-9 rounded-sm col-span-2" placeholder="City"/>
            <input type="text" name="businessAddress" id="merchantState" value={formValues.merchantState} onChange={(e) => setFormValues({...formValues, merchantState:e.target.value})}  className="w-full border border-purple-9 rounded-sm col-span-2" placeholder="State"/>
            <input type="text" name="businessAddress" id="merchantZipcode" value={formValues.merchantZipcode} onChange={(e) => setFormValues({...formValues, merchantZipcode:e.target.value})}  className="w-full border border-purple-9 rounded-sm col-span-1" placeholder="Zipcode"/>
            <select name="numberOfEmployees" id="merchantCountry" value={formValues.merchantCountry} onChange={(e) => setFormValues({...formValues, merchantCountry:e.target.value})} className="w-full col-span-2">
              <option>Country</option>
              <option value="Under 10">Malaysia</option>
            </select>
          </div>

        </div>
    </div>
  )
}

export default AboutMerchant