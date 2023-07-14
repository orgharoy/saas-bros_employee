import React from 'react'

const AboutMerchant = ({formValues, setFormValues, errorMessage}) => {
  return (
    <div className="w-full">
        <h1 className='text-2xl mb-5'>About Merchant</h1>
        <div className="grid grid-cols-4">

          <div className="col-span-1 mb-5">
            <label htmlFor="businessName">Merchant Name:</label>
          </div>
          <div className="col-span-3 mb-5">
            <input type="text" name="businessName" id="businessName" value={formValues.merchantName} onChange={(e) => setFormValues({...formValues, merchantName:e.target.value})} className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"/>
            {errorMessage.merchantName && <p className="text-red text-left">{errorMessage.merchantName}</p>}
          </div>

          <div className="col-span-1 mb-5">
            <label htmlFor="businessEmail">Merchant Email:</label>
          </div>
          <div className="col-span-3 mb-5">
            <input type="email" name="businessEmail" id="businessEmail" value={formValues.merchantEmail} onChange={(e) => setFormValues({...formValues, merchantEmail:e.target.value})} className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"/>
            {errorMessage.merchantEmail && <p className="text-red text-left">{errorMessage.merchantEmail}</p>}
          </div>

          <div className="col-span-1 mb-5">
            <label htmlFor="businessContactNumber">Merchant Phone:</label>
          </div>
          <div className="col-span-3 mb-5">
            <input type="tel" name="businessContactNumber" id="businessContactNumber" value={formValues.merchantPhone} onChange={(e) => setFormValues({...formValues, merchantPhone:e.target.value})} className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"/>
            {errorMessage.merchantPhone && <p className="text-red text-left">{errorMessage.merchantPhone}</p>}
          </div>

          <div className="col-span-1 mb-5">
            <label htmlFor="businessAddress">Merchant Address:</label>
          </div>
          <div className="col-span-3 mb-5 grid grid-cols-5 gap-1">
            <div className="col-span-5">
              <input type="text" name="merchantAddress" id="merchantAddress1" value={formValues.merchantAddress1} onChange={(e) => setFormValues({...formValues, merchantAddress1:e.target.value})} placeholder="Address Line 1" className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"/>
              {errorMessage.merchantAddress1 && <p className="text-red text-left">{errorMessage.merchantAddress1}</p>}
            </div>
            <div className="col-span-3 ">
              <input type="text" name="merchantAddress" id="merchantAddress2" value={formValues.merchantAddress2} onChange={(e) => setFormValues({...formValues, merchantAddress2:e.target.value})} placeholder="Address Line 2" className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"/>
              {errorMessage.merchantAddress2 && <p className="text-red text-left">{errorMessage.merchantAddress2}</p>}
            </div>
            <div className="col-span-2 ">
              <input type="text" name="merchantAddress" id="merchantCity" value={formValues.merchantCity} onChange={(e) => setFormValues({...formValues, merchantCity:e.target.value})} placeholder="City" className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"/>
              {errorMessage.merchantCity && <p className="text-red text-left">{errorMessage.merchantCity}</p>}
            </div>
            <div className="col-span-2 ">
              <input type="text" name="merchantAddress" id="merchantState" value={formValues.merchantState} onChange={(e) => setFormValues({...formValues, merchantState:e.target.value})} placeholder="State" className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"/>
              {errorMessage.merchantState && <p className="text-red text-left">{errorMessage.merchantState}</p>}
            </div>
            <div className="col-span-1 ">
              <input type="text" name="merchantAddress" id="merchantZipcode" value={formValues.merchantZipcode} onChange={(e) => setFormValues({...formValues, merchantZipcode:e.target.value})} placeholder="Zipcode" className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"/>
              {errorMessage.merchantZipcode && <p className="text-red text-left">{errorMessage.merchantZipcode}</p>}
            </div>
            <div className="col-span-2 ">
              <select name="merchantCountry" id="merchantCountry" value={formValues.merchantCountry} onChange={(e) => setFormValues({...formValues, merchantCountry:e.target.value})} className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4">
                <option>Country</option>
                <option value="Under 10">Malaysia</option>
              </select>
              {errorMessage.merchantCountry && <p className="text-red text-left">{errorMessage.merchantCountry}</p>}
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutMerchant