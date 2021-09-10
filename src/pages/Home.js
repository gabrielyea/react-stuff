import Gallery from "../components/gallery/Gallery";
import useThemify from "../components/themify/useThemify";
import styles from './homeStyle.module.css';

const Home = () => {
  const [setTheme] = useThemify('green');

  return (
    <div className={styles.mainContainer}>
      <header className={styles.head}>
        HELLO THERE
      </header>
      <Gallery />
      <div className={styles.options}>
        <button
          onClick={() => setTheme('green')}
        >
          Set green theme
        </button>
        <button
          onClick={() => setTheme('gold')}
        >
          Set gold theme
        </button>
      </div>
    </div>
  );
};

export default Home;
