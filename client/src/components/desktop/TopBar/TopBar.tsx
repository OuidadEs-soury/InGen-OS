import {
  FiActivity,
  FiCpu,
  FiRadio,
  FiWifi,
} from "react-icons/fi";

import { useClock } from "../../../hooks/useClock";

import styles from "./TopBar.module.css";

function TopBar() {
  const time = useClock();

  return (
    <header className={styles.topBar}>
      <div className={styles.brand}>
        <FiActivity />

        <span>INGEN OS</span>

        <span className={styles.version}>
          v7.4.1
        </span>
      </div>

      <div className={styles.centerStatus}>
        <FiCpu />

        <span>ISLA NUBLAR NODE 01</span>

        <span className={styles.online}>
          ONLINE
        </span>
      </div>

      <div className={styles.systemInfo}>
        <FiWifi />

        <FiRadio />

        <span className={styles.time}>
          {time}
        </span>
      </div>
    </header>
  );
}

export default TopBar;