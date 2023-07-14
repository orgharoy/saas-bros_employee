import React from 'react'

const AboutBusiness = ({formValues, setFormValues, errorMessage}) => {
  return (
    <div className="w-full">
        <h1 className='text-2xl mb-5'>About Your Business</h1>
        <div className="grid grid-cols-4">

          <div className="col-span-1 mb-5">
            <label htmlFor="businessName">Business Name:</label>
          </div>
          <div className="col-span-3 mb-5">
            <input type="text" name="businessName" id="businessName" value={formValues.businessName} onChange={(e) => setFormValues({...formValues, businessName:e.target.value})} className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"/>
            {errorMessage.businessName && <p className="text-red text-left">{errorMessage.businessName}</p>}
          </div>

          <div className="col-span-1 mb-5">
            <label htmlFor="businessDescription">Description of Business: </label>
          </div>
          <div className="col-span-3 mb-5">
            <textarea id="businessDescription" rows="4" value={formValues.businessDescription} onChange={(e) => setFormValues({...formValues, businessDescription:e.target.value})} className="w-full p-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"></textarea>
          </div>

          <div className="col-span-1 mb-5">
            <label htmlFor="businessEmail">Business Email:</label>
          </div>
          <div className="col-span-3 mb-5">
            <input type="email" name="businessEmail" id="businessEmail" value={formValues.businessEmail} onChange={(e) => setFormValues({...formValues, businessEmail:e.target.value})}  className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"/>
            {errorMessage.businessEmail && <p className="text-red text-left">{errorMessage.businessEmail}</p>}
          </div>

          <div className="col-span-1 mb-5">
            <label htmlFor="businessContactNumber">Business Phone:</label>
          </div>
          <div className="col-span-3 mb-5">
            <input type="tel" name="businessContactNumber" id="businessContactNumber" value={formValues.businessPhone} onChange={(e) => setFormValues({...formValues, businessPhone:e.target.value})}  className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"/>
            {errorMessage.businessPhone && <p className="text-red text-left">{errorMessage.businessPhone}</p>}
          </div>

          <div className="col-span-1 mb-5">
            <label htmlFor="businessAddress1">Business Address:</label>
          </div>
          <div className="col-span-3 mb-5 grid grid-cols-5 gap-1">
            <div className="col-span-5 ">
              <input type="text" name="businessAddress1" id="businessAddress1" value={formValues.businessAddress1} onChange={(e) => setFormValues({...formValues, businessAddress1:e.target.value})} placeholder="Address Line 1" className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"/>
              {errorMessage.businessAddress1 && <p className="text-red text-left">{errorMessage.businessAddress1}</p>}
            </div>
            <div className="col-span-3">
              <input type="text" name="businessAddress2" id="businessAddress2" value={formValues.businessAddress2} onChange={(e) => setFormValues({...formValues, businessAddress2:e.target.value})} placeholder="Address Line 2" className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"/>
              {errorMessage.businessAddress2 && <p className="text-red text-left">{errorMessage.businessAddress2}</p>}
            </div>
            <div className="col-span-2">
              <input type="text" name="businessCity" id="businessCity" value={formValues.businessCity} onChange={(e) => setFormValues({...formValues, businessCity:e.target.value})} placeholder="City" className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"/>
              {errorMessage.businessCity && <p className="text-red text-left">{errorMessage.businessCity}</p>}
            </div>
            <div className="col-span-2">
              <input type="text" name="businessState" id="businessState" value={formValues.businessState} onChange={(e) => setFormValues({...formValues, businessState:e.target.value})} placeholder="State" className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"/>
              {errorMessage.businessState && <p className="text-red text-left">{errorMessage.businessState}</p>}
            </div>
            <div className="col-span-1">
              <input type="text" name="businessZipcode" id="businessZipcode" value={formValues.businessZipcode} onChange={(e) => setFormValues({...formValues, businessZipcode:e.target.value})} placeholder="Zipcode" className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4"/>
              {errorMessage.businessZipcode && <p className="text-red text-left">{errorMessage.businessZipcode}</p>}
            </div>
            <div className="col-span-2">
              <select name="businessCountry" id="businessCountry" value={formValues.businessCountry} onChange={(e) => setFormValues({...formValues, businessCountry:e.target.value})} className="w-full h-8 px-2 text-purple-1 rounded-md border-2 border-purple-9 focus:outline-2 focus:outline-purple-4 focus:border-purple-4">
                <option>Country</option>
                <option value="Malaysia">Malaysia</option>
              </select>
              {errorMessage.businessCountry && <p className="text-red text-left">{errorMessage.businessCountry}</p>}
            </div>
            
          </div>

        </div>
    </div>
  )
}

export default AboutBusiness