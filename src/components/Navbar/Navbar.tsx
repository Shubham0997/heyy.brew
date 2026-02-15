import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../assets/logo/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
          <img src={Logo} alt="Heyy Brew" className={styles.logoImage} />
        </NavLink>

        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/coffee-beans"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              Coffee Beans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/roasting"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              Roasting
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/grinding"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              Grinding
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/brewing"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              Brewing
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
