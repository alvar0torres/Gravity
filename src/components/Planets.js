import styles from "./Planets.module.scss";

const Planets = (props) => {
  const newCalculationHandler = () => {
    props.setIsHomePage(true);
    props.setIsLoaded(false);
    props.setIsSubmitted(false);
  };

  return (
    <section className={styles.planets}>
      <button onClick={newCalculationHandler}>NEW</button>
      <div className={styles.container}>
        <div className={styles.planet}>
          <div className={styles["image-container"]}>
            <img src="/mercury.png" alt="Mercury" />
          </div>
          <div className={styles.text}>
            <h1>MERCURY</h1>
            <h3>{props.results[1].result} kg</h3>
          </div>
        </div>

        <div className={styles.planet}>
          <div className={styles["image-container"]}>
            <img src="/venus.png" alt="Venus" />
          </div>
          <div className={styles.text}>
            <h1>VENUS</h1>
            <h3>{props.results[2].result} kg</h3>
          </div>
        </div>

        <div className={styles.planet}>
          <div className={styles["image-container"]}>
            <img src="/earth_moon.png" alt="The moon" />
          </div>
          <div className={styles.text}>
            <h1>THE MOON</h1>
            <h3>{props.results[0].result} kg</h3>
          </div>
        </div>

        <div className={styles.planet}>
          <div className={styles["image-container"]}>
            <img src="/mars.png" alt="Mars" />
          </div>
          <div className={styles.text}>
            <h1>MARS</h1>
            <h3>{props.results[3].result} kg</h3>
          </div>
        </div>

        <div className={styles.planet}>
          <div className={styles["image-container"]}>
            <img src="/jupiter.png" alt="Jupiter" />
          </div>
          <div className={styles.text}>
            <h1>JUPITER</h1>
            <h3>{props.results[4].result} kg</h3>
          </div>
        </div>

        <div className={styles.planet}>
          <div className={styles["image-container"]}>
            <img src="/saturn.png" alt="Saturn" />
          </div>
          <div className={styles.text}>
            <h1>SATURN</h1>
            <h3>{props.results[5].result} kg</h3>
          </div>
        </div>

        <div className={styles.planet}>
          <div className={styles["image-container"]}>
            <img src="/uranus.png" alt="Uranus" />
          </div>
          <div className={styles.text}>
            <h1>URANUS</h1>
            <h3>{props.results[6].result} kg</h3>
          </div>
        </div>

        <div className={styles.planet}>
          <div className={styles["image-container"]}>
            <img src="/neptune.png" alt="Neptune" />
          </div>
          <div className={styles.text}>
            <h1>NEPTUNE</h1>
            <h3>{props.results[7].result} kg</h3>
          </div>
        </div>

        <div className={styles.planet}>
          <div className={styles["image-container"]}>
            <img src="/earth.png" alt="Earth" />
          </div>
          <div className={styles.text}>
            <h1>EARTH</h1>
            <h3>{props.results[8].result} kg</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planets;
