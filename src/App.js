import Header from "./components/Header";
import Calculator from "./components/Calculator";
import RocketBar from "./components/RocketBar";
import Planets from "./components/Planets";
import Footer from "./components/Footer";
import { useState } from "react";

import styles from "./App.module.scss";

function App() {
  const [isHomePage, setIsHomePage] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className={styles["whole-page"]}>
      <Header />
      {isHomePage && (
        <Calculator
          setIsSubmitted={setIsSubmitted}
          setIsLoaded={setIsLoaded}
          setIsHomePage={setIsHomePage}
        />
      )}
      {isSubmitted && <RocketBar />}
      {isLoaded && (
        <Planets
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
