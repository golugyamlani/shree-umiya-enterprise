import { Link } from 'react-router-dom';
import styles from './PrecisionExcellence.module.css';

const features = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="24" r="12" stroke="currentColor" strokeWidth="2" />
        <path d="M32 36V48" stroke="currentColor" strokeWidth="2" />
        <path d="M24 56H40" stroke="currentColor" strokeWidth="2" />
        <path d="M28 48L24 56" stroke="currentColor" strokeWidth="2" />
        <path d="M36 48L40 56" stroke="currentColor" strokeWidth="2" />
        <path d="M32 12V8" stroke="currentColor" strokeWidth="2" />
        <path d="M26 14L22 10" stroke="currentColor" strokeWidth="2" />
        <path d="M38 14L42 10" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    label: 'Quality\nProducts',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="48" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M32 28V36" stroke="currentColor" strokeWidth="2" />
        <path d="M24 36H40" stroke="currentColor" strokeWidth="2" />
        <path d="M20 36V44H44V36" stroke="currentColor" strokeWidth="2" />
        <path d="M16 30V40" stroke="currentColor" strokeWidth="2" />
        <path d="M48 30V40" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    label: 'Expert Team',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="2" />
        <text x="32" y="37" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">$</text>
        <path d="M32 16C32 16 44 20 48 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 16C32 16 20 20 16 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 48C32 48 44 44 48 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 48C32 48 20 44 16 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    label: 'Secure\nPayment Terms',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="28" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 36H40" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="44" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="44" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M44 20H52L56 28V44H48" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="52" cy="44" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    label: 'Reliable\nShipments',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="24" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M24 24V20C24 16 28 12 32 12C36 12 40 16 40 20V24" stroke="currentColor" strokeWidth="2" />
        <path d="M48 32H56" stroke="currentColor" strokeWidth="2" />
        <path d="M48 28H52" stroke="currentColor" strokeWidth="2" />
        <path d="M48 36H54" stroke="currentColor" strokeWidth="2" />
        <circle cx="52" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M52 16V12" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    label: 'In-House\nManufacturing',
  },
];

export const PrecisionExcellence = () => {
  return (
    <section className={styles.precisionExcellence}>
      <div className={styles.container}>
        <h2 className={styles.title}>Precision & Excellence</h2>
        <p className={styles.description}>
          We pride ourselves on our unwavering commitment to delivering excellence and innovation. We understand that
          precision in both timing and quality is crucial. That's why we ensure that every product and shipment meets the highest
          standards and is delivered precisely when promised.
        </p>

        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <span className={styles.featureLabel}>{feature.label}</span>
            </div>
          ))}
        </div>

        <Link to="/about" className={styles.learnMoreBtn}>
          Learn More
        </Link>
      </div>
    </section>
  );
};
