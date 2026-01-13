import styles from './OurStory.module.css';

export const OurStory = () => {
  return (
    <section className={styles.ourStory}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Story</h2>
        <div className={styles.divider}></div>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            Established in 2015 in Ahmedabad, Gujarat, Shree Umiya Enterprise is a company that have been a leader in the manufacturing
            sector, dedicated to providing top-quality products for the hospitality industry. Our company specializes in a wide range of products,
            with our master product being platform beds. We also manufacture various types of metal beds, swings, furniture, bellman carts,
            airport trolleys, anti-fog mirrors, towel bars, and many more essential items for the hospitality industry.
          </p>
          <p className={styles.paragraph}>
            Under the expert leadership of our Managing Director, Mr. Sanjay Patel, we have achieved a prominent position in the industry. We
            proudly export our exceptional products to countries such as the USA, South Africa, and Germany.
          </p>
        </div>
      </div>
    </section>
  );
};
