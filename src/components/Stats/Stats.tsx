import styles from './Stats.module.css';

const stats = [
  { value: '10K+', label: 'SHIPMENTS COMPLETED' },
  { value: '200+', label: 'LOYAL CUSTOMERS' },
  { value: '80+', label: 'TEAM OF EXPERTS' },
  { value: '50+', label: 'TEAM MEMBERS' },
];

export const Stats = () => {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
