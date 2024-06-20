import styles from './style.module.css'
import logo from '../../assets/headerIcon.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import { useEffect } from 'react'

const Layout = ({ children }) => {
  const { activeLink, setActiveLink } = useGlobalContext()
  const location = useLocation()

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location, setActiveLink])

  return (
    <>
      <header>
        <nav className={styles.navbar}>
          <Link to={'/'}>
            <img src={logo} alt="logoImg" className={styles.image} />
          </Link>
          <div className={styles.nav_links}>
            <ul>
              <Link
                to={'/about'}
                className={activeLink === '/about' ? styles.active : ''}
              >
                <li>About Us</li>
              </Link>
            </ul>
            <ul>
              <Link
                to={'/products'}
                className={activeLink === '/products' ? styles.active : ''}
              >
                <li>Our Product</li>
              </Link>
            </ul>
            <ul>
              <li>Delivery</li>
            </ul>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </nav>
      </header>
      <>{children}</>
    </>
  )
}
export default Layout
