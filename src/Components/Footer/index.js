import React from 'react'
import SocialMedia from '../SocialMedia'
import './style.css'
const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
      <SocialMedia/>
    </footer>
  )
}

export default Footer