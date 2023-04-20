import React from 'react'
import DashboardIcon from '../assets/Icons/DashboardIcon.png'
import SettingsIcon from '../assets/Icons/SettingsIcon.png'
import ActivitiesIcon from '../assets/Icons/ActivitiesIcon.png'
import UsersIcon from '../assets/Icons/UsersIcon.png'
import AddeduserIcon from '../assets/Icons/Added_userIcon.png'
import AffiliateIcon from '../assets/Icons/AffiliateIcon.png'
// import plusIcon from '../assets/Icons/plusIcon.png'
import lighterPlusIcon from '../assets/Icons/lighterPlusIcon.png'
// import lighterPlusIcon from '../assets/Icons/'


const SideBar = () => {

  return (
    <React.Fragment>
    <section className='sidebar_container w-1/5 px-7 py-3 rounded-lg'>

    <div className='welcome_profile mt-5 mb-7 flex px-5 py-2 rounded-lg'>
    <img className='mx-3 my-2' src={ActivitiesIcon} alt="icon" />
    <h3>Welcome Keerthi</h3>
    </div>

    <ul className='sidebar_ul'>
        <div className='flex items-center my-4'>
        <img className='mx-3 my-2' src={DashboardIcon} alt="icon" />
        <li><a href="#">Dashboard</a></li>
        </div>

        <div className='flex items-center my-4'>
        <img className='mx-3 my-2' src={SettingsIcon} alt="icon" />
        <li><a href="#">Settings</a></li>
        </div>

        <div className='flex items-center my-4'>
        <img className='mx-3 my-2' src={ActivitiesIcon} alt="icon" />
        <li><a href="#">Activities</a></li>
        </div>

        <div className='flex items-center my-4'>
        <img className='mx-3 my-2' src={UsersIcon} alt="icon" />
        <li><a href="#">Users</a></li>
        </div>

        <div className='flex items-center my-4'>
        <img className='mx-3 my-2' src={AddeduserIcon} alt="icon" />
        <li><a href="#">Added user</a></li>
        </div>

        <div className='flex items-center my-4'>
        <img className='mx-3 my-2' src={AffiliateIcon} alt="icon" />
        <li><a href="#">Affiliate</a></li> 
        </div> 
    </ul>

        <ul className='ul_after'>

        <div className='flex items-center'>  
        <img className='mx-3 my-2' src={ActivitiesIcon} alt="icon" />
        <li><a href="#">Profile</a></li>
        </div>

        <div className='flex items-center'>  
        <img className='mx-3 my-2' src={UsersIcon} alt="icon" />
        <li><a href="#">Log out</a></li>
        </div>
        </ul>
      
        <div className='add_new_project my-5 flex px-5 py-2 rounded-lg'>
        <img className='mx-3 my-2' src={lighterPlusIcon} alt="icon" />
        <h3>New project</h3>
        </div>
    </section>
    </React.Fragment>
  )
}

export default SideBar