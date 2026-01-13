import styles from './CookiePolicyPage.module.css';

export const CookiePolicyPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Cookie Policy</h1>
        <p className={styles.effectiveDate}>Effective Date: 23rd June 2024</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Introduction</h2>
          <p className={styles.paragraph}>
            Shree Umiya Enterprise ("we," "our," or "us") uses cookies and similar technologies on our website ("Site") to enhance your browsing experience, improve our services, and understand how our Site is used. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. What Are Cookies?</h2>
          <p className={styles.paragraph}>
            Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Types of Cookies We Use</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Essential Cookies:</strong> These cookies are necessary for the proper functioning of our Site. They enable you to navigate the Site and use its features, such as accessing secure areas.
            </li>
            <li className={styles.listItem}>
              <strong>Performance Cookies:</strong> These cookies collect information about how visitors use our Site, such as which pages are visited most often. This information is used to improve the Site's functionality and performance.
            </li>
            <li className={styles.listItem}>
              <strong>Functionality Cookies:</strong> These cookies allow our Site to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features.
            </li>
            <li className={styles.listItem}>
              <strong>Targeting/Advertising Cookies:</strong> These cookies are used to deliver advertisements that are more relevant to you and your interests. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. How We Use Cookies</h2>
          <p className={styles.paragraph}>We use cookies to:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Ensure the Site functions as expected</li>
            <li className={styles.listItem}>Enhance the performance and functionality of the Site</li>
            <li className={styles.listItem}>Understand how visitors use our Site and improve user experience</li>
            <li className={styles.listItem}>Deliver relevant advertising and track the effectiveness of our marketing campaigns</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Your Choices Regarding Cookies</h2>
          <p className={styles.paragraph}>You have several options for managing cookies:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies. Please note that if you disable cookies, some features of our Site may not function properly.
            </li>
            <li className={styles.listItem}>
              <strong>Opt-Out Tools:</strong> You can opt out of targeted advertising cookies by using industry-wide opt-out tools, such as the Digital Advertising Alliance (DAA) opt-out tool or the Network Advertising Initiative (NAI) opt-out tool.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Third-Party Cookies</h2>
          <p className={styles.paragraph}>
            We may also use third-party cookies from service providers, such as analytics and advertising partners. These cookies are subject to the privacy policies of the respective third parties.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Changes to This Cookie Policy</h2>
          <p className={styles.paragraph}>
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay informed about our use of cookies.
          </p>
        </section>
      </div>
    </div>
  );
};
