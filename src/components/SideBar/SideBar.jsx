import { useState } from 'react'
import './SideBar.scss'
import logo from '../../assets/logo/gogimail-logo.png'
import NavigationButton from '../customButtons/NavigationButton/NavigationButton'
import { Link, NavLink } from 'react-router-dom'
import fb from '../../assets/icons/fb.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'

function SideBar() {

  return (
    <>
      

        <nav className="sidebar">

          
            <ul>
              
              <li><NavLink
                to="/"
                className={({ isActive }) =>
                  `navigation_link${isActive ? " navigation_link--active" : ""}`
                }
              >
                <NavigationButton>𖠿 Home</NavigationButton>
              </NavLink></li>
              
              
              <li><NavLink
                to="/generate"
                className={({ isActive }) =>
                  `navigation_link${isActive ? " navigation_link--active" : ""}`
                }
              >
                <NavigationButton>✎ Write Prompt</NavigationButton>
              </NavLink></li>
              
              <li><NavLink
                to="/campaigns"
                className={({ isActive }) =>
                  `navigation_link${isActive ? " navigation_link--active" : ""}`
                }
              >
                <NavigationButton>✉ Campaigns</NavigationButton>
              </NavLink></li>

              <li><NavLink
                to="/analytics"
                className={({ isActive }) =>
                  `navigation_link${isActive ? " navigation_link--active" : ""}`
                }
              >
                <NavigationButton>✉ Analytics</NavigationButton>
              </NavLink></li>

              <li><NavLink
                to="/notifications"
                className={({ isActive }) =>
                  `navigation_link${isActive ? " navigation_link--active" : ""}`
                }
                >
                <NavigationButton>Notifications</NavigationButton>
                </NavLink></li>

              <li><NavLink
                to="/teams"
                className={({ isActive }) =>
                  `navigation_link${isActive ? " navigation_link--active" : ""}`
                }
                >
                <NavigationButton>Teams</NavigationButton>
                </NavLink></li>

                
              <li><NavLink
                to="/role"
                className={({ isActive }) =>
                  `navigation_link${isActive ? " navigation_link--active" : ""}`
                }
                >
                <NavigationButton>Role</NavigationButton>
                </NavLink></li>

              <li><NavLink
                to="/subscribers"
                className={({ isActive }) =>
                  `navigation_link${isActive ? " navigation_link--active" : ""}`
                }
                >
                <NavigationButton>Subscribers</NavigationButton>
                </NavLink></li>

                <li><NavLink
                to="/privacy"
                className={({ isActive }) =>
                  `navigation_link${isActive ? " navigation_link--active" : ""}`
                }
                >
                <NavigationButton>Privacy</NavigationButton>
                </NavLink></li>

                <li><NavLink
                to="/help"
                className={({ isActive }) =>
                  `navigation_link${isActive ? " navigation_link--active" : ""}`
                }
                >
                <NavigationButton>Help</NavigationButton>
                </NavLink></li>

            
            </ul>

            <div className="sidebar-socials">
              
              <NavLink
                to="https://www.facebook.com"
            >
                <img src={fb} height="25"/>
              </NavLink>
          
              <NavLink
              to="https://www.instagram.com"
              >
              <img src={instagram} height="25" />
            </NavLink>

            <NavLink
              to="https://www.linkedin.com"
            >
              <img src={linkedin} height="28"/>
            </NavLink>
            </div>
            
        </nav>
  
      
    </>
  )
}

export default SideBar
