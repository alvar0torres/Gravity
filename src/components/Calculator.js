import MovingText from "./MovingText";

import styles from "./Calculator.module.scss";

const Calculator = (props) => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.setIsSubmitted(true);
  };


  return (
    <div className={styles.glass}>
      <h1>Welcome to Gravity!</h1>
      <MovingText />
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <label htmlFor="weight">Enter your weight here: </label>
        <input id="weight" type="float" />
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default Calculator;
