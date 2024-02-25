import styles from "./ClockStopWatch.module.css";
import { useState, useEffect } from 'react';

const ClockStopWatch = () => {

  const [time, setTime] = useState(0);
  const [timeRunning, setTimeRunning] = useState(false);

  useEffect(() => {
    if (!timeRunning) return; 

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRunning]);

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

  return (
    <div className={styles.clockStopwatch}>
      <div className={styles.h1}>
        <h1 className={styles.stopwatch}>STOPWATCH</h1>
      </div>
      <div className={styles.timer}>
        <h2 className={styles.pm}>{time}</h2>
      </div>
      <div className={styles.buttons}>
        <button className={styles.start}>
          <div className={styles.start1} onClick={Start}>Start</div>
        </button>
        <button className={styles.stop}>
          <div className={styles.stop1} onClick={Stop}>Stop</div>
        </button>
        <button className={styles.reset}>
          <div className={styles.reset1} onClick={Reset}>Reset</div>
        </button>
      </div>
    </div>
  );
};

export default ClockStopWatch;
