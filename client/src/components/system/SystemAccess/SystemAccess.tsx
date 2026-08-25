import { useState } from "react";
import { FiArrowRight, FiLock } from "react-icons/fi";

import styles from "./SystemAccess.module.css";

interface SystemAccessProps {
  onAccessGranted: () => void;
}

function SystemAccess({
  onAccessGranted,
}: SystemAccessProps) {
  const [accessCode, setAccessCode] = useState("");

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (accessCode.trim().length > 0) {
      onAccessGranted();
    }
  }

  return (
    <main className={styles.container}>
      <section className={styles.accessPanel}>
        <div className={styles.emblem}>
          <span>INGEN</span>
        </div>

        <div className={styles.heading}>
          <p className={styles.eyebrow}>
            RESTRICTED PERSONNEL NETWORK
          </p>

          <h1>System Access</h1>

          <p>
            InGen operations workstation.
            Personnel authorization required.
          </p>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <label htmlFor="access-code">
            ACCESS IDENTIFIER
          </label>

          <div className={styles.inputWrapper}>
            <FiLock />

            <input
              id="access-code"
              type="text"
              placeholder="ENTER ACCESS ID"
              value={accessCode}
              onChange={(event) =>
                setAccessCode(event.target.value)
              }
            />
          </div>

          <button type="submit">
            ACCESS SYSTEM
            <FiArrowRight />
          </button>
        </form>

        <p className={styles.footer}>
          INGEN SECURITY PROTOCOL • AUTHORIZED PERSONNEL ONLY
        </p>
      </section>
    </main>
  );
}

export default SystemAccess;
