import styles from './itemStyle.module.css';

const Item = ({ message }) => (
  <div className={styles.item}>
    { message }
  </div>
)

export default Item;
