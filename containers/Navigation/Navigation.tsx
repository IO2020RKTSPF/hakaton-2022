import Container from "@containers/Container/Container";
import Link from "next/link";

import config from "../../config";
import Icon from "../Icon/Icon";
import styles from "./Navigation.module.scss";

function Navigation({}) {
  return (
    <Container>
      <nav className={styles.navigation}>
        <Link href={config.homepagePath}>
          <a className={styles.logo}>Quicktime</a>
        </Link>
        <Link href={config.menuPath}>
          <a className={styles.menu}>
            <Icon type="menu" />
          </a>
        </Link>
      </nav>
    </Container>
  );
}

export default Navigation;

Navigation.propTypes = {};
