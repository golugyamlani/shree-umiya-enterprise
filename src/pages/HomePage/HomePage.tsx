import {
  Hero,
  Stats,
  ProductRange,
  ShopCollections,
  PatentedProduct,
  PrecisionExcellence,
  Testimonials,
} from '../../components';
import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <Hero />
      <Stats />
      <ProductRange />
      <ShopCollections />
      <PatentedProduct />
      <PrecisionExcellence />
      <Testimonials />
    </div>
  );
};
