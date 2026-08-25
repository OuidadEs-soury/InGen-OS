import { useEffect, useState } from "react";

import styles from "./BootSequence.module.css";

import ProgressBar from "../ProgressBar/ProgressBar";
import TerminalLine from "../TerminalLine/TerminalLine";

import { useBootSequence } from "../../../hooks/useBootSequence";

interface BootSequenceProps {
  onComplete: () => void;
}

function BootSequence({ onComplete }: BootSequenceProps) {
  const { messages, progress, finished } = useBootSequence();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!finished) {
      return;
    }

    setIsExiting(true);

    const transitionTimer = window.setTimeout(() => {
      onComplete();
    }, 1000);

    return () => {
      window.clearTimeout(transitionTimer);
    };
  }, [finished, onComplete]);

  return (
    <div
      className={`${styles.container} ${
        isExiting ? styles.exiting : ""
      }`}
    >
      <div className={styles.terminal}>
        <div className={styles.header}>
          <span className={styles.headerStatus}>●</span>

          <span className={styles.title}>
            INGEN BIOS v7.4.1
          </span>

          <span className={styles.headerStatus}>●</span>
        </div>

        <div className={styles.content}>
          <div className={styles.systemInfo}>
            <span>INGEN OPERATIONS SYSTEM</span>
            <span>ISLA NUBLAR NODE 01</span>
          </div>

          <div className={styles.lines}>
            {messages.map((message, index) => (
              <TerminalLine
                key={`${message.text}-${index}`}
                text={message.text}
                status={message.status}
              />
            ))}
          </div>

          {finished && (
            <div className={styles.onlineMessage}>
              SYSTEM ONLINE
            </div>
          )}

          <div className={styles.progressSection}>
            <ProgressBar value={progress} />

            <div className={styles.progressInfo}>
              <span>BOOT PROGRESS</span>
              <span>{progress}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BootSequence;