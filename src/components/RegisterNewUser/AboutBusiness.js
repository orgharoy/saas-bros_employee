import React from 'react'

const AboutBusiness = ({formValues, setFormValues}) => {
  return (
    <div className="w-full">
        <h1>About Your Business</h1>
        <div className="grid grid-cols-4">

          <div className="col-span-1">
            <label htmlFor="businessName">Business Name:</label>
          </div>
          <div className="col-span-3">
            <input type="text" name="businessName" id="businessName" value={formValues.businessName} onChange={(e) => setFormValues({...formValues, businessName:e.target.value})} className="w-full border border-purple-9 rounded-sm"/>
          </div>


          <div className="col-span-1">
            <label htmlFor="businessDescription">Description of Business: </label>
          </div>
          <div className="col-span-3">
            <textarea id="businessDescription" rows="4" class="w-full border border-purple-9 rounded-sm" placeholder="Write your thoughts here..."></textarea>
          </div>


          <div className="col-span-1">
            <label htmlFor="businessName">Company Type: </label>
          </div>
          <div className="col-span-3">
            <h1>World</h1>
          </div>

        </div>
    </div>
  )
}

export default AboutBusiness