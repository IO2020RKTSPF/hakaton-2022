import classNames from "classnames";

import styles from "./Paragraph.module.scss";

function Paragraph({
  children,
  textAlgin,
  className,
}: {
  children: JSX.Element | JSX.Element[] | string;
  textAlgin?: "center";
  className?: string;
}) {
  return (
    <p
      className={classNames(styles.paragraph, className, {
        [styles.center]: textAlgin === "center",
      })}
    >
      {children}
    </p>
  );
}

export default Paragraph;

Paragraph.propTypes = {};
