import React from 'react'

const AboutBusiness = ({formValues, setFormValues}) => {
  return (
    <div className="w-full">
        <h1 className='text-2xl mb-5'>About Your Business</h1>
        <div className="grid grid-cols-4">

          <div className="col-span-1 mb-5">
            <label htmlFor="businessName">Business Name:</label>
          </div>
          <div className="col-span-3 mb-5">
            <input type="text" name="businessName" id="businessName" value={formValues.businessName} onChange={(e) => setFormValues({...formValues, businessName:e.target.value})} className="w-full border border-purple-9 rounded-sm"/>
          </div>


          <div className="col-span-1 mb-5">
            <label htmlFor="businessDescription">Description of Business: </label>
          </div>
          <div className="col-span-3 mb-5">
            <textarea id="businessDescription" rows="4" class="w-full border border-purple-9 rounded-sm" placeholder="Write your thoughts here..." value={formValues.businessDescription} onChange={(e) => setFormValues({...formValues, businessDescription:e.target.value})}></textarea>
          </div>

          <div className="col-span-1 mb-5">
            <label htmlFor="businessEmail">Business Email:</label>
          </div>
          <div className="col-span-3 mb-5">
            <input type="email" name="businessEmail" id="businessEmail" value={formValues.businessEmail} onChange={(e) => setFormValues({...formValues, businessEmail:e.target.value})}  className="w-full border border-purple-9 rounded-sm"/>
          </div>

          <div className="col-span-1 mb-5">
            <label htmlFor="businessContactNumber">Business Phone:</label>
          </div>
          <div className="col-span-3 mb-5">
            <input type="tel" name="businessContactNumber" id="businessContactNumber" value={formValues.businessPhone} onChange={(e) => setFormValues({...formValues, businessPhone:e.target.value})}  className="w-full border border-purple-9 rounded-sm"/>
          </div>

          <div className="col-span-1 mb-5">
            <label htmlFor="businessAddress1">Business Address:</label>
          </div>
          <div className="col-span-3 mb-5 grid grid-cols-5 gap-1">
            <input type="text" name="businessAddress1" id="businessAddress1" value={formValues.businessAddress1} onChange={(e) => setFormValues({...formValues, businessAddress1:e.target.value})}  className="w-full border border-purple-9 rounded-sm col-span-5" placeholder="Address Line 1"/>
            <input type="text" name="businessAddress2" id="businessAddress2" value={formValues.businessAddress2} onChange={(e) => setFormValues({...formValues, businessAddress2:e.target.value})}  className="w-full border border-purple-9 rounded-sm col-span-3" placeholder="Address Line 2"/>
            <input type="text" name="businessCity" id="businessCity" value={formValues.businessCity} onChange={(e) => setFormValues({...formValues, businessCity:e.target.value})}  className="w-full border border-purple-9 rounded-sm col-span-2" placeholder="City"/>
            <input type="text" name="businessState" id="businessState" value={formValues.businessState} onChange={(e) => setFormValues({...formValues, businessState:e.target.value})}  className="w-full border border-purple-9 rounded-sm col-span-2" placeholder="State"/>
            <input type="text" name="businessZipcode" id="businessZipcode" value={formValues.businessZipcode} onChange={(e) => setFormValues({...formValues, businessZipcode:e.target.value})}  className="w-full border border-purple-9 rounded-sm col-span-1" placeholder="Zipcode"/>
            <select name="businessCountry" id="businessCountry" value={formValues.businessCountry} onChange={(e) => setFormValues({...formValues, businessCountry:e.target.value})} className="w-full col-span-2">
              <option>Country</option>
              <option value="Malaysia">Malaysia</option>
            </select>
          </div>

        </div>
    </div>
  )
}

export default AboutBusiness