import { Link } from 'react-router-dom';
import styles from './ProductRange.module.css';

import bioBowlsImg from '../../assets/images/BlackRippleCups.jpg';
import bioPlatesImg from '../../assets/images/RippleBrown2.jpg';
import rippleCupsImg from '../../assets/images/RippleCups.jpg';
import doubleLayerCupsImg from '../../assets/images/DoubleLayerCups.jpg';
import singleLayerCupsImg from '../../assets/images/SingleLayerCups.jpg';

const products = [
  {
    id: 1,
    name: 'Bio Bowls',
    image: bioBowlsImg,
    link: '/products/paper-bio',
  },
  {
    id: 2,
    name: 'Bio Plates',
    image: bioPlatesImg,
    link: '/products/paper-bio',
  },
  {
    id: 3,
    name: 'Ripple Paper Cups',
    image: rippleCupsImg,
    link: '/products/paper-bio',
  },
  {
    id: 4,
    name: 'Double Layer Paper Cups',
    image: doubleLayerCupsImg,
    link: '/products/paper-bio',
  },
  {
    id: 5,
    name: 'Single Layer Paper Cups',
    image: singleLayerCupsImg,
    link: '/products/paper-bio',
  },
];

export const ProductRange = () => {
  return (
    <section className={styles.productRange}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Range of Products for Hospitality</h2>

        <div className={styles.grid}>
          {products.map((product) => (
            <Link key={product.id} to={product.link} className={styles.productCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.image}
                />
              </div>
              <span className={styles.productName}>{product.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
