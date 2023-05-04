import React from 'react'
import NewCampaignHeading from '../NewCampaignHeading/NewCampaignHeading'
import Views from '../Views/Views'
import Todo from '../Todo/Todo'


const MainSection = () => {
  // xl:w-2/5 2xl:w-3/5
  return (
    <React.Fragment>
        <section className='main_section w-4/5'>
         <NewCampaignHeading/>
        <Views/>
        <Todo/>
        </section>
    </React.Fragment>
  )
}

export default MainSection