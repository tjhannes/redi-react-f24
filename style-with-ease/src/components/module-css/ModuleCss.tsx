import styles from "./ModuleCss.module.css";

export default function ModuleCss() {
  return (
    <div className="showcase-box">
      <button className="button">Normal</button>
      <button className={styles.buttonLocale}>Primary</button>
    </div>
  );
}
