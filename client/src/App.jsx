
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BecomHost from './home/BecomHost'
import Footer from './home/Footer'


import TopVillas from './home/TopVillas'
import HomePage from './home/HomePage'
import OurRegions from './home/OurRegions'
import PropSpecialities from './home/PropSpecialities'
import AboutPage from './home/AboutPage'


function App() {


  return (
    <>
      <HomePage />
      <TopVillas />
      <OurRegions />
      <PropSpecialities />
      <BecomHost />
      <AboutPage />
      <Footer />


      {/* <Routes>
             
             <Route path="/" element={ <HomePage />}/>
             <Route path="/villa" element={<TopVillas />}/>
             <Route path="/region" element={<OurRegions />}/>
             <Route path="/property" element={<PropSpecialities />}/>
             <Route path="/host" element={<BecomHost />}/>
             <Route path="/about" element={<AboutPage />}/>
             <Route path="/footer" element={<Footer />}/>
           </Routes> */}


    </>
  )
}

export default App
