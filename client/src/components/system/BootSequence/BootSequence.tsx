import styles from "./BootSequence.module.css";

import { useBootSequence } from "../../../hooks/useBootSequence";

import ProgressBar from "../ProgressBar/ProgressBar";

function BootSequence() {
  const { messages, progress } = useBootSequence();

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>InGen OS</h1>

      <div className={styles.terminal}>
        {messages.map((message, index) => (
          <div
            className={styles.row}
            key={index}
          >
            <span className={styles.command}>
              &gt; {message.text}
            </span>

            <span className={styles.status}>
              [{message.status}]
            </span>
          </div>
        ))}

        <ProgressBar value={progress} />
      </div>
    </div>
  );
}

export default BootSequence;