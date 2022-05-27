import Link from "next/link";

import config from "../../config";
import Container from "../../containers/Container/Container";
import Icon from "../../containers/Icon/Icon";
import styles from "./Menu.module.scss";

function Menu({}) {
  const Entry = ({ label, href }: { label: string; href: string }) => {
    return (
      <li className={styles.linkWrapper}>
        <Link href={href}>
          <a className={styles.link}>
            <span>{label}</span>
            <Icon type="arrow" />
          </a>
        </Link>
      </li>
    );
  };

  return (
    <nav>
      <Container>
        <ul className={styles.navigation}>
          <Entry label="Start" href={config.homepagePath} />
          <Entry label="Dodaj estymacje" href={config.homepagePath} />
          <Entry label="Twoje estymacje" href={config.userPath} />
          <Entry label="Zaloguj się" href={config.loginPath} />
          <Entry label="Zarejestruj się" href={config.registerPath} />
        </ul>
      </Container>
    </nav>
  );
}

export default Menu;
