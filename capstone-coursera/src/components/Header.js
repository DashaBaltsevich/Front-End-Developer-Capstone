import { useState } from 'react'
import { Nav } from './Nav'
import Logo from '../icons_assets/Logo.svg'
import Hamburger from '../icons_assets/🦆 icon _hamburger menu_.svg'

export const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false)
  return (
    <header className="header">
      <div className="container">
        <div className="header_wrap">
          <img src={Logo} alt="logo" className="header_logo" />
          <Nav
            isMobileMenuVisible={isMobileMenuVisible}
            setIsMobileMenuVisible={setIsMobileMenuVisible}
          />
          <button
            className="nav-mobile_button"
            onClick={() => setIsMobileMenuVisible(true)}
          >
            {!isMobileMenuVisible && <img src={Hamburger} alt="" />}
          </button>
        </div>
      </div>
    </header>
  )
}
