import { AuthPostResponse } from "@api/index";
import AuthForm from "@containers/AuthForm/AuthForm";
import Heading from "@containers/Heading/Heading";
import Input from "@containers/Input/Input";
import Paragraph from "@containers/Paragraph/Paragraph";
import { setToken } from "@redux/reducers/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import config from "../../config";
import Container from "../../containers/Container/Container";
import usePostRequest from "../../hooks/usePostRequest";
import isString from "../../lib/isString";
import { useRouter } from "next/router";

function Login({}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  const dispatch = useDispatch();

  const { fetch, response } = usePostRequest<any, AuthPostResponse>({
    pathname: "/api/auth/login",
  });

  const handleSubmit = async () => {
    await fetch({
      username,
      password,
    });
  };

  useEffect(() => {
    const token = response?.token;
    if (!isString(token)) return;

    dispatch(setToken(response?.token));
    router.push(config.userPath, undefined, { shallow: true });
  }, [dispatch, response]);

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
