import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styles from './Header.module.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact Us' },
  { path: '/products', label: 'Our Products' },
];

const categories = [
  { path: '/products/amenities', label: 'AMENITIES' },
  { path: '/products/bath', label: 'BATH' },
  { path: '/products/bedding', label: 'BEDDING' },
  { path: '/products/furniture', label: 'FURNITURE' },
  { path: '/products/platform-beds', label: 'PLATFORM BEDS' },
];

export const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <Link to="/" className={styles.logoLink}>
            <img src={logo} alt="Shree Umiya Enterprise" className={styles.logo} />
          </Link>

          <nav className={styles.mainNav}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Spacer to keep nav centered */}
          <div className={styles.headerSpacer}></div>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}></span>
          </button>
        </div>
      </div>

      <div className={styles.categoryBar}>
        <div className={styles.container}>
          <nav className={styles.categoryNav}>
            {categories.map((cat) => (
              <Link
                key={cat.path}
                to={cat.path}
                className={styles.categoryLink}
              >
                {cat.label}
              </Link>
            ))}
          </nav>
          <button className={styles.downloadBtn}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileDivider}></div>
          {categories.map((cat) => (
            <Link
              key={cat.path}
              to={cat.path}
              className={styles.mobileCategoryLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {cat.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
