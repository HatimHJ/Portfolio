import React from 'react'
import Home from '../Home'
import Portfolio from '../Portfolio'
import Profile from '../Profile'
import Work from '../Work'

const Index = ({isArabic}) => {
      return (
      <div >
        <Home isArabic={isArabic} />
        <Work isArabic={isArabic} />
        <Portfolio isArabic={isArabic} />
        <Profile isArabic={isArabic} />
      </div>
    );
  
}

export default Index
