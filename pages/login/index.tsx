import AuthForm from "@containers/AuthForm/AuthForm";
import Heading from "@containers/Heading/Heading";
import Paragraph from "@containers/Paragraph/Paragraph";
import Link from "next/link";

import config from "../../config";
import Container from "../../containers/Container/Container";
import Input from "@containers/Input/Input";
import { useState } from "react";
import usePostRequest from "../../hooks/usePostRequest";

function Login({}) {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [organizationName, setOrganizationName] = useState();

  const { fetch, response } = usePostRequest({
    pathname: "/api/auth/login",
  });

  const handleSubmit = async () => {
    await fetch({
      email,
      organizationName,
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
