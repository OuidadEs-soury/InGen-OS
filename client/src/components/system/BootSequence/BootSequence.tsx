import styles from "./BootSequence.module.css";

import { useBootSequence } from "../../../hooks/useBootSequence";

function BootSequence() {
  const { messages } = useBootSequence();

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>InGen OS</h1>

      <div className={styles.terminal}>
        {messages.map((message, index) => (
          <p
            key={index}
            className={styles.line}
          >
            &gt; {message}
          </p>
        ))}
      </div>
    </div>
  );
}

export default BootSequence;