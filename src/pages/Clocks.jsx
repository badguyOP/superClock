import styles from "./Clock.module.css";
import { useState, useEffect } from "react";

const ClockTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.clock}>
      <h1 className={styles.clock1}>CLOCK</h1>
      <div className={styles.timer}>
        <h2 className={styles.pm}>{date.toLocaleTimeString()}</h2>
      </div>
    </div>
  );
};

export default ClockTime;
