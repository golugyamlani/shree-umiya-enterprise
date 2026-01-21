import styles from './CrewSection.module.css';
import crewImg from '../../assets/images/shreeumya.jpg';

export const CrewSection = () => {
  return (
    <section className={styles.crewSection}>
      <div className={styles.container}>
        <div className={styles.contentCard}>
          <h1 className={styles.title}>Shree Umiya Enterprise Crew</h1>
          <p className={styles.tagline}>Where Excellence meets Innovation!</p>
          <p className={styles.description}>
            At Shree Umiya Enterprise, we believe in the power of combining excellence with innovation. Our philosophy
            is rooted in the conviction that true greatness emerges when meticulous craftsmanship meets bold,
            inventive ideas. We are dedicated to delivering exceptional quality in everything we do, while
            continuously seeking new ways to challenge the status quo and drive progress. This commitment
            ensures that we not only meet but exceed the expectations of our clients, stakeholders, and the
            communities we serve.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <img src={crewImg} alt="Shree Umiya Enterprise Team" className={styles.image} />
        </div>
      </div>
    </section>
  );
};
