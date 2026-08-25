import { useState } from "react";

import AppLauncher from "../AppLauncher/AppLauncher";
import TopBar from "../TopBar/TopBar";

import styles from "./Desktop.module.css";

function Desktop() {
  const [lastOpenedApplication, setLastOpenedApplication] =
    useState<string | null>(null);

  return (
    <main className={styles.desktop}>
      <div className={styles.backgroundGlow} />

      <TopBar />

      <div className={styles.content}>
        <AppLauncher
          onOpenApplication={(applicationName) =>
            setLastOpenedApplication(applicationName)
          }
        />

        {lastOpenedApplication && (
          <div className={styles.notification}>
            <span className={styles.notificationLabel}>
              APPLICATION REQUEST
            </span>

            <strong>
              {lastOpenedApplication}
            </strong>

            <span>
              Module initialization pending...
            </span>
          </div>
        )}
      </div>
    </main>
  );
}

export default Desktop;