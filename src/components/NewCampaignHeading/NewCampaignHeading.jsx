import React from 'react'


const NewCampaignHeading = () => {
  
  return (
    <section>
       <div className="NewCampaignHeader_container">
            
            <aside>

        <div className="flex justify-between">

            <h2 className='text-4xl font-black'>New Campaign Run</h2>
            
        </div>
            <p className='text-sm mt-2'>A new campaign launch work for brand new featur in May month</p>
            </aside>

            <button className='new-campaign-btn bg-black text-white rounded-xl px-7 py-2.5 font-light uppercase'>Add members</button>
        </div>
    </section>
  )
}

export default NewCampaignHeading