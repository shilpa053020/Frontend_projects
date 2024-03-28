import { useEffect,useState } from "react";
function App() {
  const [start, setStart] = useState(false);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [centi, setCenti] = useState(0);

  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setCenti(prevCenti => {
          let newCenti = prevCenti + 1;
          let newSec = sec;
          let newMin = min;

          if (newCenti === 100) {
            newCenti = 0;
            newSec++;
          }

          if (newSec === 60) {
            newSec = 0;
            newMin++;
          }

          setSec(newSec);
          setMin(newMin);

          return newCenti;
        });
      }, 10);
    } 
    return () => clearInterval(interval);
  }, [start, min, sec]);

  function handleBtn() {
    setStart(prevStart => !prevStart); 
  }

  function handleRestart() {
    setStart(false);
    setMin(0);
    setSec(0);
    setCenti(0);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>StopWatch</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>{min < 10 ? `0${min}` : min}:</p>
        <p>{sec < 10 ? `0${sec}` : sec}:</p>
        <p>{centi < 10 ? `0${centi}` : centi}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleBtn}>{start ? "Stop" : "Start"}</button>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </>
  );
}

export default App;
