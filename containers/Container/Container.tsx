import styles from "./Container.module.scss";

function Container({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
