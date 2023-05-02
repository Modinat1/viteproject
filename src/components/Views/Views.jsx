import React from 'react'
import MemberImages from '../MemberImages/MemberImages'
import boardIcon from '../../assets/Icons/boardIcon.png'
import listIcon from '../../assets/Icons/listIcon.png'
import plusIcon from '../../assets/Icons/plusIcon.png'
import powerIcon from '../../assets/Icons/powerIcon.png'
import teamIcon from '../../assets/Icons/teamIcon.png'

const Views = () => {
  return (
    <section className='views'>
    <div className='flex items-center'>
    
    <div className='w-5 mr-10 mb-7'>
    <MemberImages/>
    </div>

    <h5 className='ml-10 member_count'>8 members</h5>
    </div>

    <div className="views_list">
        <div className="flex mx-2">
            <img className='mx-2' src={teamIcon} alt="icon" />
            <h4>Participants View</h4>
        </div>
        <div className="flex mx-2">
            <img className='mx-2' src={boardIcon} alt="icon" />
            <h4>Board View</h4>
        </div>
        <div className="flex mx-2">
            <img className='mx-2' src={listIcon} alt="icon" />
            <h4>List View</h4>
        </div>
        <div className="flex mx-2">
            <img className='mx-2' src={powerIcon} alt="icon" />
            <h4>Power View</h4>
        </div>
        
        <img className='mx-2' src={plusIcon} alt="" />
    </div>
    </section>
  )
}

export default Views