import { clearToken } from "@redux/reducers/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import config from "../../config";

function Logout() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(clearToken());
    Cookies.remove(config.cookieTokenName);
    router.push(config.loginPath);
  }, [dispatch, router]);
}

export default Logout;
