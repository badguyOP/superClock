import styles from "./ClockTimer.module.css";
import { useState, useEffect } from "react";

const ClockTimer = () => {
  const [time, setTime] = useState("00:00:00"); 
  const [timeRunning, setTimeRunning] = useState(false);

  useEffect(() => {
    if (!timeRunning) return; 

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRunning, time]);

  const Start = () => {
    setTimeRunning(true);
  };

  const Stop = () => {
    setTimeRunning(false);
  };

  const Reset = () => {
    setTimeRunning(false);
    setTime(0);
  };

  const Min = () => {
    setTime((prevTime) => prevTime * 60 ); 
  };

  const Hr = () => {
    setTime((prevTime) => prevTime * 3600 ); 
  };

  const handleInputChange = (event) => {
    const newTime = parseInt(event.target.value, 10);
    if (!isNaN(newTime) && newTime >= 0) {
      setTime(newTime);
    }
  };

  return (
    <div className={styles.clockTimer}>
      <div className={styles.h1}>
        <h1 className={styles.timer}>TIMER</h1>
      </div>
      <div className={styles.timer1}>
        <h2 className={styles.timer}>{time}</h2>
      </div>
      <input
        className={styles.input}
        placeholder="00:00:00"
        type="number"
        value={time} 
        onChange={handleInputChange} 
      />
      <div className={styles.minbuttons}>
        <button className={styles.m}>
          <div className={styles.min} onClick={Min}>Min</div>
        </button>
        <button className={styles.m}>
          <div className={styles.min} onClick={Hr}>Hour</div>
        </button>
      </div>
      <div className={styles.buttons}>
        <button className={styles.start}>
          <div className={styles.start1} onClick={Start}>Start</div>
        </button>
        <button className={styles.start}>
          <div className={styles.start1} onClick={Stop}>Stop</div>
        </button>
        <button className={styles.start}>
          <div className={styles.start1} onClick={Reset}>Reset</div>
        </button>
      </div>
    </div>
  );
};

export default ClockTimer;
