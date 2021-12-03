import Header from "./components/Header";
import Calculator from "./components/Calculator";
import RocketBar from "./components/RocketBar";
import Planets from "./components/Planets";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

import styles from "./App.module.scss";

const surface_acceleration = {
  moon: 1.622,
  mercury: 3.7,
  venus: 8.87,
  mars: 3.71,
  jupiter: 24.79,
  saturn: 10.44,
  uranus: 8.69,
  neptune: 11.0,
};

function App() {
  const [isHomePage, setIsHomePage] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [enteredWeight, setEnteredWeight] = useState();
  const [results, setResults] = useState();

  useEffect(() => {
    let resultsArr = [];

    for (const [key, value] of Object.entries(surface_acceleration)) {
      resultsArr.push({
        planet: key,
        result: ((parseFloat(enteredWeight) * value) / 9.8).toFixed(2),
      });
    }

    resultsArr.push({ planet: "earth", result: parseFloat(enteredWeight).toFixed(2) });

    setResults(resultsArr);
  
  }, [enteredWeight]);

  const retrieveWeight = (weight) => {
    setEnteredWeight(weight);
  };

  return (
    <section className={styles["whole-page"]}>
      <Header />
      {isHomePage && (
        <Calculator
          retrieveWeight={retrieveWeight}
          setIsSubmitted={setIsSubmitted}
          setIsLoaded={setIsLoaded}
          setIsHomePage={setIsHomePage}
        />
      )}
      {isSubmitted && <RocketBar />}
      {isLoaded && (
        <Planets
          results={results}
          setIsSubmitted={setIsSubmitted}
          setIsLoaded={setIsLoaded}
          setIsHomePage={setIsHomePage}
        />
      )}
      <Footer />
    </section>
  );
}

export default App;
