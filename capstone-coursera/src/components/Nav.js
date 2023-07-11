import Hamburger from '../icons_assets/🦆 icon _hamburger menu.svg'

export const Nav = () => {
  return (
    <nav>
      <ul className="nav_list">
        <li className="nav_list__item">
          <a href="/" className="nav_list__item-link">
            Home
          </a>
        </li>
        <li className="nav_list__item">
          <a href="/" className="nav_list__item-link">
            About
          </a>
        </li>
        <li className="nav_list__item">
          <a href="/" className="nav_list__item-link">
            Menu
          </a>
        </li>
        <li className="nav_list__item">
          <a href="/" className="nav_list__item-link">
            Reservations
          </a>
        </li>
        <li className="nav_list__item">
          <a href="/" className="nav_list__item-link">
            Order online
          </a>
        </li>
        <li className="nav_list__item">
          <a href="/" className="nav_list__item-link">
            login
          </a>
        </li>
      </ul>
      <div className="nav-mobile">
        <img src={Hamburger} alt="" />
      </div>
    </nav>
  )
}
