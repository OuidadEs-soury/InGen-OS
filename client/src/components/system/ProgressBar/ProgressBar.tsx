import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  value: number;
}

function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.fill}
        style={{
          width: `${value}%`,
        }}
      />
    </div>
  );
}

export default ProgressBar;