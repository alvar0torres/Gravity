import { useRef, useState } from "react";

import MovingText from "./MovingText";

import styles from "./Calculator.module.scss";

const Calculator = (props) => {
  const weight = useRef();
  const [error, setError] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (isNaN(weight.current.value) || weight.current.value === "") {
      setError(true);
      return;
    }

    props.retrieveWeight(weight.current.value);

    props.setIsHomePage(false);
    props.setIsSubmitted(true);

    setTimeout(() => {
      props.setIsSubmitted(false);
      props.setIsLoaded(true);
    }, 3500);
  };


  return (
    <div className={styles.glass}>
      <h1>Welcome to Gravity!</h1>
      <MovingText />
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <label htmlFor="weight">Enter your weight here (kg): </label>
        <input ref={weight} id="weight" type="float" />
        {error && <div className={styles.error}>Please, enter a valid number.</div>}
        <button type="submit">CALCULATE</button>
      </form>
    </div>
  );
};

export default Calculator;
