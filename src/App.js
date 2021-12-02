import Header from "./components/Header";
import Calculator from "./components/Calculator";
import RocketBar from "./components/RocketBar";
import { useState } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div>
      <Header />
      {!isSubmitted && <Calculator setIsSubmitted={setIsSubmitted}/>}
      {isSubmitted && <RocketBar />}
    </div>
  );
}

export default App;
