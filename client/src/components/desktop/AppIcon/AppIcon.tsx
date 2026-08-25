import type { IconType } from "react-icons";

import styles from "./AppIcon.module.css";

interface AppIconProps {
  name: string;
  description: string;
  Icon: IconType;
  onClick: () => void;
}

function AppIcon({
  name,
  description,
  Icon,
  onClick,
}: AppIconProps) {
  return (
    <button
      className={styles.appIcon}
      onClick={onClick}
      type="button"
    >
      <span className={styles.icon}>
        <Icon />
      </span>

      <span className={styles.name}>
        {name}
      </span>

      <span className={styles.description}>
        {description}
      </span>
    </button>
  );
}

export default AppIcon;