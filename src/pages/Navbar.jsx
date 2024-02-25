import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navigation}>
        <NavLink
          className={styles.clock}
          activeClassName={styles.active}
          to="/"
        >
          <div className={styles.clock1}>Clock</div>
        </NavLink>
        <NavLink
          className={styles.stopwatch}
          activeClassName={styles.active}
          to="/stopwatch"
        >
          <div className={styles.stopwatch1}>Stopwatch</div>
        </NavLink>
        <NavLink
          className={styles.timer}
          activeClassName={styles.active}
          to="/timer"
        >
          <div className={styles.timer1}>Timer</div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
