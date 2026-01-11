import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Your
            <br />
            One-Stop
            <br />
            Solution to the
            <br />
            <span className={styles.highlight}>Hospitality</span>
            <br />
            <span className={styles.highlight}>Needs</span>
          </h1>
          <p className={styles.description}>
            Diverse range of hospitality items available for your needs, offering quality and variety to enhance your guest experience.
          </p>
          <Link to="/products" className={styles.shopBtn}>
            Shop Now
          </Link>
        </div>

        <div className={styles.videoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/jEe3beJhy3s"
            title="Shree Umiya Enterprise | Exporters for Hospitality"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          ></iframe>
        </div>
      </div>
    </section>
  );
};
