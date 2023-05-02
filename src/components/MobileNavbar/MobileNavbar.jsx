import React from 'react'
// import DashboardIcon from '../../assets/Icons/DashboardIcon.png'
// import SettingsIcon from '../../assets/Icons/SettingsIcon.png'
// import ActivitiesIcon from '../../assets/Icons/ActivitiesIcon.png'
// import UsersIcon from '../../assets/Icons/UsersIcon.png'
// import AddeduserIcon from '../../assets/Icons/Added_userIcon.png'
// import AffiliateIcon from '../../assets/Icons/AffiliateIcon.png'
// import lighterPlusIcon from '../../assets/Icons/lighterPlusIcon.png'
import Burger from '../Burger'
import MobileSideBar from '../MobileSideBar'


const MobileNavbar = (props) => {
const {openBurger, setOpenBurger} = props

const burgerHandle = () => {
    setOpenBurger(!openBurger)
  }
  return (
    <React.Fragment>
        {openBurger ? <MobileSideBar/> : null}
        
        {/* {openBurger ? <section className='mobileNav_container'>

    <div className='mobile_welcome_profile px-5 py-2 flex items-center rounded-lg'>
    <img className='mr-3 my-2' src={ActivitiesIcon} alt="icon" />
    <h3>Welcome Keerthi</h3>
    </div>

    <ul className='mobile_ul'>
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

        <ul className='mobile_ul_after'>

        <div className='flex items-center'>  
        <img className='mr-3 mobile_ul_after_icon' src={ActivitiesIcon} alt="icon" />
        <li><a href="#">Profile</a></li>
        </div>

        <div className='flex items-center'>  
        <img className='mr-3 mobile_ul_after_icon' src={UsersIcon} alt="icon" />
        <li><a href="#">Log out</a></li>
        </div>
        </ul>

            <div className='mobile_add_new_project px-5 py-2 flex rounded-lg'>
        <img className='mr-3 my-2' src={lighterPlusIcon} alt="icon" />
        <h3>New project</h3>
        </div>
    
     </section> : null} */}
        

        {/* MOBILE NAV STARTS */}
         {/* <section className='mobileNav_container'>

    <div className='mobile_welcome_profile px-5 py-2 flex items-center rounded-lg'>
    <img className='mr-3 my-2' src={ActivitiesIcon} alt="icon" />
    <h3>Welcome Keerthi</h3>
    </div>

    <ul className='mobile_ul'>
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

        <ul className='mobile_ul_after'>

        <div className='flex items-center'>  
        <img className='mr-3 mobile_ul_after_icon' src={ActivitiesIcon} alt="icon" />
        <li><a href="#">Profile</a></li>
        </div>

        <div className='flex items-center'>  
        <img className='mr-3 mobile_ul_after_icon' src={UsersIcon} alt="icon" />
        <li><a href="#">Log out</a></li>
        </div>
        </ul>

            <div className='mobile_add_new_project px-5 py-2 flex rounded-lg'>
        <img className='mr-3 my-2' src={lighterPlusIcon} alt="icon" />
        <h3>New project</h3>
        </div>
    
     </section>
    */}
    {/* MOBILE NAV ENDS */}
    <Burger burgerHandle={burgerHandle}/>
    </React.Fragment>
  )
}

export default MobileNavbar