import MovingText from "./MovingText";

import styles from "./Calculator.module.scss";

const Calculator = (props) => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
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
        <label htmlFor="weight">Enter your weight here: </label>
        <input id="weight" type="float" />
        <button>CALCULATE</button>
      </form>
    </div>
  );
};

export default Calculator;
