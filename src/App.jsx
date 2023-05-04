import SideBar from './components/SideBar'
import MainSection from './components/MainSection/MainSection'
import MobileNavbar from './components/MobileNavbar/MobileNavbar'
import {useState} from 'react'

function App() {
const [openBurger, setOpenBurger] = useState(false)
  return (
    <section>    
    <MobileNavbar openBurger={openBurger} setOpenBurger={setOpenBurger}/>
    <div className="flex">
    <SideBar/>
    <MainSection/>
  </div>
  </section>

  )
}

export default App
