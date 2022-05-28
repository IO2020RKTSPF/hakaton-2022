import AuthForm from "@containers/AuthForm/AuthForm";
import Heading from "@containers/Heading/Heading";
import Paragraph from "@containers/Paragraph/Paragraph";
import Link from "next/link";

import config from "../../config";
import Container from "../../containers/Container/Container";
import Input from "@containers/Input/Input";
import { useEffect, useState } from "react";
import usePostRequest from "../../hooks/usePostRequest";
import { AuthPostResponse } from "@api/index";
import { useDispatch } from "react-redux";
import { setToken } from "@redux/reducers/auth";

function Register({}) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [organizationName, setOrganizationName] = useState();

  const { fetch, response } = usePostRequest<any, AuthPostResponse>({
    pathname: "/api/auth/register",
  });

  const handleSubmit = async () => {
    await fetch({
      email,
      organizationName,
      username,
      password,
    });
  };

  useEffect(() => {
    dispatch(setToken(response?.token));
  }, [dispatch, response]);

  return (
    <Container>
      <header>
        <Heading label="Zarejestruj się" />
        <Paragraph>Korzystaj z nieograniczych możliwości.</Paragraph>
      </header>
      <AuthForm
        term={
          <>
            <span>Pamiętaj, rejestrując się akceptujesz naszą </span>
            <Link href={config.registerPath}>
              <a>politykę prywatności.</a>
            </Link>
          </>
        }
        onSubmit={handleSubmit}
      >
        <Input placeholder="Adres email" value={email} onChange={setEmail} />
        <Input placeholder="Login" value={username} onChange={setUsername} />
        <Input
          placeholder="Hasło"
          value={password}
          type="password"
          onChange={setPassword}
        />
        <Input
          placeholder="Nazwa organizacji"
          value={organizationName}
          onChange={setOrganizationName}
        />
      </AuthForm>
      <Paragraph textAlgin="center">
        <span>Nie masz jeszcze konta? </span>
        <Link href={config.loginPath}>
          <a>Zaloguj się</a>
        </Link>
      </Paragraph>
    </Container>
  );
}

export default Register;
