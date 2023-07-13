export const Nav = ({ isMobileMenuVisible, setIsMobileMenuVisible }) => {
  const navList = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'About',
      href: '/'
    },
    {
      name: 'Menu',
      href: '/'
    },
    {
      name: 'Reservations',
      href: '/'
    },
    {
      name: 'Order online',
      href: '/'
    },
    {
      name: 'login',
      href: '/'
    }
  ]
  return (
    <div className={isMobileMenuVisible && 'nav_list-mobile-wrap'}>
      <nav>
        <ul className={isMobileMenuVisible ? 'nav_list-mobile' : 'nav_list'}>
          {navList.map((el, i) => (
            <li className="nav_list__item" key={i}>
              <a href={el.href} className="nav_list__item-link">
                {el.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {isMobileMenuVisible && (
        <button
          className="nav-mobile-close_button"
          onClick={() => setIsMobileMenuVisible(false)}
        ></button>
      )}
    </div>
  )
}
