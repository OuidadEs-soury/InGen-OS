import {
  FiActivity,
  FiCloudRain,
  FiDatabase,
  FiMap,
  FiShield,
  FiUsers,
} from "react-icons/fi";

import AppIcon from "../AppIcon/AppIcon";

import styles from "./AppLauncher.module.css";

interface AppLauncherProps {
  onOpenApplication: (applicationName: string) => void;
}

function AppLauncher({
  onOpenApplication,
}: AppLauncherProps) {
  const applications = [
    {
      name: "PARK",
      description: "Park Operations",
      Icon: FiMap,
    },
    {
      name: "GENETICS",
      description: "DNA Laboratory",
      Icon: FiDatabase,
    },
    {
      name: "REGISTRY",
      description: "Dinosaur Registry",
      Icon: FiActivity,
    },
    {
      name: "SECURITY",
      description: "Security Network",
      Icon: FiShield,
    },
    {
      name: "WEATHER",
      description: "Climate Control",
      Icon: FiCloudRain,
    },
    {
      name: "PERSONNEL",
      description: "Personnel Records",
      Icon: FiUsers,
    },
  ];

  return (
    <section className={styles.launcher}>
      <div className={styles.heading}>
        <p>SYSTEM APPLICATIONS</p>

        <h1>InGen Operations</h1>
      </div>

      <div className={styles.grid}>
        {applications.map((application) => (
          <AppIcon
            key={application.name}
            name={application.name}
            description={application.description}
            Icon={application.Icon}
            onClick={() =>
              onOpenApplication(application.name)
            }
          />
        ))}
      </div>
    </section>
  );
}

export default AppLauncher;