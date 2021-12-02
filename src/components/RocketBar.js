import styles from "./RocketBar.module.scss";

const RocketBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.progress}>
      <img className={styles.image} src={"/white-rocket.png"} alt="rocket" />
      </div>
    </div>
  );
};

export default RocketBar;
