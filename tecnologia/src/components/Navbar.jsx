import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
  const location = useLocation()
  const { totalCount, toggleCart } = useCart()

  const isActive = (path) => location.pathname === path

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/" style={styles.logo}>
          TechStore
        </Link>

        {/* Links */}
        <div style={styles.links}>
          <Link to="/" style={isActive('/') ? { ...styles.link, ...styles.activeLink } : styles.link}>
            Inicio
          </Link>
          <Link to="/informacion" style={isActive('/informacion') ? { ...styles.link, ...styles.activeLink } : styles.link}>
            Información
          </Link>
          <Link to="/formulario" style={isActive('/formulario') ? { ...styles.link, ...styles.activeLink } : styles.link}>
            Formulario
          </Link>
          <Link to="/contacto" style={isActive('/contacto') ? { ...styles.link, ...styles.activeLink } : styles.link}>
            Contacto
          </Link>
        </div>

        {/* Action Icons */}
        <div style={styles.actions}>
          <button style={styles.iconBtn} onClick={toggleCart} aria-label="Carrito">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {totalCount > 0 && <span style={styles.badge}>{totalCount}</span>}
          </button>
          <button style={styles.iconBtn} aria-label="Usuario">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    backgroundColor: '#120d0a',
    borderBottom: '1px solid #1f1814',
    padding: '0 48px',
    height: '72px',
    display: 'flex',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  container: {
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#ee8931',
    letterSpacing: '-0.3px',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    gap: '32px',
  },
  link: {
    color: '#a19a95',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '400',
    padding: '8px 0',
    position: 'relative',
    transition: 'color 0.2s ease',
  },
  activeLink: {
    color: '#ffffff',
    fontWeight: '500',
    borderBottom: '2px solid #ee8931',
  },
  actions: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  },
  iconBtn: {
    background: 'none',
    border: 'none',
    color: '#f3f3f3',
    cursor: 'pointer',
    padding: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    position: 'relative',
    transition: 'opacity 0.2s',
  },
  badge: {
    position: 'absolute',
    top: '-2px',
    right: '-4px',
    backgroundColor: '#ee8931',
    color: '#0d0805',
    fontSize: '11px',
    fontWeight: '800',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default Navbar
