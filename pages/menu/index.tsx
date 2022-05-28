import Link from "next/link";

import config from "../../config";
import Container from "../../containers/Container/Container";
import Icon from "../../containers/Icon/Icon";
import styles from "./Menu.module.scss";
import useIsAuth from "../../hooks/useIsAuth";

function Menu({}) {
  const isAuth = useIsAuth();

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
          {isAuth && (
            <Entry label="Dodaj estymacje" href={config.addEstimatePath} />
          )}
          {isAuth && <Entry label="Twoje estymacje" href={config.userPath} />}
          {isAuth && <Entry label="Wyloguj się" href={config.logoutPath} />}
          {!isAuth && <Entry label="Zaloguj się" href={config.loginPath} />}
          {!isAuth && (
            <Entry label="Zarejestruj się" href={config.registerPath} />
          )}
        </ul>
      </Container>
    </nav>
  );
}

export default Menu;
