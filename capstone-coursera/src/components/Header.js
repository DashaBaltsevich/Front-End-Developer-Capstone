import { Nav } from './Nav'
import Logo from '../icons_assets/Logo.svg'

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_wrap">
          <img src={Logo} alt="logo" className="header_logo" />
          <Nav />
        </div>
      </div>
    </header>
  )
}
