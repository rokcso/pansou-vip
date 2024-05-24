import styles from "./platformTag.module.css";

export default function PlatformTag({ platformName }) {
  return <div className={styles.tag}>🖥️ {platformName}</div>;
}
