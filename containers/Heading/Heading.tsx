import styles from "./Heading.module.scss";

function Heading({ label }: { label: string }) {
  return <h1 className={styles.h1}>{label}</h1>;
}

export default Heading;

Heading.propTypes = {};
