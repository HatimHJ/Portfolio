import React from 'react'
import {NavbarContainer, Logo,  Ul, Li, Anchor} from './style.js'
import {data} from './data'
import { Link } from "react-router-dom"


const Navbar = ({isArabic}) => {

  const anchors = data.map(link => {
    const {id, text, url, arabicText} = link
    if(url === '#')
      return <Li key={id}> <Anchor href={url}>{isArabic ? arabicText : text}</Anchor> </Li>
    return <Li key={id}> <Link className='linkStyle' to={url}>
            {isArabic ? arabicText : text}
            </Link> </Li>
  })

  return (
    <NavbarContainer>
      <div className="container">                
        <Logo><img src="./images/logo.svg" alt="" />
        </Logo>
        <Ul className={`${isArabic?'arabic':''}`}>
          {anchors}
        </Ul>
      </div>
      
    </NavbarContainer>
  )

}

export default Navbar