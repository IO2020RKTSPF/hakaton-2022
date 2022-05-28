import { setToken } from "@redux/reducers/auth";
import { getToken } from "@redux/reducers/auth/selectors";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import config from "../config";
import isString from "../lib/isString";

function AuthHelper() {
  const router = useRouter();
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenFromCookie = Cookies.get(config.cookieTokenName);

    if (!isString(tokenFromCookie)) return;
    dispatch(setToken(tokenFromCookie));
  }, [dispatch]);

  useEffect(() => {
    if (!isString(token)) return;
    router.push(config.homepagePath);
    Cookies.set(config.cookieTokenName, token);
  }, [token]);

  return null;
}

export default AuthHelper;
