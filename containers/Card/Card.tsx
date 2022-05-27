import classNames from "classnames";

import styles from "./Card.module.scss";

function Card({
  children,
  className,
}: {
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
}) {
  return <div className={classNames(styles.card, className)}>{children}</div>;
}

export default Card;

Card.propTypes = {};
