import classNames from "classnames";

import styles from "./Button.module.scss";

function Button({
  outline,
  children,
  className,
  onClick,
}: {
  outline?: boolean;
  onClick?: any;
  children: JSX.Element | string;
  className?: string;
}) {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.outline]: outline,
        [styles.filled]: !outline,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
