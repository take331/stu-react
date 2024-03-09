import styles from "@/styles/Home.module.css";

export function Code({ code }) {
  return (
    <div>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>src/pages/{ code }.js</code>
      </p>
    </div>
  );
}
