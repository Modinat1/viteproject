import React from 'react'
import progressIcon from '../../assets/Icons/progressIcon.png'
import commentIcon from '../../assets/Icons/commentIcon.png'
import likeIcon from '../../assets/Icons/likeIcon.png'
import threeDotsIcon from '../../assets/Icons/threeDotsIcon.png'
import MemberImages from '../MemberImages/MemberImages'
import todocardImg2 from '../../assets/images/todocard2.png'

const TodoCard2 = () => {
  return (
    <>
    <div className='todoCard_container'>
        <div className='todoCard_heading flex items-center justify-between px-4 py-3'>
        <h3> Inprogress</h3>
        <button className='bg-black text-white px-3 py-2 rounded '>1</button>
</div>
        <div className="todocardImg_container">
            <img className='todocardimg' src={todocardImg2} alt="" />

            
        <div className="flex justify-between items-center mt-4">
        <h2 className='text-lg font-bold'>Highfidelity Design</h2>
        <img className='bg-black' src={threeDotsIcon} alt="icon" />
            </div>
        <p className='gray_color_P mt-1'>Make clear design and color</p>
        

        <section className="progress_container py-2.5">
        <div className='progress flex justify-between items-center'>

        <div className='flex items-center' >
            <img className='mx-1 w-5' src={progressIcon} alt="icon" />
            <h3 className='progress_h3'>Progress</h3>
        </div>

        <h3>2/10</h3>
        </div>
        <div className='progress_bar red_color'>
            {/* <div className='red_color'></div> */}
        </div>

        <div className="comment_counts flex items-center justify-between ">

            <div className='flex items-center mt-3'>
            <div className='comment flex mr-3'>
            <img className='mr-1.5 w-6 h-6' src={commentIcon} alt="icon" />
            <h3>7</h3>
            </div>

            <div className='like flex align-center'>
            <img className='mr-1.5 w-7 h-4 mt-1.5' src={likeIcon} alt="icon" />
            <h3>2</h3>
            </div>
            </div>
            
            <div className='w-5 mr-14 mb-5'>

            <MemberImages/>
            </div>

        </div>
        </section>
        </div>
    </div>
    </>
  )
}

export default TodoCard2