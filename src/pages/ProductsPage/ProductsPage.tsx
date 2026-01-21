import { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductsPage.module.css';

// Import Amenities images
import Tray from '../../assets/images/Amenities/Tray.jpeg';
import Tray2 from '../../assets/images/Amenities/Tray2.jpeg';
import TrashCan from '../../assets/images/Amenities/TrashCan.jpeg';
import TrashCan2 from '../../assets/images/Amenities/TrashCan2.jpeg';
import FireResistantTrashCan from '../../assets/images/Amenities/FireResitant_TrashCan.jpeg';
import FireResistantTrashCan2 from '../../assets/images/Amenities/FireResistant_TrashCan2.jpeg';
import IceBucket from '../../assets/images/Amenities/IceBucket.jpeg';
import IceBucket2 from '../../assets/images/Amenities/IceBucket2.jpeg';

// Import Bath images
import TowelBar from '../../assets/images/Bath/TowelBar.jpg';
import TowelBar2 from '../../assets/images/Bath/TowelBar2.jpg';
import ShowerCurtains from '../../assets/images/Bath/ShowerCurtains.jpg';
import ShowerCurtains2 from '../../assets/images/Bath/ShowerCurtains2.jpg';
import Towels1 from '../../assets/images/Bath/Towels1.jpg';
import Towels2 from '../../assets/images/Bath/Towels2.jpg';
import AntiFogMirror from '../../assets/images/Bath/AntiFogMirror.jpg';

// Import Bedding images
import MetalBed1 from '../../assets/images/Bedding/MetalBeds/Product1.jpg';
import MetalBed2 from '../../assets/images/Bedding/MetalBeds/Product2.jpg';
import MetalBed3 from '../../assets/images/Bedding/MetalBeds/Product3.jpg';
import MetalBed4 from '../../assets/images/Bedding/MetalBeds/Product4.jpg';
import MetalBed5 from '../../assets/images/Bedding/MetalBeds/Product5.jpg';
import MetalBed6 from '../../assets/images/Bedding/MetalBeds/Product6.jpg';
import MetalBed7 from '../../assets/images/Bedding/MetalBeds/Product7.jpg';
import BunkBed1 from '../../assets/images/Bedding/BunkBeds/BunkBeds.jpg';
import BunkBed2 from '../../assets/images/Bedding/BunkBeds/2BunkBeds.jpg';
import BunkBed3 from '../../assets/images/Bedding/BunkBeds/3BunkBeds.jpg';
import BunkBed4 from '../../assets/images/Bedding/BunkBeds/4BunkBeds.jpg';
import BunkBed5 from '../../assets/images/Bedding/BunkBeds/5BunkBeds.jpg';
import ScrewlessBed1 from '../../assets/images/Bedding/ScrewlessBeds/Image1.jpg';
import ScrewlessBed2 from '../../assets/images/Bedding/ScrewlessBeds/Image1_1.jpg';
import ScrewlessBed3 from '../../assets/images/Bedding/ScrewlessBeds/Image1_2.jpg';
import ScrewlessBed4 from '../../assets/images/Bedding/ScrewlessBeds/Image1_3.jpg';
import ScrewlessBed5 from '../../assets/images/Bedding/ScrewlessBeds/Image1_4.jpg';
import WithScrewBed1 from '../../assets/images/Bedding/WithScrewBeds/WithScrew1.jpg';
import WithScrewBed2 from '../../assets/images/Bedding/WithScrewBeds/WithScrew2.jpg';
import BedFrame1 from '../../assets/images/Bedding/BedFrames/BedFrame1.jpg';
import BedFrame2 from '../../assets/images/Bedding/BedFrames/BedFrame2.jpg';
import BedFrame2_1 from '../../assets/images/Bedding/BedFrames/BedFrame2_1.jpg';
import BedFrame2_2 from '../../assets/images/Bedding/BedFrames/BedFrame2_2.jpg';

// Import Platform Beds images
import PlatformBed1 from '../../assets/images/Bedding/PlatformBeds/DSC_5437 copy.jpg';
import PlatformBed2 from '../../assets/images/Bedding/PlatformBeds/DSC_5491 copy.jpg';
import PlatformBed3 from '../../assets/images/Bedding/PlatformBeds/DSC_5500 copy.jpg';
import PlatformBedCover1 from '../../assets/images/CoverPhotos-PlatformBeds/14.png';
import PlatformBedCover2 from '../../assets/images/CoverPhotos-PlatformBeds/15.png';
import PlatformBedCover3 from '../../assets/images/CoverPhotos-PlatformBeds/7.png';
import PlatformBedCover4 from '../../assets/images/CoverPhotos-PlatformBeds/3Page.jpg';
import PlatformBedPrototype from '../../assets/images/CoverPhotos-PlatformBeds/BedPrototype1.jpg';

// Import Furniture images
import FurniturePD01 from '../../assets/images/Furniture/PD01.png';
import FurniturePD02 from '../../assets/images/Furniture/PD02.png';
import FurniturePD03 from '../../assets/images/Furniture/PD03.png';
import FurniturePD04 from '../../assets/images/Furniture/PD04.png';
import FurniturePD05 from '../../assets/images/Furniture/PD05.png';
import FurniturePD06 from '../../assets/images/Furniture/PD06.png';
import FurniturePD07 from '../../assets/images/Furniture/PD07.png';
import FurniturePD08 from '../../assets/images/Furniture/PD08.png';
import FurniturePD09 from '../../assets/images/Furniture/PD09.png';
import FurnitureENV1 from '../../assets/images/Furniture/ENV1.jpg';
import FurnitureENV2 from '../../assets/images/Furniture/ENV2.jpg';
import FurnitureENV3 from '../../assets/images/Furniture/ENV3.jpg';
import FurnitureFullWide from '../../assets/images/Furniture/FullWideShot.jpeg';

type Category = 'all' | 'amenities' | 'bath' | 'bedding' | 'furniture' | 'platform-beds';

interface Product {
  id: string;
  name: string;
  image: string;
  category: Category;
}

const products: Product[] = [
  // Amenities
  { id: 'amenity-1', name: 'Serving Tray', image: Tray, category: 'amenities' },
  { id: 'amenity-2', name: 'Serving Tray', image: Tray2, category: 'amenities' },
  { id: 'amenity-3', name: 'Trash Can', image: TrashCan, category: 'amenities' },
  { id: 'amenity-4', name: 'Trash Can', image: TrashCan2, category: 'amenities' },
  { id: 'amenity-5', name: 'Fire Resistant Trash Can', image: FireResistantTrashCan, category: 'amenities' },
  { id: 'amenity-6', name: 'Fire Resistant Trash Can', image: FireResistantTrashCan2, category: 'amenities' },
  { id: 'amenity-7', name: 'Ice Bucket', image: IceBucket, category: 'amenities' },
  { id: 'amenity-8', name: 'Ice Bucket', image: IceBucket2, category: 'amenities' },

  // Bath
  { id: 'bath-1', name: 'Towel Bar', image: TowelBar, category: 'bath' },
  { id: 'bath-2', name: 'Towel Bar', image: TowelBar2, category: 'bath' },
  { id: 'bath-3', name: 'Shower Curtains', image: ShowerCurtains, category: 'bath' },
  { id: 'bath-4', name: 'Shower Curtains', image: ShowerCurtains2, category: 'bath' },
  { id: 'bath-5', name: 'Towels', image: Towels1, category: 'bath' },
  { id: 'bath-6', name: 'Towels', image: Towels2, category: 'bath' },
  { id: 'bath-7', name: 'Anti Fog Mirror', image: AntiFogMirror, category: 'bath' },

  // Bedding
  { id: 'bedding-1', name: 'Metal Bed', image: MetalBed1, category: 'bedding' },
  { id: 'bedding-2', name: 'Metal Bed', image: MetalBed2, category: 'bedding' },
  { id: 'bedding-3', name: 'Metal Bed', image: MetalBed3, category: 'bedding' },
  { id: 'bedding-4', name: 'Metal Bed', image: MetalBed4, category: 'bedding' },
  { id: 'bedding-5', name: 'Metal Bed', image: MetalBed5, category: 'bedding' },
  { id: 'bedding-6', name: 'Metal Bed', image: MetalBed6, category: 'bedding' },
  { id: 'bedding-7', name: 'Metal Bed', image: MetalBed7, category: 'bedding' },
  { id: 'bedding-8', name: 'Bunk Bed', image: BunkBed1, category: 'bedding' },
  { id: 'bedding-9', name: 'Bunk Bed', image: BunkBed2, category: 'bedding' },
  { id: 'bedding-10', name: 'Bunk Bed', image: BunkBed3, category: 'bedding' },
  { id: 'bedding-11', name: 'Bunk Bed', image: BunkBed4, category: 'bedding' },
  { id: 'bedding-12', name: 'Bunk Bed', image: BunkBed5, category: 'bedding' },
  { id: 'bedding-13', name: 'Screwless Bed', image: ScrewlessBed1, category: 'bedding' },
  { id: 'bedding-14', name: 'Screwless Bed', image: ScrewlessBed2, category: 'bedding' },
  { id: 'bedding-15', name: 'Screwless Bed', image: ScrewlessBed3, category: 'bedding' },
  { id: 'bedding-16', name: 'Screwless Bed', image: ScrewlessBed4, category: 'bedding' },
  { id: 'bedding-17', name: 'Screwless Bed', image: ScrewlessBed5, category: 'bedding' },
  { id: 'bedding-18', name: 'With Screw Bed', image: WithScrewBed1, category: 'bedding' },
  { id: 'bedding-19', name: 'With Screw Bed', image: WithScrewBed2, category: 'bedding' },
  { id: 'bedding-20', name: 'Bed Frame', image: BedFrame1, category: 'bedding' },
  { id: 'bedding-21', name: 'Bed Frame', image: BedFrame2, category: 'bedding' },
  { id: 'bedding-22', name: 'Bed Frame', image: BedFrame2_1, category: 'bedding' },
  { id: 'bedding-23', name: 'Bed Frame', image: BedFrame2_2, category: 'bedding' },

  // Platform Beds
  { id: 'platform-1', name: 'Platform Bed', image: PlatformBed1, category: 'platform-beds' },
  { id: 'platform-2', name: 'Platform Bed', image: PlatformBed2, category: 'platform-beds' },
  { id: 'platform-3', name: 'Platform Bed', image: PlatformBed3, category: 'platform-beds' },
  { id: 'platform-4', name: 'Platform Bed', image: PlatformBedCover1, category: 'platform-beds' },
  { id: 'platform-5', name: 'Platform Bed', image: PlatformBedCover2, category: 'platform-beds' },
  { id: 'platform-6', name: 'Platform Bed', image: PlatformBedCover3, category: 'platform-beds' },
  { id: 'platform-7', name: 'Platform Bed', image: PlatformBedCover4, category: 'platform-beds' },
  { id: 'platform-8', name: 'Platform Bed Prototype', image: PlatformBedPrototype, category: 'platform-beds' },

  // Furniture
  { id: 'furniture-1', name: 'Furniture', image: FurniturePD01, category: 'furniture' },
  { id: 'furniture-2', name: 'Furniture', image: FurniturePD02, category: 'furniture' },
  { id: 'furniture-3', name: 'Furniture', image: FurniturePD03, category: 'furniture' },
  { id: 'furniture-4', name: 'Furniture', image: FurniturePD04, category: 'furniture' },
  { id: 'furniture-5', name: 'Furniture', image: FurniturePD05, category: 'furniture' },
  { id: 'furniture-6', name: 'Furniture', image: FurniturePD06, category: 'furniture' },
  { id: 'furniture-7', name: 'Furniture', image: FurniturePD07, category: 'furniture' },
  { id: 'furniture-8', name: 'Furniture', image: FurniturePD08, category: 'furniture' },
  { id: 'furniture-9', name: 'Furniture', image: FurniturePD09, category: 'furniture' },
  { id: 'furniture-10', name: 'Furniture Environment', image: FurnitureENV1, category: 'furniture' },
  { id: 'furniture-11', name: 'Furniture Environment', image: FurnitureENV2, category: 'furniture' },
  { id: 'furniture-12', name: 'Furniture Environment', image: FurnitureENV3, category: 'furniture' },
  { id: 'furniture-13', name: 'Furniture Collection', image: FurnitureFullWide, category: 'furniture' },
];

const categories = [
  { id: 'all' as Category, label: 'All Products' },
  { id: 'amenities' as Category, label: 'Amenities' },
  { id: 'bath' as Category, label: 'Bath' },
  { id: 'bedding' as Category, label: 'Bedding' },
  { id: 'furniture' as Category, label: 'Furniture' },
  { id: 'platform-beds' as Category, label: 'Platform Beds' },
];

const categoryTitles: Record<Category, string> = {
  all: 'All Products',
  amenities: 'Amenities',
  bath: 'Bath',
  bedding: 'Bedding',
  furniture: 'Furniture',
  'platform-beds': 'Platform Beds',
};

export const ProductsPage = () => {
  const { category } = useParams<{ category?: string }>();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [sortBy, setSortBy] = useState('recommended');

  // Sync selected category with URL param
  useEffect(() => {
    if (category && categories.some((c) => c.id === category)) {
      setSelectedCategory(category as Category);
    } else {
      setSelectedCategory('all');
    }
  }, [category]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>Browse by</h3>
          <ul className={styles.categoryList}>
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  className={`${styles.categoryButton} ${
                    selectedCategory === category.id ? styles.active : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className={styles.mainContent}>
          <div className={styles.header}>
            <div>
              <h1 className={styles.title}>{categoryTitles[selectedCategory]}</h1>
              <p className={styles.description}>
                Discover Shree Umiya Enterprise's unique range of products for your hospitality needs.
              </p>
            </div>
          </div>

          <div className={styles.toolbar}>
            <span className={styles.productCount}>{filteredProducts.length} products</span>
            <div className={styles.sortContainer}>
              <label htmlFor="sort">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.sortSelect}
              >
                <option value="recommended">Recommended</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>

          <div className={styles.productGrid}>
            {filteredProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.imageContainer}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                  />
                </div>
                <h4 className={styles.productName}>{product.name}</h4>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
