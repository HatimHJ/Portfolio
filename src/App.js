import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Index from './Components/Index/Index'

const  App = () => {
  const [isArabic, setIsArabic] = useState(false)
  const [language, setLanguage] = useState('عربي')
  const langSwitcher = () => {
    setIsArabic(!isArabic)
    if (language === 'عربي') {
      setLanguage('English')
    }else{
      setLanguage('عربي')
    }
  }
  // const styleDir = {direction:`${isArabic ? 'rtl': 'ltr'}  `}
    return (
      <div className={`${isArabic ? 'arabic' : '' }`} >        
        <Router>
          <button className='lang-switcher' onClick={langSwitcher}>{language}</button>
          <Navbar isArabic={isArabic} />
          <div className="contant">
            <Route exact path='/'   >
              <Index isArabic={isArabic} />
              </Route>
            <Route  path='/contact' component={Contact } />
          </div>
          <Footer />
        </Router>
      </div>
    );
  
}

export default App
