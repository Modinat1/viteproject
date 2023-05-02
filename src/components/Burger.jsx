import React from 'react'
// import { useState } from 'react'
// import MobileNavbar from './MobileNavbar/MobileNavbar'

const Burger = (props) => {
     const {burgerHandle} = props

//  const burgerHandle = () => {
//     setOpenBurger(!openBurger)
//   }
  return (
    <>
    {/* {openBurger ? <MobileNavbar/> : null } */}
    
    <button className="hamburger" onClick={() => burgerHandle()}>
          <span className="line-1" />
          <span className="line-2" />
          <span className="line-3" />
    </button>
    </>
  )
}

export default Burger