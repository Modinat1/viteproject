import React from 'react'
import memberImg from '../../assets/images/memberImg.png'
const MemberImages = () => {
  return (
    <section >
  <div className='memberImg_container'>
        <img className='img1' src={memberImg} alt="member-img" />
        <img className='img2' src={memberImg} alt="member-img" />
        <img className='img3' src={memberImg} alt="member-img" />
    </div>
    </section>
  
  )
}

export default MemberImages