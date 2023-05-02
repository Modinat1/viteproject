import SideBar from './components/SideBar'
import MainSection from './components/MainSection/MainSection'
// import Burger from './components/Burger'
import MobileNavbar from './components/MobileNavbar/MobileNavbar'
import {useState} from 'react'

function App() {
const [openBurger, setOpenBurger] = useState(false)

// const burgerHandle = () => {
//     setOpenBurger(!openBurger)
//   }
  return (
    <section>    

    {/* <Burger openBurger={openBurger} setOpenBurger={setOpenBurger} burgerHandle={burgerHandle}/> */}
    <MobileNavbar openBurger={openBurger} setOpenBurger={setOpenBurger}/>
    <div className="flex">
    <SideBar/>
    <MainSection/>
  </div>
  </section>

  )
}

export default App
