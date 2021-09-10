import Item from '../Item/Item';
import styles from './galleryStyle.module.css';

const Gallery = () => (
  <ul className={styles.mainContainer}>
    <li>
      <Item message="Item 1" />
    </li>
    <li>
      <Item message="Item 2" />
    </li>
    <li>
      <Item message="Item 3" />
    </li>
    <li>
      <Item message="Item 4" />
    </li>
  </ul>
);

export default Gallery;

