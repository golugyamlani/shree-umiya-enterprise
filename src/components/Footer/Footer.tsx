import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const companyLinks = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Shop All' },
  { path: '/about', label: 'Our Mission' },
  { path: '/contact', label: 'Contact' },
  { path: '/faq', label: 'FAQ' },
];

const productLinks = [
  { path: '/products/amenities', label: 'Amenities' },
  { path: '/products/bath', label: 'Bath' },
  { path: '/products/bedding', label: 'Bedding' },
  { path: '/products/flooring', label: 'Flooring' },
  { path: '/products/furniture', label: 'Furniture' },
];

const socialLinks = [
  { url: 'https://facebook.com', label: 'Facebook' },
  { url: 'https://youtube.com', label: 'Youtube' },
  { url: 'https://linkedin.com', label: 'LinkedIn' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.leftContent}>
            <h2 className={styles.tagline}>
              <span className={styles.taglinePink}>Where Excellence</span>
              <br />
              <span className={styles.taglinePink}>meets Innovation!</span>
            </h2>
            <p className={styles.description}>
              Trust Shree Umiya Enterprise to bring cutting-edge solutions to your hospitality needs.
            </p>
            <div className={styles.enquiryForm}>
              <label className={styles.enquiryLabel}>Enquire Now *</label>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder=""
                  className={styles.enquiryInput}
                />
                <button className={styles.submitBtn}>Submit</button>
              </div>
              <p className={styles.thankYou}>Thanks for subscribing!</p>
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.linkColumn}>
              {companyLinks.map((link) => (
                <Link key={link.path} to={link.path} className={styles.footerLink}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className={styles.linkColumn}>
              {productLinks.map((link) => (
                <Link key={link.path} to={link.path} className={styles.footerLink}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <div className={styles.bottomLeft}>
            <span className={styles.copyright}>© {currentYear} by Shree Umiya Enterprise</span>
            <Link to="/cookie-policy" className={styles.policyLink}>Cookie Policy</Link>
          </div>
          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
