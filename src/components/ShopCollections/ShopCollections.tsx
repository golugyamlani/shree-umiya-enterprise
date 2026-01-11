import { Link } from 'react-router-dom';
import styles from './ShopCollections.module.css';

import bedsImg from '../../assets/images/beds.jpeg';
import amenitiesImg from '../../assets/images/ameneties.jpeg';
import bathImg from '../../assets/images/bath_towel.jpeg';

const collections = [
  {
    id: 1,
    name: 'Platform Beds',
    image: bedsImg,
    link: '/products/platform-beds',
  },
  {
    id: 2,
    name: 'Amenities',
    image: amenitiesImg,
    link: '/products/amenities',
  },
  {
    id: 3,
    name: 'Bath',
    image: bathImg,
    link: '/products/bath',
  },
];

export const ShopCollections = () => {
  return (
    <section className={styles.shopCollections}>
      <div className={styles.container}>
        <h2 className={styles.title}>Shop Collections</h2>

        <div className={styles.grid}>
          {collections.map((collection) => (
            <Link key={collection.id} to={collection.link} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={collection.image}
                  alt={collection.name}
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                  <h3 className={styles.collectionName}>{collection.name}</h3>
                  <span className={styles.shopLink}>Shop Collection</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
