import React from 'react'
import {NavbarContainer, Logo, LogoText, Ul} from './style.js'
import {anchors} from './data'

const Navbar = () => {

  return (
    <NavbarContainer>
      <div className="container">                
        <Logo>
          <LogoText >Ultra Profile</LogoText>
        </Logo>
        <Ul>
          {anchors}
        </Ul>
      </div>
    </NavbarContainer>
  )

}

export default Navbar