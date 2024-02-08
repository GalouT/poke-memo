import { useState, useEffect } from "react";
import "./App.css";
import Card from "./componentes/Card";
import confetti from "canvas-confetti";
import { WinnerModal } from "./componentes/WinnerModal";
import { IMAGES } from "./import";
import imageTitle from "/src/images/6543d0e84fd8dd7b77f40a5e907f7581.png";

function App() {
  const [guessed, setGuessed] = useState([]);
  const [selected, setSelected] = useState([]);

  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (selected.length === 1) {
      setTimerRunning(true);
    }

    if (selected.length === 2) {
      if (
        selected[0] !== selected[1] &&
        selected[0].split("|")[1] === selected[1].split("|")[1]
      ) {
        confetti();
        setGuessed((guessed) => guessed.concat(selected));
      }
      setTimeout(() => {
        setSelected([]);
      }, 300);
    }
  }, [selected]);

  useEffect(() => {
    let interval;

    if (timerRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerRunning]);

  useEffect(() => {
    if (guessed.length === IMAGES.length) {
      setTimerRunning(false);
    }
  }, [guessed]);

  const handleReset = () => {
    location.reload();
    setGuessed([]);
    setSelected([]);

    setTimerRunning(false);
    setSeconds(0);
  };

  return (
    <div className="app">
      <div>
        <img className="title" src={imageTitle} />
      </div>
      <div className="card-container">
        {IMAGES.map((image, index) => {
          const [, url] = image.split("|");
          return guessed.length === IMAGES.length ? (
            <WinnerModal
              key={index}
              handleReset={handleReset}
              seconds={seconds}
            />
          ) : (
            <Card
              key={index}
              url={url}
              image={image}
              isSelected={selected.includes(image)}
              isGuessed={guessed.includes(image)}
              setSelected={setSelected}
              selected={selected}
            />
          );
        })}
      </div>
      <button className="reset-button" onClick={handleReset}>
        Reiniciar
      </button>
      <div className="timer-container">
        <span>Tiempo: {seconds} segundos</span>
      </div>
    </div>
  );
}

export default App;
