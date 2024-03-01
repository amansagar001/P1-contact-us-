import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`container ${styles.navigation}`}>
      <div className={styles.logo}>
        <img src="/images/brand_logo.png" alt="nike" />
      </div>
      <div className={styles.logo}>
        <img src="./images/nike-2-logo-svg-vector.svg" alt="nike" />
      </div>
      <div className={styles.centeer}>
        <img src="" alt="" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Orders</li>
      </ul>
    </nav>
  );
};

export default Navigation;
