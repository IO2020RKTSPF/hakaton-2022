import classNames from "classnames";

import styles from "./Button.module.scss";

function Button({
  outline,
  children,
  className,
}: {
  outline?: boolean;
  children: JSX.Element | string;
  className?: string;
}) {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.outline]: outline,
        [styles.filled]: !outline,
      })}
    >
      {children}
    </button>
  );
}

export default Button;
