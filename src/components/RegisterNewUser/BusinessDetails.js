import React from 'react'

const BusinessDetails = ({formValues, setFormValues}) => {

  const onBusinessTypeChange = e => {
    setFormValues({...formValues, businessType:e.target.value})
  }

  const onBusinessSizeChange = e => {
    setFormValues({...formValues, businessSize:e.target.value})
  }

  const onBusinessSalesVolumeChange = e => {
    setFormValues({...formValues, businessSalesVolume:e.target.value})
  }

  return (
    <div className="w-full">
        <h1 className='text-2xl mb-5'>Business Details</h1>
        <div className="grid grid-cols-4 gap-5">

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
            <label htmlFor="business-type">Company Type: </label>
          </div>
          <div className="col-span-3 flex flex-col items-start">
            
            <div className="flex items-center">
              <input type="radio" value="Partnership" id="businessTypePartnership" name="business-type" checked={formValues.businessType === "Partnership"} onChange={onBusinessTypeChange}/>
              <label htmlFor="businessTypePartnership" className="pl-3">Partnership</label>
            </div>
            <div className="flex items-center">
              <input type="radio" value="Private Limited Company" id="businessTypePrivateLC" name="business-type" checked={formValues.businessType === "Private Limited Company"} onChange={onBusinessTypeChange} />
              <label htmlFor="businessTypePrivateLC" className="pl-3">Private Limited Company</label>
            </div>
            <div className="flex items-center">
              <input type="radio" value="Public Limited Company" id="businessTypePublicLC" name="business-type" checked={formValues.businessType === "Public Limited Company"} onChange={onBusinessTypeChange} />
              <label htmlFor="businessTypePublicLC" className="pl-3">Public Limited Company</label>
            </div>
            <div className="flex items-center">
              <input type="radio" value="Unlimited Company" id="businessTypeUC" name="business-type" checked={formValues.businessType === "Unlimited Company"} onChange={onBusinessTypeChange} />
              <label htmlFor="businessTypeUC" className="pl-3">Unlimited Company</label>
            </div>
            <div className="flex items-center">
              <input type="radio" value="Foreign Company" id="businessTypeFC" name="business-type" checked={formValues.businessType === "Foreign Company"} onChange={onBusinessTypeChange} />
              <label htmlFor="businessTypeFC" className="pl-3">Foreign Company</label>
            </div>
            <div className="flex items-center">
              <input type="radio" value="Limited Liability Partnership" id="businessTypeLLC" name="business-type" checked={formValues.businessType === "Limited Liability Partnership"} onChange={onBusinessTypeChange} />
              <label htmlFor="businessTypeLLC" className="pl-3">Limited Liability Partnership</label>
            </div>
          </div>


          <div className="col-span-1">
            <label htmlFor="business-size">Business Size: </label>
          </div>
          <div className="col-span-3 flex items-center">
            
            <label htmlFor="businessSize1" className="mr-1 border border-purple-8 rounded-md h-24 w-36 flex flex-col items-center justify-center relative">
              <input type="radio" value="Under 10" id="businessSize1" name="business-size" className="absolute top-2 right-2" checked={formValues.businessSize === "Under 10"} onChange={onBusinessSizeChange}/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h1 className="text-sm">Under 10</h1>
            </label>

            <label htmlFor="businessSize2" className="mx-1 border border-purple-8 rounded-md h-24 w-36 flex flex-col items-center justify-center relative">
              <input type="radio" value="11 - 30" id="businessSize2" name="business-size" className="absolute top-2 right-2" checked={formValues.businessSize === "11 - 30"} onChange={onBusinessSizeChange}/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              <h1 className="text-sm">11 - 30</h1>
            </label>
            
            <label htmlFor="businessSize3" className="mx-1 border border-purple-8 rounded-md h-24 w-36 flex flex-col items-center justify-center relative">
              <input type="radio" value="31 - 50" id="businessSize3" name="business-size" className="absolute top-2 right-2" checked={formValues.businessSize === "31 - 50"} onChange={onBusinessSizeChange}/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              <h1 className="text-sm">31 - 50</h1>
            </label>
            
            <label htmlFor="businessSize4" className="mx-1 border border-purple-8 rounded-md h-24 w-36 flex flex-col items-center justify-center relative">
              <input type="radio" value="50 - 100" id="businessSize4" name="business-size" className="absolute top-2 right-2" checked={formValues.businessSize === "50 - 100"} onChange={onBusinessSizeChange}/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              <h1 className="text-sm">50 - 100</h1>
            </label>
            
            <label htmlFor="businessSize5" className="ml-1 border border-purple-8 rounded-md h-24 w-36 flex flex-col items-center justify-center relative">
              <input type="radio" value="Above 100" id="businessSize5" name="business-size" className="absolute top-2 right-2" checked={formValues.businessSize === "Above 100"} onChange={onBusinessSizeChange}/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              <h1 className="text-sm">Above 100</h1>
            </label>

          </div>


          <div className="col-span-1">
            <label htmlFor="sales-volume">Sales Volume: </label>
          </div>
          
          <div className="col-span-3 flex items-center">
            
            <label htmlFor="salesVolume1" className="mr-1 border border-purple-8 rounded-md h-24 w-36 flex flex-col items-center justify-center relative">
              <input type="radio" value="Below RM 100k" id="salesVolume1" name="sales-volume" className="absolute top-2 right-2" checked={formValues.businessSalesVolume === "Below RM 100k"} onChange={onBusinessSalesVolumeChange}/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h1 className="text-sm">Below RM 100k</h1>
            </label>

            <label htmlFor="salesVolume2" className="mx-1 border border-purple-8 rounded-md h-24 w-36 flex flex-col items-center justify-center relative">
              <input type="radio" value="RM 100k - RM 500k" id="salesVolume2" name="sales-volume" className="absolute top-2 right-2" checked={formValues.businessSalesVolume === "RM 100k - RM 500k"} onChange={onBusinessSalesVolumeChange}/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h1 className="text-sm">RM 100k - RM 500k</h1>
            </label>
            
            <label htmlFor="salesVolume3" className="mx-1 border border-purple-8 rounded-md h-24 w-36 flex flex-col items-center justify-center relative">
              <input type="radio" value="RM 500k - RM 1M" id="salesVolume3" name="sales-volume" className="absolute top-2 right-2" checked={formValues.businessSalesVolume === "RM 500k - RM 1M"} onChange={onBusinessSalesVolumeChange}/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h1 className="text-sm">RM 500k - RM 1M</h1>
            </label>
            
            <label htmlFor="salesVolume4" className="mx-1 border border-purple-8 rounded-md h-24 w-36 flex flex-col items-center justify-center relative">
              <input type="radio" value="Above RM 1M" id="salesVolume4" name="sales-volume" className="absolute top-2 right-2" checked={formValues.businessSalesVolume === "Above RM 1M"} onChange={onBusinessSalesVolumeChange}/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h1 className="text-sm">Above RM 1M</h1>
            </label>


          </div>
        </div>
    </div>
  )
}

export default BusinessDetails