import AuthForm from "@containers/AuthForm/AuthForm";
import Heading from "@containers/Heading/Heading";
import Input from "@containers/Input/Input";
import Paragraph from "@containers/Paragraph/Paragraph";
import Link from "next/link";
import { useState } from "react";

import config from "../../config";
import Container from "../../containers/Container/Container";
import usePostRequest from "../../hooks/usePostRequest";

function Login({}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { fetch, response } = usePostRequest({
    pathname: "/api/auth/login",
  });

  const handleSubmit = async () => {
    await fetch({
      username,
      password,
    });
  };

  return (
    <Container>
      <header>
        <Heading label="Zaloguj się" />
        <Paragraph>Cieszym się, że wracasz. Witaj spowrotem!</Paragraph>
      </header>
      <AuthForm onSubmit={handleSubmit}>
        <Input placeholder="Login" value={username} onChange={setUsername} />
        <Input
          placeholder="Hasło"
          value={password}
          type="password"
          onChange={setPassword}
        />
      </AuthForm>
      <Paragraph textAlgin="center">
        <span>Nie masz jeszcze konta? </span>
        <Link href={config.registerPath}>
          <a>Zarejestruj się</a>
        </Link>
      </Paragraph>
    </Container>
  );
}

export default Login;
