import Button from "@containers/Button/Button";
import Input from "@containers/Input/Input";
import Paragraph from "@containers/Paragraph/Paragraph";
import { FormEventHandler, useEffect, useState } from "react";

import useGetRequest from "../../hooks/useGetRequest";
import usePostRequest from "../../hooks/usePostRequest";
import { preventDefault } from "../../lib/preventDefault";
import styles from "./AuthForm.module.scss";

function AuthForm({
  onSubmit,
  term,
  children,
}: {
  onSubmit: any;
  term?: JSX.Element | JSX.Element[] | string;
  children: JSX.Element | JSX.Element[] | string;
}) {
  const handleSubmit = async (e: any) => {
    preventDefault(e);
    await onSubmit();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {children}
      {term && <Paragraph className={styles.term}>{term}</Paragraph>}
      <Button className={styles.submit}>Zaloguj się</Button>
    </form>
  );
}

export default AuthForm;

AuthForm.propTypes = {};
