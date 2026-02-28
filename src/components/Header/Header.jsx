import { useState } from 'react'
import './Header.scss'
import logo from '../../assets/logo/gogimail-logo.png'
import clientLogo from '../../assets/logo/client-logo.svg'
import NavigationButton from '../customButtons/NavigationButton/NavigationButton'
import { Link, NavLink } from 'react-router-dom'
import profilePicture from '../../assets/icons/profile-picture.png'

function Header() {

  return (
    <>
      <div className="header">

        <div className="client-logo-wrapper">
          <NavLink
          to="https//www.ubereats.com/">
          <img src={clientLogo} width="200" height="60"></img>
          </NavLink>
        </div>
        
        <div className="logo-wrapper">
          <NavLink
          to="/home">
          <img src={logo} height="60"></img>
          </NavLink>
        </div>

        <div className="profile">

          <div className="profile-picture">
            <img src={profilePicture} height="60"></img>
          </div>

          <div className="profile-person">

            <div className="profile-name">
              Alex Chen
            </div>
            
            <div className="profile-title">
              Vice President of Marketing
            </div>


          </div>
          
          
        </div>

        

      </div>
      
    </>
  )
}

export default Header
