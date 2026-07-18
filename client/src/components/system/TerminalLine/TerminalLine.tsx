import styles from "./TerminalLine.module.css";
import { useTypewriter } from "../../../hooks/useTypewriter";

interface TerminalLineProps {
  text: string;
  status: string;
}

function TerminalLine({
  text,
  status,
}: TerminalLineProps) {

  const typed = useTypewriter(text);

  return (
    <div className={styles.row}>
      <span className={styles.command}>
        &gt; {typed}
        <span className={styles.cursor}>█</span>
      </span>

      {typed.length === text.length && (
        <span className={styles.status}>
          [{status}]
        </span>
      )}
    </div>
  );
}

export default TerminalLine;