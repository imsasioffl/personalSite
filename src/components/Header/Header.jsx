import React from 'react'
import './header.css'
import CTA from'./CTA'
import ME from "../../assets/profile_img.png"
import HeaderSocials from './HeaderSocials'  

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>SASIKUMAR S</h1>
        <h5 className="text-light">
          Developer
        </h5>
        <CTA />

        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='Scroll_down'> Scroll Down → </a>
      </div>
    </header>
  )
}

export default Header