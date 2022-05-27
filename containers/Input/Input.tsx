import input from "@containers/Input/Input";
import { ChangeEventHandler, InputHTMLAttributes } from "react";

import styles from "./Input.module.scss";

function Input({
  onChange,
  placeholder,
  value = "",
  type,
}: {
  onChange: any;
  value?: string;
  placeholder?: string;
  type?: "text" | "password";
}) {
  const handleChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <input
      onChange={handleChange}
      value={value}
      type={type}
      placeholder={placeholder}
      className={styles.input}
    />
  );
}

export default Input;

Input.propTypes = {};
