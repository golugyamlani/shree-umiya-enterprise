import { Link } from 'react-router-dom';
import styles from './PatentedProduct.module.css';
import bedsImg from '../../assets/images/beds.jpeg';

export const PatentedProduct = () => {
  return (
    <section className={styles.patentedProduct}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Our
            <br />
            Patented
            <br />
            Master
            <br />
            Product
          </h2>
          <p className={styles.subtitle}>The Tool-Free/Screwless</p>
          <p className={styles.productName}>Platform Beds</p>
          <Link to="/products/platform-beds" className={styles.shopBtn}>
            Shop Now
          </Link>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={bedsImg}
            alt="Platform Beds"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};
