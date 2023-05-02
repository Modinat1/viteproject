import React from 'react'
import progressIcon from '../../assets/Icons/progressIcon.png'
import commentIcon from '../../assets/Icons/commentIcon.png'
import likeIcon from '../../assets/Icons/likeIcon.png'
import threeDotsIcon from '../../assets/Icons/threeDotsIcon.png'
import plusIcon from '../../assets/Icons/plusIcon.png'
import MemberImages from '../MemberImages/MemberImages'
import todocardImg2 from '../../assets/images/todocard2.png'
import ProgressBar from '../ProgressBar'

const TodoCard2 = () => {
       const testData = [
  { bgcolor: "#ff5f37", completed: 53 },
];
  return (
    <>
    <div className='todoCard_container'>
        <div className='todoCard_heading flex items-center justify-between px-4 py-3'>
        <h3 className='subheading'> Inprogress</h3>
        <button className='bg-black text-white px-3 py-2 rounded '>1</button>
</div>
        <div className="todocardImg_container">
            <img className='todocardimg' src={todocardImg2} alt="" />

            
        <div className="flex justify-between items-center mt-4">
        <h2 className='text-base font-bold'>Highfidelity Design</h2>
        <img src={threeDotsIcon} alt="icon" />
            </div>
        <p className='gray_color_P mt-1 text-sm'>Make clear design and color</p>
        

        <section className="progress_container py-2.5">
        <div className='progress flex justify-between items-center'>

        <div className='flex items-center' >
            <img className='mr-2 w-3' src={progressIcon} alt="icon" />
            <h3 className='progress_h3 text-sm'>Progress</h3>
        </div>

        <h3 className='text-sm'>2/10</h3>
        </div>

        {/* PROGRESS BAR BEGINS */}
        {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
        
        {/* PROGRESS BAR ENDS */}
        
        <div className="comment_counts flex items-center justify-between ">

            <div className='flex items-center mt-3'>
            <div className='comment flex mr-3'>
            <img className='mr-1.5 w-4 h-4 mt-1' src={commentIcon} alt="icon" />
            <h3>7</h3>
            </div>

            <div className='like flex align-center'>
            <img className='mr-1.5 w-5 h-3 mt-1.5' src={likeIcon} alt="icon" />
            <h3>2</h3>
            </div>
            </div>
            
            <div className='w-5 mr-14 mb-5'>

            <MemberImages/>
            </div>

        </div>
        </section>
        </div>

         <div className='flex add_task justify-center items-center rounded-lg'>
            <img className='mr-3 h-4  w-4' src={plusIcon} alt="icon" />
            <h3 className='text-sm'>Add Task</h3>
        </div>
    </div>
    </>
  )
}

export default TodoCard2